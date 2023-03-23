import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const NewJob = () => {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [salary, setSalary] = useState("");
    const [remote, setRemote] = useState(false);
    const [validationErrors, setValidationErrors] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newJob = {
            title,
            company,
            salary,
            remote,
        };

        axios
            .post("http://localhost:8000/api/jobs/new", newJob)
            .then((res) => {
                navigate(`/jobs/${res.data.job._id}`);
            })
            .catch((error) => {
                console.log(error);
                setValidationErrors(error?.response?.data?.errors);
            });
    };

    return (
        <div className="w-50 rounded shadow p-4 mx-auto my-2">
            <form className="text-start" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title:</label>
                    {validationErrors?.title && (
                        <p className="text-danger">
                            {validationErrors.title.message}
                        </p>
                    )}
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Company:</label>
                    {validationErrors?.company && (
                        <p className="text-danger">
                            {validationErrors.company.message}
                        </p>
                    )}
                    <input
                        type="text"
                        className="form-control"
                        value={company}
                        onChange={(event) => setCompany(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Salary: </label>
                    {validationErrors?.salary && (
                        <p className="text-danger">
                            {validationErrors.salary.message}
                        </p>
                    )}
                    <input
                        type="number"
                        className="form-control"
                        value={salary}
                        onChange={(event) =>
                            setSalary(event.target.valueAsNumber)
                        }
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="remote-check"
                        checked={remote}
                        onChange={(event) => setRemote(event.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="remote-check">
                        Remote
                    </label>
                </div>
                <input
                    type="submit"
                    value="Create Job"
                    className="btn btn-success mx-1"
                />
                <Link to="/" className="btn btn-secondary mx-1">
                    Cancel
                </Link>
            </form>
        </div>
    );
};

export default NewJob;
