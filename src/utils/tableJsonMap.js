import {userListApi} from '../api/labApi/userListApi'

async function tableJsonMap(jsoninput) {

    async function jsonMap(jsoninput) {
        let jsonreturn = []
        let res = {}
        let userinfo = {}
        let name = ''
        let jsontemp = {}
        if(jsoninput === undefined){
            jsoninput = []
        }
        await Promise.all(jsoninput.map(async (test) => {
            res = await userListApi.userListId(test.relationships.assignedTo.data.id)
            userinfo = res.data.data
            name = userinfo[0].attributes.firstName + ' ' + userinfo[0].attributes.lastName
            jsontemp = {
                'id': test.id, 
                'samples': test.attributes.nsamples, 
                'assignedTo': name, 
                'prevalence': test.attributes.prevalence,
                'status': test.relationships.status.data.id, 
                'file': test.attributes.poolingschemeFilename, 
                'npositive': test.attributes.npositive, 
                'ninconclusive': test.attributes.ninconclusive}
            return jsonreturn.push(jsontemp)
        }))
        return jsonreturn
    }

    var jsonoutput = await jsonMap(jsoninput)
    return jsonoutput    
}

export default tableJsonMap