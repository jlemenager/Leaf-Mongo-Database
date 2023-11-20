const db = require('../db')
const { Business,GHGAssessmentData } = require('../models')

const createGHGAssessmentData = async() => {
    const homeDepot = await Business.find({ name:'Home Depot' })
    const ghgAssessmentData = [
        {
            business : homeDepot[0]._id,
            business_username : homeDepot[1]._id,  
            electricity_from_locations : 120,
            electricity_from_factories : 420,
            average_employee_commute_in_miles : 13,
            employee_count : 400,
            average_business_trip_commute_in_miles : 14,
            total_business_trips : 24,
            total_shipments : 100,
            average_shipment_vehicle_type : 'dry van freight truck',
            total_miles_shipped : 2000,
            total_water_consumption_in_gallons : 130,
            pounds_of_plastic_used : 150,
            pounds_of_cardboard_used : 92,
            pounds_of_wood_used : 320,
            pounds_of_paper_used : 44,
            pounds_of_metal_used : 450,
            pounds_of_styrofoam_used : 42,
            pounds_of_tetrapaks_used : 32,
            pounds_of_glass_used : 52,
            pounds_of_aluminumfoil_used : 72,
            pounds_of_petplastic_used : 132,
            pounds_of_hdpeplastic_used : 442,
            pounds_of_ldpeplastic_used : 52,
            pounds_of_palmoil_used : 2,
            pounds_of_soybeans_used : 0,
            pounds_of_beef_used : 0,
            pounds_of_rubber_used : 53,
            pounds_of_cocoa_used : 0,
            other_material_waste_in_pounds : 202,
            other_food_waste_in_pounds : 0
        }
    ]
    await GHGAssessmentData.insertMany(ghgAssessmentData)
    console.log('Added Digital Marketing Data')
}

const run = async() => {
    await createGHGAssessmentData()
    db.close()
}

run()