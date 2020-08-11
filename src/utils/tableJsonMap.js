function tableJsonMap(jsoninput) {
    
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