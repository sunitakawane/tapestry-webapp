import {userListApi} from '../api/userApi/userListApi'

async function tableJsonMap(jsoninput) {

    //let jsonoutput = []
    async function jsonMap(jsoninput) {
        let jsonreturn = []
        let res = {}
        let userinfo = {}
        let name = ''
        let jsontemp = {}
        if(jsoninput === undefined){
            jsoninput = []
        }
        await jsoninput.map(async (test) => {
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
            console.log(jsontemp)
            return jsonreturn.push(jsontemp)
        })
        return jsonreturn        
    }

    var jsonoutput = await jsonMap(jsoninput)
    console.log(jsonoutput)
    return jsonoutput    
}

export default tableJsonMap