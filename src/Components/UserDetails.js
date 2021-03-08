import React from 'react';
import UserDetail from './UserDetail.js'

// localStorage.setItem("Name", "Adam");
// const name = localStorage.getItem("Name");


class UserDetails extends React.Component {

    state = {}

    render() {
        return (
            <UserDetail />
        );
    }
}

export default UserDetails;