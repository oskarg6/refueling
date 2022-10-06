import { User } from "../../../Domain/Entity/User";

export interface UserRepositoryInterface
{
    getByUid(uid: String): Promise<User>;
}