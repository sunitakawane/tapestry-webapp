import {userListApi} from '../api/userApi/userListApi'

function tableJsonMap(jsoninput) {

    /*let userlist = {}
    var userid = ''
    if(jsoninput) {
        jsoninput.map((test) => {
            userid = test.relationships.assignedTo.data.id
            userlist[[userid]] = userid      
            return null
        })
    }
    console.log(userlist)
    Object.keys(userlist).forEach(function(key) {
        userListApi.userListId(key)
            .then((response) => {
                console.log('User api successful')
                //userlist[id] = response.data.data.attributes.firstName + ' ' + response.data.data.attributes.lastName  
                //console.log(key)
                //console.log(userlist[key])
                var userinfo = response.data.data
                console.log(userinfo)
                userlist[[key]] = userinfo[0].attributes.firstName + ' ' + userinfo[0].attributes.lastName
                console.log(userlist)
            })
            .catch((error) => {
                console.log('Api call error' + error.toString())
                userlist[[key]] = key
            })        
    });*/

    /*async function username(id) {
        var userinfo = {}
        var res = await userListApi.userListId(id)
        userinfo = res.data.data
        console.log(userinfo)
        return userinfo[0].attributes.firstName
    }*/

    
    let jsontemp = []
    let jsonoutput = []
    
    if(jsoninput) {
        jsoninput.map((test) => {
                jsontemp = {
                'id': test.id, 
                'samples': test.attributes.nsamples, 
                'assignedTo': test.relationships.assignedTo.data.id, //Will need to setup api call for obtaining name 
                'prevalence': test.attributes.prevalence,
                'status': test.relationships.status.data.id, 
                'file': test.attributes.poolingschemeFilename, 
                'npositive': test.attributes.npositive, 
                'ninconclusive': test.attributes.ninconclusive}
                return jsonoutput.push(jsontemp)
            })
    }
    return jsonoutput
}

export default tableJsonMap