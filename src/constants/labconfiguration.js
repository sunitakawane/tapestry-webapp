


const labstate = () =>{
    if(localStorage.getItem("user") !== undefined)
    {
        console.log(JSON.parse(localStorage.getItem("user"))['user']['first_name'] + ''+ JSON.parse(localStorage.getItem("user"))['user']['last_name'])
        return {
            token:'Bearer '+JSON.parse(localStorage.getItem("user"))['token']
        }
    }
    else{        
        return {
        token : ''
        }
    }
    // 
}

export default labstate