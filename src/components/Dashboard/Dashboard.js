import React from 'react';
import {Link} from "react-router-dom";

import './Dashboard.css';

const Dashboard = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-6" style={{marginBottom:"2rem"}}>
                <div className="TaskBox">
                    <p>These are today's tasks</p>
                    <button className="active-recipe__button">
                    <Link to="/TodaysTasks">View More</Link>
                    </button>
                </div>
            </div>
            <div className="col-md-6" style={{marginBottom:"2rem"}}>
                <div className="TaskBox">
                    <p>This is your friend's progress today</p>
                    <button className="active-recipe__button">
                    <Link to="/FriendsPage">View More</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Dashboard;