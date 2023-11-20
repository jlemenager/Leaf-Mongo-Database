const { Schema } = require('mongoose')

const SpendingData = new Schema(
    {
        business : {type:String,required:true},
        business_name : {type:String,required:true}, 
        item : {type:String,required:true},
        items_sold : {type:Number,required:true},
        cogs : {type:Number,required:true}, 
        total_shipping_expense : {type:Number,required:true},
        number_in_inventory : {type:Number,required:true},
        cost_of_using_inventory : {type:Number,required:true},
        cost_of_order_picking : {type:Number,required:true}, 
        safety_stock : {type:Number,required:true}, 
        marketing_cost : {type:Number,required:true},
        outstanding_payments_to_suppliers : {type:Number,required:true},
        outstanding_payments_from_customers : {type:Number,required:true},
        revenue : {type:Number,required:true},
        average_lead_time_in_days : {type:Number,required:true},
        number_of_freight_bills : {type:Number,required:true},
        number_of_error_free_freight_bills : {type:Number,required:true},
        gross_profit_from_item : {type:Number,required:true}
    },
    {timestamps:true}
)

module.exports = SpendingData