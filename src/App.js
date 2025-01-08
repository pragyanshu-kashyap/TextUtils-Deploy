import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from './components/About';
import React, { useState } from "react";
import Alert from "./components/Alert";
// import {
// BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); //to set alert whenever some operation occcurs

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled !", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled !", "success");
    }
  };
  return (
    /*<>
    <h1> this is me </h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Pragyanshu always focus on the path otherwise code
        </a>
      </header>
    </div>
    </>*/
    // <div className="firstline"> Pragyanshu</div>
    //--------------> My customized project is here.<-------------------------- lecture 5
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        key={new Date()}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* /users --> Component 1      //since react uses partial matching thats why we are using "exact path" word instead of just path to avoid this conflict 
        /users/home --> Component 2 */}
        {/*<Route exact path="/about">
            <About mode={mode} />
          </Route>*/}
        {/* <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Try TextUtils - One place for all your english operations "
          mode={mode}
        />
        {/* </Route> */}
        {/* </Switch> */}
        <Footer mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
