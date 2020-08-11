import axios from "axios";
import url from "../../constants/url";

export const testListApi = {
    testListAll,
    testListId
}

const token = 'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']

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