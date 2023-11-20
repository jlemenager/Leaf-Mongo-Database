const { Schema } = require('mongoose')

const DigitalMarketingData = new Schema(
    {
        business : {type:String,required:true},
        business_name : {type:String,required:true},  
        average_target_age : {type:Number,required:true}, 
        percent_women : {type:Number,required:true}, 
        target_state : {type:String,required:true}, 
        website : {type:String,required:true},  
        h1_list : {type:Array,required:true}, 
        keyword_list : {type:Array,required:true}, 
        keyword_rating_list : {type:Array,required:true}, 
        backlink_list : {type:Array,required:true}, 
        keyword_difficulty_list : {type:Array,required:true}, 
        keyword_volume_list : {type:Array,required:true}
    }, 
    {timestamps:true}
)

module.exports = DigitalMarketingData