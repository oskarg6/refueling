import { MongoClient } from "mongodb";

export class MongoClientFactory
{
    static client:MongoClient ;

    static async createClient(): Promise<MongoClient> {
        if (!this.client) {
            this.client = await this.createAndConnectClient();
        }

        return this.client;
    }

    static async createAndConnectClient(): Promise<MongoClient> {
        const url = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_HOST + ':' + '27017' + '/' + process.env.DB_NAME + '?authSource=admin'; 
        const client = new MongoClient(url, {ignoreUndefined: true});

        await client.connect();

        return client
    }
}