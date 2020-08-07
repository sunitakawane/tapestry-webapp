import axios from "axios";
import url from "../../constants/url";

export const testListApi = {
    testListAll,
    testListId
}

const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJ1c2VybmFtZSI6ImFkbWluQHRlc3QuY29tIiwiZXhwIjoxNTk2Nzk3NTIyLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwib3JpZ19pYXQiOjE1OTY3OTM5MjJ9.a1_OzGcgWGxp-Ekpa6IjL_wlIk9jI0qxkb1L_je9lVQ'

function testListAll(filterOptions) {
    if (filterOptions === null) {filterOptions = ''}
    return axios
        .get(url.BASE_API_URL + 'test/?' + filterOptions, {
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
        .get(url.BASE_API_URL + 'test/' + id.toString() , {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })
        .then((response) => {
            return response
        });   
}