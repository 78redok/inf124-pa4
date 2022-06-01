import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {



  render() {
    return (
      // <div>
      //   <nav className="navbar navbar-expand navbar-dark bg-dark">
      //     <Link to={"/tutorials"} className="navbar-brand">
      //       MyApp
      //     </Link>
      //     <div className="navbar-nav mr-auto">
      //       <li className="nav-item">
      //         <Link to={"/tutorials"} className="nav-link">
      //           Tutorials
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link to={"/add"} className="nav-link">
      //           Add
      //         </Link>
      //       </li>
      //     </div>
      //   </nav>

      //   <div className="container mt-3">
      //     <Switch>
      //       <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
      //       <Route exact path="/add" component={AddTutorial} />
      //       <Route path="/tutorials/:id" component={Tutorial} />
      //     </Switch>
      //   </div>
      // </div>

<body>
<header>
        <nav>
            <img src={require("./mainlogo.png")} alt="logo"></img>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Games List
              </Link>
            </li>
        </nav>
    </header>

    <section id="mainintroduction">
        <div class="about_container">
            <h1>Admin Control</h1>
        </div>
        <div>
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
            MyApp
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Games List
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav> */}

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>
      </div>
    </section>
</body>
    );
  }
}

export default App;
