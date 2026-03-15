import { Schema, model } from 'mongoose';

const alertSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    severity: {
        type: String,
        enum: ['low', 'medium', 'high'],
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
});

alertSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Alert = model('Alert', alertSchema);

export default Alert;