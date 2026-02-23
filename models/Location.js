const mongoose = require('mongoose');

// Define the Location schema
const LocationSchema = new mongoose.Schema({
    coordinates: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true }
    },
    timestamp: { type: Date, default: Date.now }
});

// Create the model
const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;