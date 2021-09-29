import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Friend = (props) => {
    const { id, name, email, address, phone, website } = props.friend;
    const history = useHistory();
    const friendStyle = {
        border: '2px solid goldenrod',
        padding: '5px',
        borderRadius: "10px"
    }
    const handleToSeeDetails = () => {
        history.push(`/friend/${id}`)
    }
    return (
        <div style={friendStyle}>
            <h1>I am {name}</h1>
            <p>My email is {email}</p>
            <p>My Address is {address.city}</p>
            <p>My Phone is {phone}</p>
            <p>My Website is {website}</p>
            <Link to={`/friend/${id}`} >Visit more</Link>
            <br />
            <button onClick={handleToSeeDetails}>Visit for details</button>
        </div >
    );
};

export default Friend;