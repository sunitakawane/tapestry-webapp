import axios from "axios";
import url from "../../constants/url";

export const machineListApi = {
    machineList
}

const token = 'Bearer '+ JSON.parse(localStorage.getItem("user"))['token'];

function machineList() {
    return axios
        .get(url.BASE_API_URL + 'machine-type/', {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })   
        .then((response) => {
            return response
        })
}