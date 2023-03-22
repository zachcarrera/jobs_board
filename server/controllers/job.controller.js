const { Job } = require("../models/job.model");

const createJob = (req, res) => {
    console.log("controller: createJob", req.body);
    Job.create(req.body)
        .then((newlyCreatedJob) => {
            res.json({ job: newlyCreatedJob });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const getAllJobs = (req, res) => {
    console.log("controller: getAllJobs");
    Job.find({})
        .then((allJobs) => {
            res.json({ jobs: allJobs });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const getOneJob = (req, res) => {
    console.log("controller: getOneJob", req.params);
    Job.findOne({ _id: req.params._id })
        .then((oneJob) => {
            res.json({ job: oneJob });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const updateJob = (req, res) => {
    console.log("controller: updateJob", req.params, req.body);
    Job.findOneAndUpdate({ _id: req.params._id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedJob) => {
            res.json({ job: updatedJob });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const deleteJob = (req, res) => {
    console.log("controller: deleteJob", req.params);
    Job.deleteOne({ _id: req.params._id })
        .then((result) => {
            res.json({ dbResponse: result });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

module.exports = {
    createJob,
    getAllJobs,
    getOneJob,
    updateJob,
    deleteJob,
};
