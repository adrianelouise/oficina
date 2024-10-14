import { Schema, model } from 'mongoose';

const vehicleSchema = new Schema({
    plate: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
  
    owner: {
        type: String,
        required: true  
    },
    maintenances: {
            type: [Schema.Types.ObjectId],
            ref: 'maintenance'

    },
    },
);

export default model('vehicle', vehicleSchema);

