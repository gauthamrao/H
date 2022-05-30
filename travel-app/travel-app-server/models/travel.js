const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create travel schema & model
const TravelSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    email_address: {
        type: String,
        required: [true, 'Email Address field is required']
    },
    travel_location: {
        type: String,
        required: [true, 'Travel Location field is required']
    },
    number_of_travellers: {
        type: Number,
        required: [true, 'Number of Travellers field is required']
    },
    budget_per_person: {
        type: Number,
        required: [true, 'Budget per Person field is required']
    }
});


const Travel = mongoose.model('student', TravelSchema);

module.exports = Travel;