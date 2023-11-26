import instance from "./CustomizeAxios";

const fetchAllUser = (page)=>{
    return instance.get(`/api/users?page=${page}`)
       
    }

export {fetchAllUser};