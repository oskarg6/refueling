import {User} from '../../../Domain/Entity/User';
import {UserRepositoryInterface} from './UserRepositoryInterface';
import {RandomUUIDServiceInterface} from './RandomUUIDServiceInterface';

export class CreateUserUseCase
{
    private userRepository: UserRepositoryInterface;
    private randomUUIDService: RandomUUIDServiceInterface;

    constructor(userRepository: UserRepositoryInterface, randomUUIDService: RandomUUIDServiceInterface) {
        this.userRepository = userRepository;
        this.randomUUIDService = randomUUIDService
    }

    public execute(name: string): User {
        const uid: string = this.randomUUIDService.createUUID();
        const user = new User(uid, name);

        this.userRepository.save(user);

        return user;
    }
}
