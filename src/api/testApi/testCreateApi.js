import axios from "axios";
import url from "../../constants/url";

export const testCreateApi = {
    testCreate
}

const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJ1c2VybmFtZSI6ImFkbWluQHRlc3QuY29tIiwiZXhwIjoxNTk2MTg5MDQ1LCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwib3JpZ19pYXQiOjE1OTYxODU0NDV9.bJmQNDLTHxwacrK4ySfquVpVlsL8rI7rcWMDQl4vsog'

function testCreate(test) {
    return axios
        .post(url.BASE_URL + 'test/', test, {
            headers:{
                'Authorization': token
            }
        })
        .then((response) => {
            return response
        });
}