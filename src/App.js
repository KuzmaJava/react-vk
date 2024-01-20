import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyPosts from "./components/Profile/MyPosts";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import styles from "./components/Dialogs/Dialogs.module.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs />} />
                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                </div>
                {/*<ProfileInfo/>*/}
            </div>
        </BrowserRouter>
    );
}
export default App;
