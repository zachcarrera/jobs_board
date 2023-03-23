import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const OneJob = () => {
    const [job, setJob] = useState(null);
    const { _id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/jobs/${_id}`)
            .then((res) => {
                setJob(res.data.job);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [_id]);

    const handleDelete = (deleteId) => {
        axios
            .delete(`http://localhost:8000/api/jobs/${deleteId}`)
            .then((res) => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (job === null) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Link to="/">Home</Link>
            <div className="w-50 rounded shadow p-4 mx-auto my-2">
                <p>Job Title: {job.title}</p>
                <p>Company {job.company}</p>
                <p>Salary: ${job.salary}</p>
                <p>Remote: {job.remote ? "Yes" : "No"}</p>
                <div>
                    <Link
                        className="btn btn-warning mx-1"
                        to={`/jobs/edit/${job._id}`}
                    >
                        Edit
                    </Link>
                    <button
                        className="btn btn-danger mx-1"
                        onClick={(event) => handleDelete(job._id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default OneJob;
