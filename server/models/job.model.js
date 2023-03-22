const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Name is a required field."],
            minlength: [3, "Name must be atleast 3 characters."],
        },
        company: {
            type: String,
            required: [true, "Name is a required field."],
            minlength: [3, "Name must be atleast 3 characters."],
        },
        salary: {
            type: Number,
            required: [true, "Salary is required"],
            min: [70000, "Salary must be atleast $70,000"],
        },
        remote: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Job = mongoose.model("Job", JobSchema);

module.exports = { Job };
