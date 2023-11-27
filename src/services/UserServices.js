import instance from "./CustomizeAxios";

const fetchAllUser = (page) => {
    return instance.get(`/api/users?page=${page}`)

}

const postCreateUser = (name, job)=>{
    return instance.post(`/api/users`,{name:name, job : job})
}
const putUpdateUser = (name, job )=>{
    return instance.put(`/api/users/2`,{name,job})
    
}
const deleteUser = (id)=>{
    return instance.delete(`/api/users/${id}`)
}

export { fetchAllUser ,postCreateUser, putUpdateUser, deleteUser };