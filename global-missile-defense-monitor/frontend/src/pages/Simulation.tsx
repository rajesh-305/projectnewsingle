import React, { useEffect, useState } from 'react';
import { fetchSimulationData } from '../services/api';
import MapView from '../components/MapView';
import Timeline from '../components/Timeline';

const Simulation: React.FC = () => {
    const [simulationData, setSimulationData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchSimulationData();
                setSimulationData(data);
            } catch (error) {
                console.error('Error fetching simulation data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Interactive Geopolitical Simulation</h1>
            <MapView data={simulationData} />
            <Timeline data={simulationData} />
        </div>
    );
};

export default Simulation;