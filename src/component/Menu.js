import React from 'react'
import {NavLink} from 'react-router-dom';

function Menu() {
  return (
        <>
            <nav className="nav navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to={'/'} className="navbard-brand nav-link">Crud Application </NavLink>
                <button className="navbar-toggler"  data-bs-togle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id='navmenu'>
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink to={'/home'} className="nav-link">Home</NavLink></li>
                        <li className="nav-item"><NavLink to={'/Create'} className="nav-link">Create</NavLink></li>
                    </ul>
                </div>
            </nav>
  
        </>
    )
}

export default Menu


