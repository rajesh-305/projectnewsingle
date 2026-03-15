import { Request, Response } from 'express';
import { Scenario } from '../models/scenario.model';

// Launch maps to creating a scenario so existing route shape remains stable.
export const launchSimulation = async (req: Request, res: Response) => {
    return createScenario(req, res);
};

export const getSimulationStatus = async (req: Request, res: Response) => {
    return getScenarioById(req, res);
};

// Create a new simulation scenario
export const createScenario = async (req: Request, res: Response) => {
    try {
        const scenarioData = req.body;
        const newScenario = new Scenario(scenarioData);
        await newScenario.save();
        res.status(201).json(newScenario);
    } catch (error) {
        res.status(500).json({ message: 'Error creating scenario', error });
    }
};

// Get all simulation scenarios
export const getAllScenarios = async (req: Request, res: Response) => {
    try {
        const scenarios = await Scenario.find();
        res.status(200).json(scenarios);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching scenarios', error });
    }
};

// Get a specific simulation scenario by ID
export const getScenarioById = async (req: Request, res: Response) => {
    try {
        const scenario = await Scenario.findById(req.params.id);
        if (!scenario) {
            return res.status(404).json({ message: 'Scenario not found' });
        }
        res.status(200).json(scenario);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching scenario', error });
    }
};

// Update a simulation scenario by ID
export const updateScenario = async (req: Request, res: Response) => {
    try {
        const updatedScenario = await Scenario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedScenario) {
            return res.status(404).json({ message: 'Scenario not found' });
        }
        res.status(200).json(updatedScenario);
    } catch (error) {
        res.status(500).json({ message: 'Error updating scenario', error });
    }
};

// Delete a simulation scenario by ID
export const deleteScenario = async (req: Request, res: Response) => {
    try {
        const deletedScenario = await Scenario.findByIdAndDelete(req.params.id);
        if (!deletedScenario) {
            return res.status(404).json({ message: 'Scenario not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting scenario', error });
    }
};