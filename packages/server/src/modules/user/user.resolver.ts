import { Resolver, Query } from "type-graphql";

@Resolver()
export class UserResolver {
    @Query(returns => String)
    async hello() {
        return "Hello World";
    }
}