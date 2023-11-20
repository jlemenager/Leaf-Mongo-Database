const db = require('../db')
const { Business } = require('../models')

const createBusinesses = async() => {
    const businesses = [
        {
            name: 'Home Depot',
            username: 'homedepot',
            password:'1234',
            loggedIn: false    
        }
    ]
    await Business.insertMany(businesses)
    console.log('Added Businesses')
}

const run = async() =>{
    await createBusinesses()
    db.close()
}

run()