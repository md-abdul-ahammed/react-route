import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetails = () => {
    const { friendId } = useParams()
    const [friend, setFriend] = useState({})
    const history = useHistory()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    const handleToSeeAllFriends = () => {
        history.push('/friends')
    }
    return (
        <div>
            <h1>I am {friend.name} & my Id: {friendId}</h1>
            <h2>My phone no : {friend.phone} </h2>
            <h2>My email is : {friend.email} </h2>
            <h2>My company is : {friend.company?.name} </h2>
            <button onClick={handleToSeeAllFriends}>See All Friends</button>
        </div>
    );
};

export default FriendDetails;