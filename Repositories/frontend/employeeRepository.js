var employeeModel = require('../../models/employeeModel')

/* Get the all records */
exports.get = async()=>{
    let result = {}
    await employeeModel.find((err,docs)=>{})
    .then((resolve,reject)=>{
        result.status = 200
        result.data = resolve
        result.msg = 'Successfully fetched!'
    })
    .catch(error => { 
        console.log('caught', error.message);
        result.status = 201
        result.data = null
        result.msg = error.message
    })
    return result
}

/* Create new record */
exports.createNew = async(input)=>{
    let result = {}
    let data = input.data
    await employeeModel.create(data)
    .then((resolve,reject)=>{
        result.status = 200
        result.data = resolve
        result.msg = 'Successfully Created!'
    })
    .catch(error => { 
        console.log('caught', error.message);
        result.status = 201
        result.data = null
        result.msg = error.message
    }) 
    return result
}

/* fetch the record  by id */
exports.getById = async(id)=>{
    let result = {}
    
    await employeeModel.findById(id,(err,doc)=>{})
    .then((resolve,reject)=>{
        result.status = 200
        result.data = resolve
        result.msg = 'Successfully fetched!'
    })
    .catch(error => { 
        console.log('caught', error.message);
        result.status = 201
        result.data = null
        result.msg = error.message
    })
    return result
}

/* Update the record */
exports.update = async(input)=>{
    let result = {}
    
    let update = input.update
    let query = input.query
    await employeeModel.findOneAndUpdate(query,update, {upsert:true},(err,doc)=>{})
    .then((resolve,reject)=>{
        result.status = 200
        result.data = resolve
        result.msg = 'Successfully updated!'
    })
    .catch(error => { 
        console.log('caught', error.message);
        result.status = 201
        result.data = null
        result.msg = error.message
    })
    return result
}

/* Delete the record */
exports.destroy = async(id)=>{
    let result = {}
    
    await employeeModel.findByIdAndRemove(id,(errors,result)=>{})
    .then((resolve,reject)=>{
        result.status = 200
        result.data = resolve
        result.msg = 'Successfully deleted!'
    })
    .catch(error=>{
        result = {
            status: 201,
            data: null,
            messages : error.message,
        }
    })
    return result
}