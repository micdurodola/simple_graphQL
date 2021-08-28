import mongoose from 'mongoose';

export const Dataset = mongoose.model("Dataset",{Country:String,Year:String,
                                        Area:Number,totalPopulation:Number});