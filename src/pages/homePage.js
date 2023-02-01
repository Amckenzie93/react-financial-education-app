import Column from '../Components/Column'
import Heros from "../Components/Heros";
import React from "react";
import Transitions from "../utility/transitions"
import { motion } from "framer-motion";

class HomePage extends React.Component {
    state = {};

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        let transition = Transitions.getInstance();
        window.history.scrollRestoration = "manual";
        return (
            <div>
                <motion.div
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={transition.getTransition()}
                    transition={{ duration: 0.62 }}
                >
                    {/*Render hero component*/}
                    <Heros />
                </motion.div>
                <motion.div
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={transition.getTransition()}
                    transition={{ duration: 0.8 }}
                >
                    <div className="pt-1">
                        <div className="container py-1 px-4 mt-5">
                            <div className="row text-center">
                                {/*Render a column component with the props being passed in from the parent*/}
                                <Column
                                    title={"Education"}
                                    transitionTime={1}
                                    image={"./Assets/Images/book.svg"}
                                    paragraph={
                                        "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit."
                                    }
                                    linkUrl={"/education"}
                                    linkText={"View details"}
                                />
                                {/*Render a column component with the props being passed in from the parent*/}
                                <Column
                                    title={"Budgeting"}
                                    transitionTime={1.175}
                                    image={"./Assets/Images/growthSvg.svg"}
                                    paragraph={
                                        "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit."
                                    }
                                    linkUrl={"/budgeting"}
                                    linkText={"View details"}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }
}
export default HomePage;