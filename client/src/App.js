import { Route, Routes } from "react-router-dom";
import "./App.css";
import { JobsList } from "./views/JobsList";
import { OneJob } from "./views/OneJob";
import { NewJob } from "./views/NewJob";
import { EditJob } from "./views/EditJob";

function App() {
    return (
        <div className="App">
            <h1>Jobs Board</h1>
            <Routes>
                <Route path="/" element={<JobsList />} />
                <Route path="/jobs/new" element={<NewJob />} />
                <Route path="/jobs/edit/:_id" element={<EditJob />} />
                <Route path="/jobs/:_id" element={<OneJob />} />
            </Routes>
        </div>
    );
}

export default App;
