import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";



export default class AddTutorial extends Component {

  constructor(props) {

    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePlatform = this.onChangePlatform.bind(this);
    this.onChangeMonth = this.onChangeMonth.bind(this);
    this.onChangeImgSrc = this.onChangeImgSrc.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      name: "",
      price: 59.99,
      description: "", 
      platform: "",
      releaseMonth: "",
      imgSrc: "",
      published: false,

      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      descr1: e.target.value
    });
  }

  onChangePlatform(e) {
    this.setState({
      platform: e.target.value
    });
  }

  onChangeMonth(e) {
    this.setState({
      releaseMonth: e.target.value
    });
  }

  onChangeImgSrc(e) {
    this.setState({
      imgSrc: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      name: this.state.name,
      price: this.state.price,
      descr1: this.state.descr1,
      platform: this.state.platform,
      releaseMonth: this.state.releaseMonth,
      imgSrc: this.state.imgSrc.replace("C:\\fakepath\\","./gameimages/")
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          price: response.data.price,
          descr1: response.data.descr1,
          platform: response.data.platform,
          releaseMonth: response.data.releaseMonth,
          imgSrc: response.data.imgSrc,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      name: "",
      price: 59.99,
      descr1: "",
      platform: "",
      releaseMonth: "",
      imgSrc: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Game Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                required
                value={this.state.price}
                onChange={this.onChangePrice}
                name="price"
              />
            </div>

            <div className="form-group">
              <label htmlFor="descr1">Description</label>
              <input
                type="text"
                className="form-control"
                id="descr1"
                required
                value={this.state.descr1}
                onChange={this.onChangeDescription}
                name="descr1"
              />
            </div>

            <div className="form-group">
            <label htmlFor="platform"></label>
                            <select
                                id="platform"
                                required
                                value={this.state.platform}
                                onChange={this.onChangePlatform}
                                name="platform"
                                className="form-control"
                                style={{width: "30%"}}
                            >
                                <option value="" disabled selected>Select Platform</option>
                                <option value="Switch">Switch</option>
                                <option value="Playstation">Playstation</option>
                                <option value="Xbox">Xbox</option>
                                <option value="Windows">Windows</option>
                            </select>
            </div>

            <div className="form-group">
            <label htmlFor="releaseMonth"></label>
                            <select
                                id="releaseMonth"
                                required
                                value={this.state.releaseMonth}
                                onChange={this.onChangeMonth}
                                name="releaseMonth"
                                className="form-control"
                                style={{width: "30%"}}
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
            </div>

            <div className="form-group">
                <label htmlFor="imgSrc">Choose Image</label>
                <input
                type="file"
                className="form-control"
                id="imgSrc"
                required
                value={this.state.imgSrc}
                onChange={this.onChangeImgSrc}
                name="imgSrc"
              />
            </div>

            <div className="form-group">
                <label htmlFor="imgSrc"></label>
                <input
                type="hidden"
                className="form-control"
                id="imgSrc"
                required
                value={this.state.imgSrc.replace("C:\\fakepath\\","./gameimages/")}
                onChange={this.onChangeImgSrc}
                name="imgSrc"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}


