import { User } from "../../../Domain/Entity/User";
import { UserRepositoryInterface } from "./UserRepositoryInterface";

export class GetAllUserUseCase
{
    private userRepository: UserRepositoryInterface;
    constructor(userRepository: UserRepositoryInterface) {
        this.userRepository = userRepository;
    }

    public execute(): Promise<User[]> {
        const allUserList = this.userRepository.getAll();

        return allUserList;
    }
}