import React from 'react';

const Person = (props) => {

    const {name,email,phone,picture,} = props.person;
    return (
        <div style = {{border: '3px solid black',padding: '10px',margin: '10px',display: 'flex',backgroundColor:'lightblue'}}>
            <div>
               <img src={picture.large} alt=""/>
            </div>
            <div style={{padding: '10px',margin: '10px'}}>
                <h1>{name.first + " " + name.last}</h1>
                <h2>{email}</h2>
                <h2>{phone}</h2>
                <button onClick={()=>{props.handleAddPersonButton(props.person)}}>Add This Person</button>
            </div>
            
        </div>
    );
};

export default Person;