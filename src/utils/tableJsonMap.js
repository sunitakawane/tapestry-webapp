async function tableJsonMap(jsoninput, userslist) {

    async function getName(id,list) {
        if(list !== undefined && list !== [])
        {
            let userin = list.find(o => o.id === id);
            console.log(userin)
            return userin.attributes.firstName + ' ' + userin.attributes.lastName
        }
    }

    async function jsonMap(jsoninput) {
        let jsonreturn = []
        let name = ''
        let jsontemp = {}
        if(jsoninput === undefined){
            jsoninput = []
        }
        await Promise.all(jsoninput.map(async (test) => {
            name = await getName(test.relationships.assignedTo.data.id, userslist)
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