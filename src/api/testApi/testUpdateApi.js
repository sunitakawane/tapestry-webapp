import axios from "axios";
import url from "../../constants/url";

export const testUpdateApi = {
    testUpdate,
    testPUpdate
}

const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJ1c2VybmFtZSI6ImFkbWluQHRlc3QuY29tIiwiZXhwIjoxNTk2MjA0NjUzLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwib3JpZ19pYXQiOjE1OTYyMDEwNTN9.QnPK1B7eVYBW-XX3HkkK7SVd4P-ccC53s-zvdjPwiJw'

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