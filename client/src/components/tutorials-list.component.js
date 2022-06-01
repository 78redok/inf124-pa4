import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.onChangeSearchPlatform = this.onChangeSearchPlatform.bind(this);
    this.onChangeSearchMonth = this.onChangeSearchMonth.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchName = this.searchName.bind(this);
    this.searchPlatform = this.searchPlatform.bind(this);
    this.searchMonth = this.searchMonth.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  onChangeSearchPlatform(e) {
    const searchPlatform = e.target.value;

    this.setState({
      searchPlatform: searchPlatform
    });
  }

  onChangeSearchMonth(e) {
    const searchMonth = e.target.value;

    this.setState({
      searchMonth: searchMonth
    });
  }

  retrieveTutorials() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

    TutorialDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchPlatform() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

    TutorialDataService.findByPlatform(this.state.searchPlatform)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchMonth() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

    TutorialDataService.findByMonth(this.state.searchMonth)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {

    const { searchName, tutorials, currentTutorial, currentIndex, searchPlatform, searchMonth } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
            
            {/* <input
              type="text"
              className="form-control"
              placeholder="Search by Platform"
              value={searchPlatform}
              onChange={this.onChangeSearchPlatform}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchPlatform}
              >
                Search
              </button>
            </div> */}
            <select
               name="platsearch"
               id="platsearch"
               required
               className="form-control"
               value={searchPlatform}
               onChange={this.onChangeSearchPlatform}
               >
               <option value="" disabled selected>Select Platform</option>
               <option value="Switch">Switch</option>
               <option value="Playstation">Playstation</option>
               <option value="Xbox">Xbox</option>
               <option value="Windows">Windows</option>
            </select>
            <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchPlatform}
                >
                Search
            </button>

            <select
               name="monthsearch"
               id="monthsearch"
               required
               className="form-control"
               value={searchMonth}
               onChange={this.onChangeSearchMonth}
               >
               <option value="" disabled selected>Select Release Month</option>
               <option value="January">January</option>
               <option value="February">February</option>
               <option value="March">March</option>
               <option value="April">April</option>
               <option value="May">May</option>
               <option value="June">June</option>
               <option value="July">July</option>
               <option value="August">August</option>
               <option value="September">September</option>
               <option value="October">October</option>
               <option value="November">November</option>
               <option value="December">December</option>

            </select>
            <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchMonth}
                >
                Search
            </button>
          </div>
       </div>
        <div className="col-md-6">
          <h4>Games List</h4>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Game</h4>
              <div>
                <label>
                  <strong>Game Name:</strong>
                </label>{" "}
                {currentTutorial.name}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentTutorial.descr1}
              </div>
              <div>
                <label>
                  <strong>Price:</strong>
                </label>{" "}
                {currentTutorial.price}
              </div>
              <div>
                <label>
                  <strong>Platform:</strong>
                </label>{" "}
                {currentTutorial.platform}
              </div>
              <div>
                <label>
                  <strong>Release Month:</strong>
                </label>{" "}
                {currentTutorial.releaseMonth}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentTutorial.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/tutorials/" + currentTutorial.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Game...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
