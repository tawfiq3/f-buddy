import React, { useEffect, useState } from 'react';
import User from '../Home/randomUserData.json'
import Person from '../Person/Person';


const Home = () => {

    const [user, setUser] = useState([]);
    const [personAdded, setPersonAdded] = useState([])

    useEffect(()=>{
        setUser(User)
    },[])

    const handleAddPersonButton = (person) =>{
        const newPerson = [...personAdded,person]
        setPersonAdded(newPerson)
    }

    return (
        <div style={{display: 'flex'}} >
           <div style={{width: '70%'}}>
            {
                user.map(userDetails => <Person person={userDetails} handleAddPersonButton={handleAddPersonButton} ></Person>)
            }
           </div>
           <div style = {{justifyContent: 'center'}}>
                 <h3>Person Added: {personAdded.length}</h3>
           </div>
        </div>
    );
};

export default Home;