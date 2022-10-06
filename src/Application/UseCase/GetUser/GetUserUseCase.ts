import { User } from "../../../Domain/Entity/User";
import { UserRepositoryInterface } from "./UserRepositoryInterface";

export class GetUserUseCase
{
    private userRepository: UserRepositoryInterface;

    constructor(userRepository: UserRepositoryInterface) {
        this.userRepository = userRepository;
    }

    public execute(uid: String): Promise<User> {
        return this.userRepository.getByUid(uid);
    }
}