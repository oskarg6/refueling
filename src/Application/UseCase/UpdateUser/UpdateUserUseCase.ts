import { User } from "../../../Domain/Entity/User";
import { UserRepositoryInterface } from "./UserRepositoryInterface";

export class UpdateUserUseCase
{
    private userRepository: UserRepositoryInterface;

    constructor(userRepository: UserRepositoryInterface) {
        this.userRepository = userRepository;
    }

    public execute(): Promise<User> {

    }
}