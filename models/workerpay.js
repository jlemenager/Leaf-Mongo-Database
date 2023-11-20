const { Schema } = require('mongoose')

const WorkerPayData = new Schema(
    {
        business: {type:String, required:true},
        business_name: {type:String, required:true},
        average_factory_worker_salary_in_thousands_of_dollars: {type:Number,required:false},
        average_local_worker_salary_in_thousands_of_dollars: {type:Number,required:false},
        average_management_salary_in_thousands_of_dollars: {type:Number,required:false}
    },
    {timestamps:true}
)

module.exports = WorkerPayData
