import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <p>Welcome to home page!</p>

            <p>Navigate to :</p>

            <Link to={"/about"}>1. About</Link><br />
            <Link to={"/head_tail"}>2. Head and Tail</Link>







        </div>
    )
}

export default Home