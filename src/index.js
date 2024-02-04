import './index.css';
import state, {addPost, subscribe, updateNewPostText} from './redux/state'
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}


rerenderEntireTree(state);

subscribe(rerenderEntireTree);
