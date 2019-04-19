import React from 'react';

import './NewTask.css';

const NewTask = () => (
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
);

export default NewTask;