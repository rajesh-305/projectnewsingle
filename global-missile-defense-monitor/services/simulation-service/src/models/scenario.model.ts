import { Schema, model } from 'mongoose';

const scenarioSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    parameters: {
        type: Map,
        of: Schema.Types.Mixed,
    },
    results: {
        type: Map,
        of: Schema.Types.Mixed,
    },
});

export const Scenario = model('Scenario', scenarioSchema);