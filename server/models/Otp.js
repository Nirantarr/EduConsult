import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // This TTL index will auto-delete the document after 10 minutes (600 seconds)
        expires: 600, 
    },
});

const Otp = mongoose.model('Otp', otpSchema);
export default Otp;