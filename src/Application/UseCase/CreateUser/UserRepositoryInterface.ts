import { User } from '../../../Domain/Entity/User';

export interface UserRepositoryInterface
{
    save(user: User): void;
}