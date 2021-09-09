import React from "react";
import { NavbarMenu } from "./NavbarMenu"
import"./Navbar.css"

class Navbar extends React.Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Stock Mocket
                </h1>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavbarMenu.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.class_Name} href ={item.url}>
                                {item.label}
                                </a>
                            
                            </li>     
                        )
                    })}
                </ul>
            </nav>
            )
    }
}

export default Navbar;