import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={styles.nav}>
        <div>
            <NavLink to="/profile" className={(navData) => (navData.isActive ? styles.active : styles.item)}>
                <div>Profile</div>
            </NavLink>
        </div>
        <div>
            <NavLink to="/dialogs" className={(navData) => (navData.isActive ? styles.active : styles.item)}>
                <div>Messages</div>
            </NavLink>
        </div>

        <div className={styles.item}>
            <a>News</a>
        </div>
        <div className={styles.item}>
            <a>Music</a>
        </div>
        <div className={styles.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;