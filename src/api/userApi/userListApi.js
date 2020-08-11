import axios from "axios";
import url from "../../constants/url";

export const userListApi = {
    userListAll,
    userListId
}

const token = 'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']

async function userListAll() {
    return await axios
        .get(url.BASE_API_URL + 'user/', {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })
        .then((response) => {
            return response
        });
}

async function userListId(id) {
    return await axios
        .get(url.BASE_API_URL + 'user/?' + id.toString(), {
            headers:{
                'Authorization': token,
                Accept : 'application/vnd.api+json'
            }
        })
        .then((response) => {
            return response
        });
}