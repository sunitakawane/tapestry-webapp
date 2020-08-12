import url from './url'

const labstate = () =>{
    if(localStorage.getItem("user") !== undefined)
    {
        return {'token':JSON.parse(localStorage.getItem("user"))['token']}
    }
    // 
}

export default labstate