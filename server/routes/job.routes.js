const {
    createJob,
    getAllJobs,
    getOneJob,
    updateJob,
    deleteJob,
} = require("../controllers/job.controller");

const express = require("express");

const router = express.Router();

router.post("/new", createJob);
router.get("/", getAllJobs);
router.get("/:_id", getOneJob);
router.put("/update/:_id", updateJob);
router.delete("/:_id", deleteJob);

module.exports = { jobRouter: router };
