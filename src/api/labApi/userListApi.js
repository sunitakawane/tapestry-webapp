import axios from "axios";
import url from "../../constants/url";
import labstate from "../../constants/labconfiguration"

export const userListApi = {
    userListAll,
    userListId
}

const token = labstate()['token'];

async function userListAll(labid) {
    return await axios
        .get(url.BASE_API_URL + 'lab/' + labid + '/member/', {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })
        .then((response) => {
            return response
        });
}

async function userListId(id, labid) {
    return await axios
        .get(url.BASE_API_URL + 'lab/' + labid + '/member/' + id.toString(), {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })
        .then((response) => {
            return response
        });
}