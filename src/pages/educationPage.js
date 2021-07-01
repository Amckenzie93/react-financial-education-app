import Banner from "../Components/Banner";
import EduCard from "../Components/EduCard.js";
import React from 'react';
import Transitions from "../utility/transitions"
import { motion } from "framer-motion";

class educationPage extends React.Component {
  state = {
    userName: localStorage.getItem("userName"),
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let transition = Transitions.getInstance();

    return (
        <div className="Education text-black min-height-100vh padding-verticle-84px">
          {/* render Banner component with props data */}
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={transition.getTransition()}
            transition={{ duration: 0.75 }}
          >
          <Banner
            title={"Hello"}
            usersName={this.state.userName}
            subTitle={"Welcome to finance education at your own pace"}
            paragraph={"Please In your own time feel free to go through each of the offered modules listed below about general finance and how to get the upper hand In order to better yourself financially for the future."}
            image={"./Assets/Images/2.svg"}
          />
          </motion.div>
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={transition.getTransition()}
            transition={{ duration: 1 }}
          >
            {/* Render EduCard components which is a collection of edu card components aka the lessons*/}
            <EduCard 
            lessonId={1}
            title={"Lesson 1"}
            subtitle={"What Is Money?"}
            paragraph={"In order to traverse the modern world we must understand what money Is. This lesson aims to provide you with a better understanding of money and how It works."}
            lessonTitle={"sub title about topic"}
            lessonText={"topic text conveying information in which should help educate the users on what money actually is and its history etc."}
            lessonPoints={["some topic point 1", "some topic point 2", "some topic point 3"]}
            imageUrl={"./Assets/Images/money.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            lessonId={2}
            title={"Lesson 2"}
            subtitle={"What can I do about debt?"}
            paragraph={"Sometimes life can throw a curveball your way and in order to be proactive and ready, It Is wise to know a few methods to get out of debt effectivly."}
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
            lessonId={3}
            title={"Lesson 3"}
            subtitle={"What is Inflation?"}
            comingSoon={true}
            imageUrl={"./Assets/Images/inflation.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            lessonId={4}
            title={"Lesson 4"}
            subtitle={"What is an ISA?"}
            comingSoon={true}
            imageUrl={"./Assets/Images/isa.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            lessonId={5}
            title={"Lesson 5"}
            subtitle={"What is the Stock Market?"}
            comingSoon={true}
            imageUrl={"./Assets/Images/stocks.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            lessonId={6}
            title={"Lesson 6"}
            subtitle={"What are Bonds?"}
            comingSoon={true}
            imageUrl={"./Assets/Images/bonds.png"}
            alt={"Graphical icon of x."}
            />
            <EduCard 
            lessonId={7}
            title={"Lesson 7"}
            subtitle={"What is Capitol Gains?"}
            comingSoon={true}
            imageUrl={"./Assets/Images/gains.png"}
            alt={"Graphical icon of x."}
            />

            
          </motion.div>
        </div>
    );
  }

}
export default educationPage;
