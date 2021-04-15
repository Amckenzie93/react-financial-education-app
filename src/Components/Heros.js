import Hero from './Hero.js'
import React from 'react';

// localStorage.setItem("Name", "Adam");
// const name = localStorage.getItem("Name");


class Heros extends React.Component {

    render() {
        return (
            <div>
            <Hero/>
            </div>
        );
    }
}

export default Heros;