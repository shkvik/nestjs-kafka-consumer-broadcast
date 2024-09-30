import { IsNotEmpty, IsString } from "class-validator";

export class ConfigApp {

  @IsString()
  @IsNotEmpty()
  KAFKA_BROKER: string;

  @IsString()
  @IsNotEmpty()
  KAFKA_GROUP_ID: string;
}