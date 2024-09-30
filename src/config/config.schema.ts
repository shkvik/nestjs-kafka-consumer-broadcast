import { IsNotEmpty, IsString } from "class-validator";

export class ConfigApp {

  @IsString()
  @IsNotEmpty()
  KAFKA_BROKER: string;
}