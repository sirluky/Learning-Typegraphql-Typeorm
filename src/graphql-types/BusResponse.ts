import { ObjectType, Field } from "type-graphql";
import { FieldError } from "./FieldError";
import { Bus } from "src/entity/Bus";

@ObjectType()
export class BusResponse {
    @Field(() => Bus, { nullable: true })
    bus?: Bus;

    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];
}
