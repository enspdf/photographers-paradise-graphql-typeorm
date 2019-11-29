import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { User } from "../../entity/User";
import { Repository } from "typeorm";

@Service()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>
    ) { }

    async hello(): Promise<string> {
        return "Hello World";
    }
}