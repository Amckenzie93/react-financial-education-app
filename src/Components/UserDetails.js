import React from 'react';
import Transitions from "../utility/transitions"
import UserDetail from './UserDetail.js'
import { motion } from "framer-motion";

// localStorage.setItem("Name", "Adam");
// const name = localStorage.getItem("Name");



class UserDetails extends React.Component {

    state = {}

    render() {
        let transition = Transitions.getInstance();
        return (
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={transition.getTransition()}
            transition={{ duration: 0.9 }}
          >
            <UserDetail />
          </motion.div>
        );
    }
}

export default UserDetails;