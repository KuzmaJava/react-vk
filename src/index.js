import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import post from "./components/Profile/MyPosts/Post/Post";

let posts = [
    {id: 1, message: 'I am going to the sea', likesCount: "2"},
    {id: 2, message: 'I\'ve bought the car', likesCount: "5"},
    {id: 3, message: 'That\'s my first post', likesCount: "3"},
]

let dialogsData = [
    {id: 1, name: 'Jackson'},
    {id: 2, name: 'Maria'},
    {id: 3, name: 'Robert'}
]

let messages = [
    {id: 1, message: 'Hey brother'},
    {id: 2, message: 'How are you do in man'},
    {id: 3, message: 'See yo'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messages={messages}/>
  </React.StrictMode>
);

