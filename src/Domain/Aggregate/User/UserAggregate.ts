import { UserRepositoryInterface } from "./UserRepositoryInterface";
import { User } from "../../Entity/User";

export class UserAggregate
{
    private user: User;
    private userRepository: UserRepositoryInterface;

    constructor (user: User, userRepository: UserRepositoryInterface) {
        this.user = user;
        this.userRepository = userRepository;
    }

    async save(): Promise<void> {
        this.userRepository.create(this.user);
    }

    getUser(): User {
        return this.user;
    }
}