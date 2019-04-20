import React from 'react';

import './TodaysTasks.css';

const TodaysTasks = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-4" style={{marginBottom:"2rem"}}>
                <div className="TaskBox">
                    <p>Something To Do</p>
                </div>
            </div>
            <div className="col-md-4" style={{marginBottom:"2rem"}}>
                <div className="TaskBox">
                    <p>Something Else To Do</p>
                </div>
            </div>
        </div>
    </div>
);

export default TodaysTasks;