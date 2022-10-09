import { User } from "../../Entity/User";
import { UserAggregate } from "../User/UserAggregate";
import { UserRepositoryInterface } from "../User/UserRepositoryInterface";

export class UserAggregateFactory
{
    get(user: User, userRepository: UserRepositoryInterface) {
        return new UserAggregate(
            user,
            userRepository
        );
    }
}