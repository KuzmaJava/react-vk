import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyPosts from "./components/Profile/MyPosts";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import styles from "./components/Dialogs/Dialogs.module.css";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Dialogs/>
            </div>
            {/*<Profile/>*/}
        </div>
    );
}
export default App;
