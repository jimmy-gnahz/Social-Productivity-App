import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
      <div>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/New Task">Add New Task</NavLink>
          <NavLink to="/Todays Task">Today's Tasks</NavLink>
      </div>  
    );
};

export default Navigation;