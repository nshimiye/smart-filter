import { RawTextInterface } from './raw-text.interface';
export class RawTextModel implements RawTextInterface {
    text: string;
    constructor(text: string) {
        this.text = text;
    }
}
