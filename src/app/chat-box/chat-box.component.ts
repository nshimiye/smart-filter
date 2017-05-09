import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message.model';

import { MessageType } from '../enums/message-type.enum';

import { TextParsingService } from '../services/text-parsing.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  messages: Array<Message> = [];
  fetchingAnswer = false; // implicity typing
  constructor(
    private textParsingService: TextParsingService
  ) { }

  ngOnInit() {
    const message = new Message(MessageType.ANSWER);
    message.setText('Type a sentence and i will tell you about it!');
    this.messages.push(message);

    // @TODO remove => examples
    // 'Once upon time, John Smith went to Amazon'
    // 'What is Bruce lee favorite drink'
    // 'Ajay works at Fusemachines Nepal'

    // const userInput = ;
    // const message1 = new Message(MessageType.QUESTION);
    // message1.setText(userInput);
    // this.messages.push(message1);

    // const message2 = new Message(MessageType.ANSWER);
    // message2.setText([{name: 'John Smith', nameType: 'person', score: 0.8}, {name: 'Amazon', nameType: 'location', score: 0.4}]);
    // this.messages.push(message2);

  }

  submitForm(ev) {
    this.fetchingAnswer = true;

    const text = ev.value.userInput;
    ev.resetForm();

    const message1 = new Message(MessageType.QUESTION);
    message1.setText(text);
    this.messages.push(message1);

    this.textParsingService.textToEntities(text)
    .then(entities => {
      this.fetchingAnswer = false;

    const message2 = new Message(MessageType.ANSWER);
    message2.setText(entities);
    this.messages.push(message2);

    })
    .catch(e => {
    this.fetchingAnswer = false;
    });
  }

}
