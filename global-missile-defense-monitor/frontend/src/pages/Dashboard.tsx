import React from 'react';
import { useEffect, useState } from 'react';
import { fetchStatistics } from '../services/api';
import MapView from '../components/MapView';
import Timeline from '../components/Timeline';

const Dashboard: React.FC = () => {
    const [statistics, setStatistics] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStatistics = async () => {
            try {
                const data = await fetchStatistics();
                setStatistics(data);
            } catch (error) {
                console.error('Error fetching statistics:', error);
            } finally {
                setLoading(false);
            }
        };

        loadStatistics();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Global Missile Defense Monitor</h1>
            <MapView statistics={statistics} />
            <Timeline statistics={statistics} />
        </div>
    );
};

export default Dashboard;