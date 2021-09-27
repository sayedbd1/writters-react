import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import Team from '../Team/Team';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    const [team, setTeam] = useState([]);

    const handleSelectPerson = person => {
        const newTeam = [...team, person];
        setTeam(newTeam);
    };

    useEffect(() => {
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-9">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            cosmetics.map(cosmetic => <Cosmetic
                                key={cosmetic.totalBooks * Math.random()}
                                cosmetic={cosmetic}
                                handleSelectPerson={handleSelectPerson}
                            >
                            </Cosmetic>)
                        }
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-3">
                    <Team team={team}></Team>
                </div>
            </div>
        </div>
    );
};

export default Cosmetics;