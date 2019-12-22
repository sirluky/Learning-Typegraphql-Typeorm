import { Query, Resolver, UseMiddleware, Mutation, Arg, Ctx, InputType, Field } from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import { BusResponse } from "../graphql-types/BusResponse";
import { Bus } from "../entity/Bus";

@InputType()
class BusInput {
    // @Field()
    // id: number;

    @Field()
    label: string;

    @Field()
    name: string;
}

@Resolver(Bus)
export class BusResolver {
    @Query(() => [Bus])
    // @UseMiddleware(isAuth)
    bus() {
        return Bus.find();

    }

    @Mutation(() => Bus)
    // @Authorized()
    async addBus(
        @Arg("busData") busData: BusInput,
        // @Ctx("bus") data: Bus,
    ): Promise<Bus> {
        const bus = await Bus.create(busData);
        console.log(bus)
        return bus.save();
    }
    // @Mutation(returns => Recipe)
    // addRecipe(@Arg("recipe") recipeInput: RecipeInput, @Ctx() { user }: Context): Promise<Recipe> {
    //   const recipe = this.recipeRepository.create({
    //     ...recipeInput,
    //     author: user,
    //   });
    //   return this.recipeRepository.save(recipe);
    // }
}


