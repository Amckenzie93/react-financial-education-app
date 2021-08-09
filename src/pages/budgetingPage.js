import Banner from "../Components/Banner";
import React from "react";
import Transitions from "../utility/transitions"
import UserDetail from '../Components/UserDetail'
import { motion } from "framer-motion";

class budgetingPage extends React.Component {
  state = {};

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    let transition = Transitions.getInstance();

    return (
      <React.Fragment>
        <div className="text-black min-height-100vh">
          <div className="padding-verticle-84px">
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={transition.getTransition()}
              transition={{ duration: 0.62 }}
            >
              {/* render Banner component with content passed in as props */}
              <Banner
                title={"Your Dashboard"}
                paragraph={
                  "Please use the dashboard offered to enter your financial information so that you can tweak it and adjust so that you can see a rough estimation of the impact it has had over 50 years."
                }
                image={"./Assets/Images/me.svg"}
                dataNotice={true}
              />
            </motion.div>
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={transition.getTransition()}
              transition={{ duration: 0.9 }}
              className="px-4"
            >
              {/* render UserDetails component */}
              <UserDetail />
            </motion.div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default budgetingPage;