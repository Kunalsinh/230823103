import logo from "./logo.svg";
import "./App.css";
import Resume from './Resumes.js';
import Suggestion from "./Suggestions";
import Resume from "./Resumes.js";
import Hook from "./Hooks.js";
const allData = require("./suggestionsData.json");

function App() {
  console.log(allData);
  return (
    <>
    {/* { 
      allData.map(function (suggest) {
        return <Suggestion suggestionPic={suggest.suggestPic} suggestionName={suggest.suggestName} />
      })
    }  */}
    
    {
      // <Resume/>
      <Hook />
      

    }
    </>
  );
}

export default App;
