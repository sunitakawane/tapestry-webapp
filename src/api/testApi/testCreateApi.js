import axios from "axios";
import url from "../../constants/url";
import labstate from "../../constants/labconfiguration"


export const testCreateApi = {
    testCreate
}

const token = labstate()['token'];

function testCreate(test, labid) {
    return axios
        .post(url.BASE_API_URL + 'lab/' + labid + '/test/', test, {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })
        .then((response) => {
            return response
        });
}