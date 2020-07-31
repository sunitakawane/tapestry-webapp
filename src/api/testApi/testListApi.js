import axios from "axios";
import url from "../../constants/url";

export const testListApi = {
    testListAll,
    testListId
}

const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJ1c2VybmFtZSI6ImFkbWluQHRlc3QuY29tIiwiZXhwIjoxNTk2MTk0NTgyLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwib3JpZ19pYXQiOjE1OTYxOTA5ODJ9.HzOx_pxdpb0QTKSKitO6kcXdnaWcT19sQhUn-1Z-mQM'

function testListAll() {

    return axios
        .get(url.BASE_URL + 'test/',{
            headers:{
                'Authorization': token
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
                'Authorization': token
            }
        })
        .then((response) => {
            return response
        });   
}