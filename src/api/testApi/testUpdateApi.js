import axios from "axios";
import url from "../../constants/url";
import labstate from "../../constants/labconfiguration"

export const testUpdateApi = {
    testUpdate,
    testPUpdate
}

const token = labstate()['token'];

function testUpdate(test) {
    return axios
        .put(url.BASE_API_URL + 'test/' + test.id.toString() , test, {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })
        .then((response) => {
            return response
        });
}

function testPUpdate(testId, keyId, value) {
    return axios
        .patch(url.BASE_API_URL + 'test/' + testId.toString() , keyId, value, {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })
        .then((response) => {
            return response
        });
}