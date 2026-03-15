import { Request, Response } from 'express';
import { Threat } from '../models/threat.model';

// Get all threats
export const getAllThreats = async (req: Request, res: Response) => {
    try {
        const threats = await Threat.find();
        res.status(200).json(threats);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving threats', error });
    }
};

// Get a specific threat by ID
export const getThreatById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const threat = await Threat.findById(id);
        if (!threat) {
            return res.status(404).json({ message: 'Threat not found' });
        }
        res.status(200).json(threat);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving threat', error });
    }
};

// Create a new threat
export const createThreat = async (req: Request, res: Response) => {
    const newThreat = new Threat(req.body);
    try {
        const savedThreat = await newThreat.save();
        res.status(201).json(savedThreat);
    } catch (error) {
        res.status(400).json({ message: 'Error creating threat', error });
    }
};

// Update an existing threat
export const updateThreat = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedThreat = await Threat.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedThreat) {
            return res.status(404).json({ message: 'Threat not found' });
        }
        res.status(200).json(updatedThreat);
    } catch (error) {
        res.status(400).json({ message: 'Error updating threat', error });
    }
};

// Delete a threat
export const deleteThreat = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedThreat = await Threat.findByIdAndDelete(id);
        if (!deletedThreat) {
            return res.status(404).json({ message: 'Threat not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting threat', error });
    }
};