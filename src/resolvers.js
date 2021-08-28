import {Dataset} from './models/country.model';

// Create Resolvers
export const resolvers = {   
  
    Query : { 
    datasets: async () => await Dataset.find()        
    },
    Mutation:{        
        createData: async(_,{Country,Year,Area,totalPopulation}) => {
            const data = new Dataset({Country,Year,Area,totalPopulation})                        
            await  data.save();            
            return data;
        }
    }

};

