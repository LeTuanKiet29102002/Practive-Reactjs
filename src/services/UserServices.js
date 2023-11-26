import instance from "./CustomizeAxios";

const fetchAllUser = ()=>{
    return instance.get('/api/users?page=1')
       
    }

export {fetchAllUser};