import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class UserDocument {
  @Prop()
  username: string;

  @Prop()
  createdAt: Date;
}

export const userSchema = SchemaFactory.createForClass(UserDocument);

export type User = UserDocument & Document;