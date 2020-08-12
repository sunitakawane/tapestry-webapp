import axios from "axios";
import url from "../../constants/url";
import labstate from "../../constants/labconfiguration"


// export const testdataApi = {
//     machine,
//     kit,
//     userlist
// }

const token = labstate['token']

export function testdata(param) {
    return axios.get(url["BASE_API_URL"]+param+'/',{
        headers:{
            'Authorization':'Bearer '+ token
        }
        }).then(res => {
            return res.data.results
        }).catch(err=>{
            console.log(err)
        }
        )
    
    // const kit =  axios.get(url["BASE_API_URL"]+'test-kit/',{
    //     headers:{
    //         'Authorization':'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']
    //     }
    //     }).then(res => {
    //         return res.data.results     
    //     }).catch(err=>{
    //         console.log(err)
    //     }
    //     )
    // const user =  axios.get(url["BASE_API_URL"]+'user/',{
    //     headers:{
    //         'Authorization':'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']
    //     }
    //     }).then(res => {
    //         return res.data.results     
    //     }).catch(err=>{
    //         console.log(err)
    //     }
    //     )

    // return {machine,kit,user}
}

// function kit() {
//     return axios.get(url["BASE_API_URL"]+'test-kit/',{
//         headers:{
//             'Authorization':'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']
//         }
//         }).then(res => {
//             return res.data.results     
//         }).catch(err=>{
//             console.log(err)
//         }
//         )
// }

// function userlist(){
//     axios.get(url["BASE_API_URL"]+'user/',{
//         headers:{
//             'Authorization':'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']
//         }
//         }).then(res => {
//             return res.data.results     
//         }).catch(err=>{
//             console.log(err)
//         }
//         )
//     }
