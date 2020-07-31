import axios from "axios";
import url from "../../constants/url";

export const testUpdateApi = {
    testUpdate,
    testPUpdate
}

const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJ1c2VybmFtZSI6ImFkbWluQHRlc3QuY29tIiwiZXhwIjoxNTk2MTg5MDQ1LCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwib3JpZ19pYXQiOjE1OTYxODU0NDV9.bJmQNDLTHxwacrK4ySfquVpVlsL8rI7rcWMDQl4vsog'

function testUpdate(test) {
    return axios
        .put(url.BASE_URL + 'test/' + test.id.toString() , test, {
            headers:{
                'Authorization': token
            }
        })
        .then((response) => {
            return response
        });
}

function testPUpdate(testId, keyId, value) {
    return axios
        .patch(url.BASE_URL + 'test/' + testId.toString() , keyId, value, {
            headers:{
                'Authorization': token
            }
        })
        .then((response) => {
            return response
        });
}