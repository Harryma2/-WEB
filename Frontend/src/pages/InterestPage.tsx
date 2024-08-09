import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getInterest } from '../service-API/api';

interface Interest {
    id: string;
    name: string;
}

const InterestPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [interest, setInterest] = useState<Interest | null>(null);

    useEffect(() => {
        getInterest(id)
            .then(response => {
                setInterest(response.data);
            })
            .catch(error => {
                console.error('Error fetching interest data:', error);
            });
    }, [id]);

    if (!interest) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{interest.name}</h1>
            <p>ID: {interest.id}</p>
        </div>
    );
};

export default InterestPage;
