import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';

@Injectable()
export class MessageService {
  private messages = [];

  findAllMessages() {
    return this.messages;
  }

  createNewMessage(createMessage: CreateMessageDto) {
    return this.messages.push(createMessage);
  }
}
