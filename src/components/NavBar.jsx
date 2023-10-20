import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark ">
                    <div className="container-fluid ">
                        <Link className="navbar-brand text-light" to="/">NewsBuddy</Link>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link active text-light" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/about">About Us</Link></li>
                                <li className="nav-item"><Link className="nav-link active text-light" aria-current="page" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link active text-light" aria-current="page" to="/general">General</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link active text-light" aria-current="page" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/technology">Technology</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav></div>
        )
    }
}

export default NavBar