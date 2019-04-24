import React, { Component } from 'react';

import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';

import './NewTask.css';

class NewTask extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };
    
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        let backdrop;
    
        if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />
        }

        return (
    <div className="App">
    <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
    <SideDrawer show={this.state.sideDrawerOpen} />
    {backdrop}
    <main style={{marginTop: '64px'}}>  
    <form style={{ marginBottom:"2rem"}}>
        <label>Task Name: </label> 
        <input className="form__input" type = "text" name="taskName" />
        <br></br>
        <label>Start Date: </label>
        <input className="form__input" type = "date" name="taskStartDate"/>
        <br></br>
        <label>Frequency: </label>
        <select name="cars" >
            <option value="volvo">One Time Only</option>
            <option value="saab">Daily</option>
            <option value="fiat">Weekly</option>
            <option value="audi">Monthly</option>
        </select>
        <br></br>
        <label>Task Description: </label>
        <br></br>
        <textarea rows="5" cols="80"></textarea>
        <br></br>
        <button className="form__button">Submit</button>
    </form>
    </main>
        
    </div>
        );
    }
}

export default NewTask;