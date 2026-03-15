import { Schema, model } from 'mongoose';

const threatSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        enum: ['low', 'medium', 'high'],
        required: true,
    },
    countryOfOrigin: {
        type: String,
        required: true,
    },
    dateIdentified: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['active', 'neutralized', 'unknown'],
        default: 'active',
    },
});

export const Threat = model('Threat', threatSchema);