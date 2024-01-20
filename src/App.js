import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs state={props.appState.messagesPage} messages={props.appState.messagesPage.messages}/>}/>
                        <Route path='/profile' element={<Profile state={props.appState.profilePage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
