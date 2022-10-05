import { Collection, MongoClient } from "mongodb";

export abstract class BaseRepository
{
    protected client: Promise<MongoClient>;

    constructor(client: Promise<MongoClient>) {
        this.client = client;
    }

    protected abstract collectionName(): string;

    protected async collection(): Promise<Collection> {
        return (await this.client).db().collection(this.collectionName());
    }
}