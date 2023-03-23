import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const JobsList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/jobs/")
            .then((res) => {
                setJobs(res.data.jobs);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDelete = (deleteId) => {
        axios
            .delete(`http://localhost:8000/api/jobs/${deleteId}`)
            .then((res) => {
                setJobs(jobs.filter((job) => job._id !== deleteId));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <Link to="/jobs/new">Create new jobs</Link>
            <div className="w-50 rounded shadow p-4 mx-auto my-2">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Company</th>
                            <th>Salary</th>
                            <th>Remote</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* map state here */}
                        {jobs.map((job) => (
                            <tr key={job._id}>
                                <td>
                                    <Link to={`/jobs/${job._id}`}>
                                        {job.title}
                                    </Link>
                                </td>
                                <td>{job.company}</td>
                                <td>{job.salary}</td>
                                <td>{job.remote ? "Yes" : "No"}</td>
                                <td>
                                    <Link
                                        className="btn btn-warning mx-1"
                                        to={`/jobs/edit/${job._id}`}
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-danger mx-1"
                                        onClick={(event) =>
                                            handleDelete(job._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobsList;
