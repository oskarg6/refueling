import { UserRepositoryInterface as GetAllUserUseCase } from '../../Application/UseCase/GetAllUser/UserRepositoryInterface';
import { UserRepositoryInterface as GetUserUseCase } from '../../Application/UseCase/GetUser/UserRepositoryInterface';
import { UserRepositoryInterface as UserAggregate } from '../../Domain/Aggregate/User/UserRepositoryInterface';
import { User } from '../../Domain/Entity/User';
import { BaseRepository } from './BaseRepository';

export class UserRepository extends BaseRepository implements UserAggregate, GetAllUserUseCase, GetUserUseCase
{
    protected collectionName(): string {
        return 'user';
    }

    async create(user: User): Promise<void> {
        (await this.collection()).insertOne(user);
    }

    async update(user: User): Promise<void> {
        (await this.collection()).updateOne({uid: user.uid}, {$set: user});
    }

    async getAll(): Promise<User[]> {
        const documents = (await this.collection()).find({}).toArray();

        return (await documents).map((document) => {
            return new User(document.uid, document.name);
        });
    }

    async getByUid(uid: String): Promise<User> {
        const documents = (await this.collection()).find({uid: uid}).toArray();

        const userList = (await documents).map((document) => {
            return new User(document.uid, document.name);
        });

        return userList[0];
    }
}