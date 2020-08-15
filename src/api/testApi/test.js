import axios from 'axios';
import url from "../../constants/url";


export default async function test(param){
    const response = await axios.get(url["BASE_API_URL"]+param+'/',{
    headers:{
        'Authorization':'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']
    }
    })
    console.log(response.data.results)
    return response.data.results

}
