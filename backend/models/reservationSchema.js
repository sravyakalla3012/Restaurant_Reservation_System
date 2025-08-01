import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose. Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3,"First name must contain at least 3 characters!"],
        maxLength: [30,"First name must connot exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3,"Last name must contain at least 3 characters!"],
        maxLength: [30,"Last name must connot exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate:[validator.isEmail, "Provide a valid Email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10,"Phone number must contain only 10 digits!"],
        maxLength: [10,"Phone number must contain only 10 digits!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    preference: {
        type: String,
        required: true,
    },
    members: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
    },
});

export const Reservation = mongoose.model("Reservation",reservationSchema);