import React, {useState, useEffect} from 'react';

const url = 'https://ghibliapi.herokuapp.com/films';

const UseEffectFetchData = () => {
    const[users, setUsers] = useState([]);
    const getUsers = async() => {
        const response = await fetch (url);
        const users = await response.json();
        setUsers(users);
        console.log(users);
    }
    useEffect(()=>{
        getUsers();
    },[]);
    return(
    <>
        <ul className='grid-container'>
            {users.map((user)=>{
                const {id, title, original_title, image ,movie_banner, description, director, release_date, running_time} = user;
                return <li className='grid-item' key={id}>
                    <div className='li-div'>
                    <img className='banner' src={image} alt='banner for this movie'/>
                    <div>
                        <h2>
                            {title} <br/>
                            {original_title}
                        </h2>
                        <h3>Director: {director}</h3>
                        <h4>Release Year: {release_date}</h4>
                        <h4>Running Time: {running_time} mins</h4>
                        <p> <strong>Plot: </strong> {description}</p>
                        {/* <img src={movie_banner} alt='scene'/> */}
                    </div>

                    </div>
                </li>
            })}
        </ul>

    </>
    );
}

export default UseEffectFetchData;