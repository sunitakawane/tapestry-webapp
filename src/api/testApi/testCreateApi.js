import axios from "axios";
import url from "../../constants/url";

export const testCreateApi = {
    testCreate
}

const token = 'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']

function testCreate(test) {
    return axios
        .post(url.BASE_API_URL + 'test/', test, {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })
        .then((response) => {
            return response
        });
}