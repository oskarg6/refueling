import {User} from '../../../Domain/Entity/User';
import {RandomUUIDServiceInterface} from './RandomUUIDServiceInterface';
import { UserAggregateFactory } from '../../../Domain/Aggregate/Factory/UserAggregateFactory';
import { UserRepositoryInterface } from '../../../Domain/Aggregate/User/UserRepositoryInterface';
import { UserAggregate } from '../../../Domain/Aggregate/User/UserAggregate';

export class CreateUserUseCase
{
    private userRepository: UserRepositoryInterface;
    private randomUUIDService: RandomUUIDServiceInterface;
    private userAggegateFactory: UserAggregateFactory;

    constructor(userRepository: UserRepositoryInterface, randomUUIDService: RandomUUIDServiceInterface, userAggregateFactory: UserAggregateFactory) {
        this.userRepository = userRepository;
        this.randomUUIDService = randomUUIDService;
        this.userAggegateFactory = userAggregateFactory;
    }

    public execute(name: string): User {
        const uid: string = this.randomUUIDService.createUUID();
        const user: User = new User(uid, name);

        const userAggregate: UserAggregate = this.userAggegateFactory.get(user, this.userRepository);
        
        userAggregate.save();

        return userAggregate.getUser();
    }
}
