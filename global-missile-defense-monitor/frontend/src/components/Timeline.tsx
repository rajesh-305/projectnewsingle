import React from 'react';

const Timeline: React.FC = () => {
    const [events, setEvents] = React.useState<any[]>([]);

    React.useEffect(() => {
        // Fetch timeline events from the API
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/timeline');
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching timeline events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="timeline">
            <h2>Timeline of Missile Launches</h2>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        <strong>{event.date}</strong>: {event.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Timeline;