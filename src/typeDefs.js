import {gql} from 'apollo-server-express';

export const typeDefs = gql`
type Query{      
    datasets : [Dataset!]!     

}

type Dataset{ 
    id : ID!   
    Country: String! 
    Year : String!
    Area : Int!
    totalPopulation : Int!

}
type Mutation{
    createData(Country:String!,Year:String!,Area:Int!,totalPopulation:Int!): Dataset!
}
`;