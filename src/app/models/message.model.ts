import { computeScore } from '../custom-decorators/compute-score.decorator';
import { EntityModel } from './entity.model';
import { RawTextModel } from './raw-text.model';
import { MessageType } from '../enums/message-type.enum';
/**
 * in charge of managing one interaction between the user and the bot
 * user: of type SenderType.USER
 * bot: of type SenderType.BOT
 */
export class Message {
    text: string | Array<any>;
    constructor(private messageType: MessageType) {

    }

    @computeScore
    setText(text: string | Array<any>) {
        // return user text if sender === USER
        // return found entities if sender === BOT
        this.text = text;
    }

    // talk about implicity typing
    // talk about getters and setters
    get isQuestion(): boolean {
        return this.messageType === MessageType.QUESTION;
    }


}
