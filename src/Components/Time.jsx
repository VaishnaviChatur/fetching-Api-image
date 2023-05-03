import React,{useState} from'react';
import './Time.css'

export default function Card() {

    const [user, setUser] = useState([])

    async function UserInfo() {
        try {

            const data = await fetch(' https://reqres.in/api/users/')
            const UpdatedData = await data.json();
            setUser(UpdatedData.data);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='outer'>
            <h1>click on Button to Show User details</h1>
            <button className='btn' onClick={UserInfo}>Get user</button>
            <div className='inner'>
            {user.map((item)=>(
                <div className='card' key={item.id}>
                <img className='img' src={item.avatar} /> 
                <p>id : {item.id}</p>
                <h3>first name : {item.first_name} </h3>
                <h3>last name : {item.last_name}</h3>
                <h4>email : {item.email}</h4>
            </div>
            ) )}  
        </div>
    </div>
    )
}
