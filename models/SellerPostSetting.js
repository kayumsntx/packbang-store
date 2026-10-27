const mongoose = require('mongoose');

const sellerPostSettingSchema = new mongoose.Schema({
    // If true, admin approval is required before seller posts go live; if false, auto-approved / instant live
    requireApproval: {
        type: Boolean,
        default: false
    },
    // IT Support Charge 1.5% Fixed
    itSupportPercent: {
        type: Number,
        default: 1.5,
        min: 1.5,
        required: true
    },
    // Admin Commission settable and editable
    adminCommissionPercent: {
        type: Number,
        default: 3.5,
        min: 0,
        max: 98.5,
        required: true
    },
    // Total Admin Fee (itSupportPercent + adminCommissionPercent)
    totalFeePercent: {
        type: Number,
        default: 5.0,
        min: 1.5,
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

module.exports = mongoose.model('SellerPostSetting', sellerPostSettingSchema);
