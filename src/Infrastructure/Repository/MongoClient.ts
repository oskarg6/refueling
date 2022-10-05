export abstract class MongoClient
{
    private client: any;

    protected getClient(): any {
        if (!this.client) {
            this.client = this.createClient();
        }

        return this.client;
    }

    protected abstract createClient(): any;
}