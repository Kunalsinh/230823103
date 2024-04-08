import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Resume from "./Resumes.js";
import Suggestion from "./Suggestions";
import Hook from "./Hooks.js";
import Form from "./Forms.js";
const allData = require("./suggestionsData.json");

function App() {
  console.log(allData);
  return (
    <>
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      {
        /* {
        allData.map(function (suggest) {
          return <Suggestion suggestionPic={suggest.suggestPic} suggestionName={suggest.suggestName} />
        })
        } */

        // <Resume/>
        // <Hook />
        // <Form />
      }
    </>
  );
}

export default App;
