const db = require('../db')
const { Business,DigitalMarketingData } = require('../models')

const createDigitalMarketingData = async() => {
    const homeDepot = await Business.find({ name:'Home Depot' })
    const digitalMarketingData = [
        {
            business : homeDepot[0]._id,
            business_username : homeDepot[1]._id,  
            average_target_age : 45, 
            percent_women : 37, 
            target_state : 'Michigan', 
            website : 'www.homedepot.com',  
            h1_list : ['Home Depot', 'A place to find a home', 'Contact Us:'], 
            keyword_list : ['lawncare','drill', 'DIY', 'lawnchair', 'paint'], 
            keyword_rating_list : [2,4,2,3,4], 
            backlink_list : ['arniesfavoriteitems.com', 'medium.com/bestdrillsfortheholidays'], 
            keyword_difficulty_list : [8,9,6,8,10], 
            keyword_volume_list : [2000000,10000000,5000000,2000000,100000000]
        }
    ]
    await DigitalMarketingData.insertMany(digitalMarketingData)
    console.log('Added Digital Marketing Data')
}

const run = async() => {
    await createDigitalMarketingData()
    db.close()
}

run()