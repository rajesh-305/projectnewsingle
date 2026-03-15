import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Change this to your API Gateway URL

export const fetchDashboardData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/dashboard`);
        return response.data;
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        throw error;
    }
};

export const fetchSimulationData = async (scenarioId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/simulation/${scenarioId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching simulation data:', error);
        throw error;
    }
};

export const createSimulation = async (simulationData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/simulation`, simulationData);
        return response.data;
    } catch (error) {
        console.error('Error creating simulation:', error);
        throw error;
    }
};

export const fetchAlerts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/alerts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching alerts:', error);
        throw error;
    }
};

export const fetchIntelligenceData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/intelligence`);
        return response.data;
    } catch (error) {
        console.error('Error fetching intelligence data:', error);
        throw error;
    }
};