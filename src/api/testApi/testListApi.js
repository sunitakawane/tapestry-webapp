import axios from "axios";
import url from "../../constants/url";

export const testListApi = {
    testListAll,
    testListId
}

const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJ1c2VybmFtZSI6ImFkbWluQHRlc3QuY29tIiwiZXhwIjoxNTk2Nzc1MjEwLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwib3JpZ19pYXQiOjE1OTY3NzE2MTB9.MHkr1ezc6s-Y9ifgdeyCJLwB8c_jmwEpVADj85gXPV8'

function testListAll(filterOptions) {
    if (filterOptions === null) {filterOptions = ''}
    return axios
        .get(url.BASE_URL + 'test/?' + filterOptions, {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })
        .then((response) => {
            return response
        });
}

function testListId(id) {
    return axios
        .get(url.BASE_URL + 'test/' + id.toString() , {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })
        .then((response) => {
            return response
        });   
}