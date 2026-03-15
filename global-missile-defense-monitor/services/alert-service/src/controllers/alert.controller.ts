import { Request, Response } from 'express';
import Alert from '../models/alert.model';

// Create a new alert
export const createAlert = async (req: Request, res: Response) => {
    try {
        const alert = new Alert(req.body);
        await alert.save();
        res.status(201).json(alert);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all alerts
export const getAlerts = async (req: Request, res: Response) => {
    try {
        const alerts = await Alert.find();
        res.status(200).json(alerts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific alert by ID
export const getAlertById = async (req: Request, res: Response) => {
    try {
        const alert = await Alert.findById(req.params.id);
        if (!alert) {
            return res.status(404).json({ message: 'Alert not found' });
        }
        res.status(200).json(alert);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an alert by ID
export const updateAlert = async (req: Request, res: Response) => {
    try {
        const alert = await Alert.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!alert) {
            return res.status(404).json({ message: 'Alert not found' });
        }
        res.status(200).json(alert);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an alert by ID
export const deleteAlert = async (req: Request, res: Response) => {
    try {
        const alert = await Alert.findByIdAndDelete(req.params.id);
        if (!alert) {
            return res.status(404).json({ message: 'Alert not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};