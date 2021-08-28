import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer,gql } from 'apollo-server-express';
import {resolvers} from './resolvers';
import {typeDefs} from './typeDefs';
import dotenv from 'dotenv';

// Declare path to dotenv file
dotenv.config();
dotenv.config({path:__dirname+'/.env'});

const server = async () => {
    const app = express();
    const PORT = process.env.PORT || 4000;
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })    
    server.applyMiddleware({app});


// Connect to MongoDB Database
const URI = process.env.MONGODB_URI;

try {
    await mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true});
} catch (err) {
    console.log(err);
    
}

app.listen(PORT,()=> {
    console.log( `App is running in port ${PORT}`)
})
}

server();