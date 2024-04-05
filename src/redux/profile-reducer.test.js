import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'I am going to the ocean', likesCount: 5},
        {id: 2, message: 'I\'ve bought the car', likesCount: 3},
        {id: 3, message: 'That\'s my first post', likesCount: 2},
    ]
};

it('new post message should be correct' , () => {
    let action = addPostActionCreator("Jackson test");

    let newState = profileReducer(state, action);
    expect(newState.posts[3].message).toBe("Jackson test");
})

it('length of posts should be 4' , () => {
    let action = addPostActionCreator("Jackson test");

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
})

it('after removing a post length of messages should be decremented' , () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
})

it('after removing a post with incorrect postId length of messages should not be decremented' , () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
})