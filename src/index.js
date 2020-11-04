import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const App = () => {

  return (
    <div>

        <div>
          <h1>Concordance</h1>
          <label for="concordance">Input:</label>
          <br></br>
          <input type="text" id="concordance" name="concordance"/>
          <input type="submit" value="Submit"/>
          <br></br>
          <br></br>
          <label for="concordance">Result:</label>
          <br></br>
          <p id="concordance-result"></p>
        </div>

        <div>
          <h1>Locator</h1>
          <label for="locator">Input:</label>
          <br></br>
          <input type="text" id="locator" name="locator"/>
          <input type="submit" value="Submit"/>
          <br></br>
          <br></br>
          <label for="locator">Result:</label>
          <br></br>
          <p id="locator-result"></p>
        </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));