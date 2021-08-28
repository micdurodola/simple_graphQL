import {Dataset} from './models/country.model';


export const resolvers = {       
  
    Query : { 
 
   
    datasets: async () => await Dataset.find()
        
    },
    Mutation:{        
        createData: async(_,{Country,Year,Area,Population}) => {
            const data = new Dataset({Country,Year,Area,Population})                        
            await  data.save();            
            return data;
        }
    }

  


};

