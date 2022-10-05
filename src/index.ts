
// Import the express in typescript file
import express from 'express';
import * as dotenv from "dotenv";
import userRoute from './Infrastructure/Route/userRoute';

dotenv.config();
// const mongoDB = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/'+process.env.DB_NAME;
// mongoose.connect(mongoDB);
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
 
// Initialize the express engine
const app: express.Application = express();
// Take a port 3000 for running server.
const port: number = 3000;
// Handling '/' Request
app.get('/', (_req, _res) => {
    _res.send("Hello refueling");
});

app.use(express.json());
app.use('/user', userRoute);
 
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});