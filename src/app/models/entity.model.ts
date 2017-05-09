import { EntityInterface } from './entity.interface';
export class EntityModel implements EntityInterface {
    name: string;
    nameType: string;
    score: number;

    constructor(name: string, nameType: string, score: number) {
        this.name = name;
        this.nameType = nameType;
        this.score = score;
    }

}
