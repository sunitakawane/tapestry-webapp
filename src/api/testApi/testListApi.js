import axios from "axios";
import url from "../../constants/url";
import labstate from "../../constants/labconfiguration"


export const testListApi = {
    testListAll,
    testListId
}

const token = labstate()['token']

function testListAll(filterOptions, labid) {
    if (filterOptions === null) {filterOptions = ''}
    return axios
        .get(url.BASE_API_URL + 'lab/' + labid + '/test/?' + filterOptions, {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })
        .then((response) => {
            return response
        });
}

function testListId(id,labid) {
    return axios
        .get(url.BASE_API_URL + 'lab/' + labid + '/test/' + id.toString() , {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })
        .then((response) => {
            return response
        });   
}