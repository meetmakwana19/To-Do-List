import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// props are js objects which we are passing from are parent component to child component, eg : props.title
export default function Header(props) {
    // can also use the "title" directly instead of props
// export default function Header({title}) {
    return (
        // This is JSX(Javascript Syntax Extension -> HTML + JS, used to add dynamic JS in react components with HTML)
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    {/* <Link className="navbar-brand" to="#">{title}</Link> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        {/* Search bar will be visible if searchBar={true} in App.js and if it is {false} then it'll show "No Search Bar" */}
                        {props.searchBar? <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>: "No Search Bar"}
                    </div>
                </div>
            </nav>

        </div>
    )
}

// defaultProps are used when nothing is passed from the parent component for that attribute
Header.defaultProps = {
    title: "Your title here",
    searchBar: true
}

Header.prototypes = {
    // telling that the title is Link string 
    // it's good practise to aviod bugs and mistakes happends while initially passing Link integer in the title in App.js
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired //bool is boolean, isRequired means the programmer must use this component
}