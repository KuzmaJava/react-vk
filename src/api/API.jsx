import axios from "axios";

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

    followUser(user) {
        return instance.post(`follow/${user.id}`)
    },

    unfollowUser(user) {
        return instance.delete(`follow/${user.id}`)
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },


}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

