import axios from 'axios';
const axiosins=axios.create({
    baseURL:"http://localhost:8000"
});
const UserApi={
    getAll :()=>{
        return axiosins.request({
            url:"/users",
            method:"GET"
        })
    },
    getSingle:(id)=>{
        return axiosins.request({
            url:`/users/${id}`,
            method:"GET"
        })
    },
    create:(user)=>{
        return axiosins.request({
            url:`/users`,
            method :"POST",
            data:user
        })
    },

    
    update:(user,id)=>{
        return axiosins.request({
            url:`users/${id}`,
            method:"PUT",
            data:user
        })
    },
    delete:(id)=>{
        return axiosins.request({
            url:`/users/${id}`,
            method:"DELETE"
        })
    }
};
export default UserApi

const axiosin=axios.create({
    baseURL:"http://localhost:8000"
})

const api={
    get:()=>{
        return axiosin.request({
            method:"GET"
        })
    },
    post:(data)=>{
        return axios.request({
            method:"POST",
            url:"/users",
            data:data
        })
    },
    updating:(data,id)=>{
        return axios.request({
            method:"Patch",
            url:`/user/${id}`,
            data:data
        })
    },
    dele:(id)=>{
        return axios.request({
            method:"DELETE",
            url:"/user/${id}",
            
        })
    }
}