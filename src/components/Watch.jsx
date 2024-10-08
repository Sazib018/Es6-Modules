import React, { useEffect, useState } from 'react';

const Watch = () => {

    const [allCars , setAllCars] = useState ([])

    useEffect(() => {
        fetch('car.json')
        .then(res => res.json())
        .then(data => setAllCars(data))
    }, []);

    return (
        <div>
            {
                allCars.map(car =><>
                <h1>Car Name: {car.name}</h1>
                <h2>Car Model: {car.model}</h2>
                <h3>Car Brand: {car.brand}</h3>
                <p>Car Price: ${car.price}</p>
                </>)
            }
        </div>
    );
};

export default Watch;