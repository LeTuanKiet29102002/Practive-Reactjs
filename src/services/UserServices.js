import instance from "./CustomizeAxios";

const fetchAllUser = (page) => {
    return instance.get(`/api/users?page=${page}`)

}

const postCreateUser = (name, job)=>{
    return instance.post(`/api/users`,{name:name, job : job})
}

export { fetchAllUser ,postCreateUser };