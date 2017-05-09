import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TextParsingService {

  backendApi: string;
  constructor(public http: Http) {
    this.backendApi = 'http://localhost:1337/entity-manager/extract-raw';
  }

  public async textToEntities(text: string): Promise<Array<{ name: string, nameType: string, score: string }>> {
    const entities = await this.parseText(text);

    const cleanEntities = entities
      .map(({ text: name, 'type': nameType, relevance: score }) =>
        ({ name, nameType, score }));
    return cleanEntities;
  }
  private parseText(text): Promise<Array<any>> {
    return this.http.post(this.backendApi, {
      text
    })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const entities = res.json();
    // debugger;
    return (entities || [])
  }

  private handleError(error: Response | any) {
    console.log('error', error);
    return [];
  }

}
