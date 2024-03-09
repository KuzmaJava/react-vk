import axios from "axios";
import {follow, unfollow} from "../redux/users-reducer";

const BASE_PATH = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b5a9ad76-ac08-4adf-bdc7-a48fbd7f43e7"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    // followUser(user) {
    //     debugger
    //     return instance.post(`follow/${user.id}`)
    //         .then(response => {
    //             if (response.data.resultCode === 0) {
    //                 follow(user.id);
    //             }
    //         })
    // },
    //
    // unfollowUser(user) {
    //     return instance.delete(`follow/${user.id}`)
    //         .then(response => {
    //             if (response.data.resultCode === 0) {
    //                 unfollow(user.id);
    //             }
    //         })
    // }
}

