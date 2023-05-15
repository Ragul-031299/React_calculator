import React, { useState } from "react";
import "./App.css";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

export default function App() {
  let [result, setResult] = useState("");
  function btnClicked(event) {

    let btnValue = event.target.innerText;
    if (
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(btnValue)
    ) {
      setResult(result + btnValue);
    } else if (btnValue === "⌫" && result !== "") {
      let tempResult = result.slice(0, -1);
      setResult(tempResult);
    } else if (
      ["/", "*", "+", "-", "%", "**"].includes(btnValue) && result !== ""
    ) {
      setResult(result + btnValue);
    } else if (btnValue === "=") {
      let tempres = eval(result);
      setResult(tempres);
    } else if (btnValue === "C") {
      setResult("");
    }
  }

  return (

    <div className="App">
      <br></br>
      <main id="container" className="container-center">
        <div>
          <header>
            <RocketLaunchIcon className="icon" />R<div className="gradient">$</div>tart
          </header>
        </div>

        <form>
          <input type="text" value={result} ></input>
        </form>
        <div className="keypad container h-100">
          <table>
            <tbody>
<div>

              <tr>
                <td>
                  <button className="button-black" id="span" onClick={btnClicked}>
                    C

                  </button>
                </td>
                <td>
                  <button className="button-black" onClick={btnClicked}>
                    %
                  </button>

                </td>
                <td>

                  <button className="button-black" onClick={btnClicked}>
                    /
                  </button>
                </td>
                <td>
                  <button className="button-black" id="span" onClick={btnClicked}>
                    ⌫
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="button-white"
                    onClick={btnClicked}
                  >
                    7
                  </button>
                </td>
                <td>
                  <button
                    className="button-white "
                    onClick={btnClicked}
                  >
                    8
                  </button>
                </td>
                <td>
                  <button
                    className="button-white"
                    onClick={btnClicked}
                  >
                    9
                  </button>
                </td>
                <td>
                  <button className="button-black" onClick={btnClicked}>
                    *
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="button-white button-number"
                    onClick={btnClicked}
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    className="button-white button-number"

                    onClick={btnClicked}
                  >
                    5
                  </button>
                </td>
                <td>
                  <button
                    className="button-white button-number"
                    onClick={btnClicked}
                  >
                    6
                  </button>
                </td>
                <td>
                  <button className="button-black" onClick={btnClicked}>
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="button-white button-number"
                    onClick={btnClicked}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    className="button-white button-number"
                    onClick={btnClicked}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    className="button-white button-number"
                    onClick={btnClicked}
                  >
                    3
                  </button>
                </td>
                <td>
                  <button className="button-black" onClick={btnClicked}>
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="button-white" onClick={btnClicked}>
                    .
                  </button>
                </td>
                <td>
                  <button
                    className="button-white button-number"
                    onClick={btnClicked}
                  >
                    0
                  </button>
                </td>
                <td>
                  <button className="button-white" onClick={btnClicked}>
                    **
                  </button>

                </td>
                <td>
                  <button className="button-red" onClick={btnClicked}>=
                  </button>
                </td>
              </tr>
              </div>

            </tbody>
          </table>

        </div>
      </main>
    </div>
  );
}
