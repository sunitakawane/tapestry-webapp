import axios from "axios";
import url from "../../constants/url";
import labstate from "../../constants/labconfiguration"

export const machineListApi = {
    machineList
}

const token = labstate['token']

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