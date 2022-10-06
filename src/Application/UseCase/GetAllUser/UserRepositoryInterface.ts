import { User } from "../../../Domain/Entity/User";

export interface UserRepositoryInterface
{
    getAll(): Promise<User[]>;
}