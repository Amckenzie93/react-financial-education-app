import { DataHandler } from "../Services/clientDataHandler"
import EduCard from './EduCard.js'
import React from 'react';

class EduCards extends React.Component {

   
    render() {

        let dataHandlerService = DataHandler.getInstance();
        const data = dataHandlerService.getAllData();

        return (
            <div>
            <EduCard 
            title={"Lesson 1"}
            subtitle={"What is Money?"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            imageUrl={"./Assets/Images/money.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            title={"Lesson 2"}
            subtitle={"What is Inflation?"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            imageUrl={"./Assets/Images/inflation.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            title={"Lesson 3"}
            subtitle={"What is an ISA?"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            imageUrl={"./Assets/Images/isa.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            title={"Lesson 4"}
            subtitle={"What is the Stock Market?"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            imageUrl={"./Assets/Images/stocks.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            title={"Lesson 5"}
            subtitle={"What are Bonds?"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            imageUrl={"./Assets/Images/bonds.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            title={"Lesson 5"}
            subtitle={"What is Capitol Gains?"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            imageUrl={"./Assets/Images/gains.png"}
            alt={"Graphical icon of x."}
            />
            </div>
        );
    }
}

export default EduCards;