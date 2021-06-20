import EduCard from './EduCard.js'
import React from 'react';

class EduCards extends React.Component {
  
    render() {

        return (
            <div>
            <EduCard 
            lessonId={1}
            title={"Lesson 1"}
            subtitle={"What is Money?"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            lessonTitle={"sub title about topic"}
            lessonText={"topic text conveying information in which should help educate the users on what money actually is and its history etc."}
            lessonPoints={["some topic point 1", "some topic point 2", "some topic point 3"]}
            imageUrl={"./Assets/Images/money.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            lessonId={2}
            title={"Lesson 2"}
            subtitle={"What is Inflation?"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            lessonTitle={"sub title about topic"}
            lessonText={"topic text conveying information in which should help educate the users on what money actually is and its history etc."}
            lessonPoints={["some topic point 1", "some topic point 2", "some topic point 3"]}
            imageUrl={"./Assets/Images/inflation.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            lessonId={3}
            title={"Lesson 3"}
            subtitle={"What can i do about debt?"}
            paragraph={"I've spent quality time in the aerospace community, with my service on two presidential commissions, but at heart, I'm an academic. Being an academic means I don't wield power over person, place or thing. I don't command armies; I don't lead labor unions."}
            lessonTitle={"sub title about topic"}
            lessonText={"topic text conveying information in which should help educate the users on what money actually is and its history etc."}
            lessonPoints={["Snowball Method", "Avalanch Method"]}
            subHeading1={"Snowball Method"}
            subParagraph1={"Details about Snowball bdfgndjndk dfgjn dkfgnjfkdg Pay off the smallest debt first and continue this process knocking off each as you go"}
            subHeading2={"Avalanch Method"}
            subParagraph2={"Details about avalanch method dfsgg fkldg dlgfgj mlmdfg pay the minimum on all debts focusing any other money on the highest interest rate"}
            imageUrl={"./Assets/Images/1.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            lessonId={4}
            title={"Lesson 4"}
            subtitle={"What is an ISA ?"}
            paragraph={"Checkin in soon to find out more information about ISA's in the coming months."}
            lessonTitle={"Content coming soon"}
            lessonText={""} 
            lessonPoints={[]}
            imageUrl={"./Assets/Images/isa.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            lessonId={5}
            title={"Lesson 5"}
            subtitle={"What is the Stock Market?"}
            paragraph={"Checkin in soon to find out more information about ISA's in the coming months."}
            lessonTitle={"Content coming soon"}
            lessonText={""} 
            lessonPoints={[]}
            imageUrl={"./Assets/Images/stocks.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            lessonId={6}
            title={"Lesson 6"}
            subtitle={"What are Bonds?"}
            paragraph={"Checkin in soon to find out more information about ISA's in the coming months."}
            lessonTitle={"Content coming soon"}
            lessonText={""} 
            lessonPoints={[]}
            imageUrl={"./Assets/Images/bonds.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            lessonId={7}
            title={"Lesson 7"}
            subtitle={"What is Capitol Gains?"}
            paragraph={"Checkin in soon to find out more information about ISA's in the coming months."}
            lessonTitle={"Content coming soon"}
            lessonText={""} 
            lessonPoints={[]}
            imageUrl={"./Assets/Images/gains.png"}
            alt={"Graphical icon of x."}
            />
            </div>
        );
    }
}

export default EduCards;