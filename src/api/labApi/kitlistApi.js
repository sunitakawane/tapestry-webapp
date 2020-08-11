import axios from "axios";
import url from "../../constants/url";

export const kitListApi = {
    kitList
}

const token = 'Bearer '+ JSON.parse(localStorage.getItem("user"))['token'];

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