import { CreateMessageDto } from './dto/create-message-dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  findAllMessages() {
    return this.messageService.findAllMessages();
  }

  @Post()
  createNewMessage(@Body() createMessage: CreateMessageDto) {
    return this.messageService.createNewMessage(createMessage);
  }
}
