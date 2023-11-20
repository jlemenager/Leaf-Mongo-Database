const db = require('../db')
const { Business,SpendingData } = require('../models')

const createSpendingData = async() => {
    const homeDepot = await Business.find({ name:'Home Depot' })
    const spendingData = [
        {
            business : homeDepot[0]._id,
            business_username : homeDepot[1]._id,  
            item : 'Ultra Hammer',
            items_sold : 140,
            cogs : 440,
            total_shipping_expense : 12,
            number_in_inventory : 400,
            cost_of_using_inventory : 400,
            cost_of_order_picking : 34,
            safety_stock : 40,
            marketing_cost : 1700,
            outstanding_payments_to_suppliers : 130,
            outstanding_payments_from_customers : 0,
            revenue : 1300,
            average_lead_time_in_days : 12,
            number_of_freight_bills : 120,
            number_of_error_free_freight_bills : 119,
            gross_profit_from_item : 800
        }
    ]
    await SpendingData.insertMany(spendingData)
    console.log('Added Spending Data')
}

const run = async() => {
    await createSpendingData()
    db.close()
}

run()