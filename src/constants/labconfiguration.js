


const labstate = () =>{
    if(localStorage.getItem("user") !== undefined)
    {
        console.log('Bearer '+JSON.parse(localStorage.getItem("user"))['token'])
        return {
            token:'Bearer '+JSON.parse(localStorage.getItem("user"))['token']
        }
    }
    else{
        console.log("hello")
    }
    // 
}

export default labstate