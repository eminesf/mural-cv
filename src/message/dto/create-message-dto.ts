import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  name?: string;

  @IsString()
  message: string;
}
