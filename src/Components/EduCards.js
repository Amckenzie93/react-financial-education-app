import EduCard from './EduCard.js'
import React from 'react';

// localStorage.setItem("Name", "Adam");
// const name = localStorage.getItem("Name");


class EduCards extends React.Component {

    render() {
        return (
            <div>
            <EduCard 
            title={"Lesson 1"}
            subtitle={"Eduational items of interest"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            imageUrl={"./Assets/Images/me.svg"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            title={"Lesson 2"}
            subtitle={"Eduational items of interest"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            imageUrl={"./Assets/Images/me.svg"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            title={"Lesson 3"}
            subtitle={"Eduational items of interest"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            imageUrl={"./Assets/Images/me.svg"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            title={"Lesson 4"}
            subtitle={"Eduational items of interest"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            imageUrl={"./Assets/Images/me.svg"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            title={"Lesson 5"}
            subtitle={"Eduational items of interest"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            imageUrl={"./Assets/Images/me.svg"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            title={"Lesson 6"}
            subtitle={"Eduational items of interest"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            imageUrl={"./Assets/Images/me.svg"}
            alt={"Graphical icon of x."}
            />
            </div>
        );
    }
}

export default EduCards;