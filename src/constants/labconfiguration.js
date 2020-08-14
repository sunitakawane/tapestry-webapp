


const labstate = () =>{
    if(localStorage.getItem("user") !== null)
    {
        return {
            token:'Bearer '+JSON.parse(localStorage.getItem("user"))['token']
        }
    }
    else {
        return {
            token: ''
        }   
    }
}

export default labstate