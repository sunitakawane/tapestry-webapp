import axios from "axios";
import url from "../../constants/url";
import labstate from "../../constants/labconfiguration"

export const kitListApi = {
    kitList
}

const token = labstate()['token'];

function kitList() {
    return axios
        .get(url.BASE_API_URL + 'test-kit/', {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })   
        .then((response) => {
            return response
        })
}