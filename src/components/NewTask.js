import React from 'react';

const NewTask = () => {
    return (
        <form style={{ marginBottom:"2rem"}}>
        <input className="form__input" type = "text" name="recipeName"/>
        <button className="form__button">Search</button>
        </form>
    );
};

export default NewTask;