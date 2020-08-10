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

    async function jsonMap(jsoninput) {
        let jsonreturn = []
        let res = {}
        let userinfo = {}
        let name = ''
        if(jsoninput) {
            jsoninput.map((test) => {
                res = await userListApi.userListId(test.relationships.assignedTo.data.id)
                userinfo = res.data.data
                name = userinfo[0].attributes.firstName
                jsontemp = {
                    'id': test.id, 
                    'samples': test.attributes.nsamples, 
                    'assignedTo': name, //Will need to setup api call for obtaining name 
                    'prevalence': test.attributes.prevalence,
                    'status': test.relationships.status.data.id, 
                    'file': test.attributes.poolingschemeFilename, 
                    'npositive': test.attributes.npositive, 
                    'ninconclusive': test.attributes.ninconclusive}
                return jsonreturn.push(jsontemp)
            })
        }
        return jsonreturn
    }

    // Take in the json stored in redux store and modify it into a simple json as used so far.
    let jsonoutput = []
    jsonMap(jsoninput)
        .then((response) => {
            jsonoutput = response
        })
        .catch((error) => {
            console.log('Error in parsing' + error.toString())
        })
    //let jsontemp = []
    //let name = ''
    /*if(jsoninput) {
        jsoninput.map((test) => {
            return username(test.relationships.assignedTo.data.id).then((response) => {
                name = response
                jsontemp = {
                'id': test.id, 
                'samples': test.attributes.nsamples, 
                'assignedTo': name, //Will need to setup api call for obtaining name 
                'prevalence': test.attributes.prevalence,
                'status': test.relationships.status.data.id, 
                'file': test.attributes.poolingschemeFilename, 
                'npositive': test.attributes.npositive, 
                'ninconclusive': test.attributes.ninconclusive}
                return jsonoutput.push(jsontemp)
            })
        })
    }*/
    
}

export default tableJsonMap