const { Schema } = require('mongoose')

const GHGAssessmentData = new Schema(
    {
        business : {type:String, required:true},
        business_name : {type:String,required:true}, 
        data_title : {type:String,required:true},
        electricity_from_locations : {type:Number,required:true},
        electricity_from_factories : {type:Number,required:true},
        average_employee_commute_in_miles : {type:Number,required:true},
        employee_count : {type:Number,required:true},
        average_business_trip_commute_in_miles : {type:Number,required:true},
        total_business_trips : {type:Number,required:true},
        total_shipments : {type:Number,required:true},
        average_shipment_vehicle_type : {type:String,required:true},
        total_miles_shipped : {type:Number,required:true},
        total_water_consumption_in_gallons : {type:Number,required:true},
        pounds_of_plastic_used : {type:Number,required:true},
        pounds_of_cardboard_used : {type:Number,required:true},
        pounds_of_wood_used : {type:Number,required:true},
        pounds_of_paper_used : {type:Number,required:true},
        pounds_of_metal_used : {type:Number,required:true},
        pounds_of_styrofoam_used : {type:Number,required:true},
        pounds_of_tetrapaks_used : {type:Number,required:true},
        pounds_of_glass_used : {type:Number,required:true},
        pounds_of_aluminumfoil_used : {type:Number,required:true},
        pounds_of_petplastic_used : {type:Number,required:true},
        pounds_of_hdpeplastic_used : {type:Number,required:true},
        pounds_of_ldpeplastic_used : {type:Number,required:true},
        pounds_of_palmoil_used : {type:Number,required:true},
        pounds_of_soybeans_used : {type:Number,required:true},
        pounds_of_beef_used : {type:Number,required:true},
        pounds_of_rubber_used : {type:Number,required:true},
        pounds_of_cocoa_used : {type:Number,required:true},
        other_material_waste_in_pounds : {type:Number,required:true}, 
        other_food_waste_in_pounds : {type:Number,required:true}
    },
    {timestamps:true}
)

module.exports = GHGAssessmentData