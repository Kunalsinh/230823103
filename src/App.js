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
<<<<<<< HEAD
      // <Resume/>
      <Hook />
=======
      <Resume/>
>>>>>>> d72ee8dc510955f5d9acd2d1e4ab6747a6e0aad3
    }
    </>
  );
}

export default App;
