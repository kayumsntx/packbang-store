const mongoose = require('mongoose');

const commissionSchema = new mongoose.Schema({
    itMaintenancePercent: { 
        type: Number, 
        default: 2.5,
        min: 2.5,
        required: true 
    },
    adminCommissionPercent: { 
        type: Number, 
        default: 2.5,
        min: 2.5,
        max: 97.5,
        required: true 
    },
    percent: { 
        // Total Admin Fee (itMaintenancePercent + adminCommissionPercent)
        type: Number, 
        default: 5.0,
        min: 5.0,
        max: 100,
        required: true
    },
    updatedBy: { 
        type: String, 
        default: 'Admin' 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Commission', commissionSchema);
