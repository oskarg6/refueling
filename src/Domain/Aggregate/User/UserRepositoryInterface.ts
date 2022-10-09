import { User } from "../../Entity/User";

export interface UserRepositoryInterface
{
    create(user: User): Promise<void>;
    update(user: User): Promise<void>;
}