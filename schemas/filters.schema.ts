/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Filters {
  @Prop()
  id: string;
  @Prop()
  label: string;
}

export const FiltersSchema = SchemaFactory.createForClass(Filters);
