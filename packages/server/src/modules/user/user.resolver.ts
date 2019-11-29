import { UserService } from './user.service';
import { Resolver, Query } from "type-graphql";

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Query(returns => String)
    async hello(): Promise<string> {
        return this.userService.hello();
    }
}