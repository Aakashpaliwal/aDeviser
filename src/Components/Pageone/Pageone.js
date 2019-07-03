import React, { Component } from "react";
import "./pageone.css";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
export class Pageone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [],
      new_fruits: [],
      name: "",
      description: "",
      date: "",
      user_name: "",
      page_status: false
    };
    this.validator = new SimpleReactValidator();
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  async onSubmit(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      this.state.fruits.push({
        name: this.state.name,
        description: this.state.description,
        date: this.state.date,
        user_name: this.state.user_name
      });
      console.log(this.state);

      sessionStorage.setItem("navbar_status", "true");

      localStorage.setItem("name", this.state.name);
      localStorage.setItem("description", this.state.description);
      localStorage.setItem("date", this.state.date);
      localStorage.setItem("user_name", this.state.user_name);
      localStorage.setItem("fruits_arr", JSON.stringify(this.state.fruits));
      let new_Arr = localStorage.getItem("fruits_arr");
      new_Arr = JSON.parse(new_Arr);
      console.log("new", new_Arr);
      //    var new_fruit_arr = new_Arr.concat(this.state.fruits)
      //     this.setState({
      //         new_fruits : new_fruit_arr
      //     })
      //    console.log(this.state.new_fruits)
      this.setState({
        name: "",
        description: "",
        date: "",
        user_name: "",
        page_status: true
      });
      alert("fruit " + this.state.name + " has been added.");
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  }

  render() {
    let pagetwostatus;
    if (this.state.page_status) {
      pagetwostatus = (
        <li class="nav-item">
          <a class="nav-link" href="#">
            <Link to="/Pagetwo">Page Two</Link>
          </a>
        </li>
      );
    } else {
      pagetwostatus = (
        <li class="nav-item">
          <a class="nav-link disabled" href="#">
            Disabled Link
          </a>
        </li>
      );
    }
    return (
      <div>
        {/*navbar */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark custom-nav-color">
          <a class="navbar-brand" href="#">
            <Link to="/">Home</Link>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto nav">
              {/* <li class="nav-item active">
                <a class="nav-link" href="#">
                  <Link to="/">
                    Home <span class="sr-only">(current)</span>
                  </Link>
                </a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/Pageone">Page One</Link>
                </a>
              </li>

              {/* {pagetwolink} */}
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                <NavLink 
            onClick={this.handleClick} 
            className="nav-link" 
            to="/pages"
        >
            ...
        </NavLink>
                </a>
              </li> */}
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/Pagetwo">Page Two</Link>
                </a>
              </li> */}
              {pagetwostatus}
            </ul>
          </div>
        </nav>
        {/*end navbar */}
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <center>
                  <h3>
                    <em>Fruits Form</em>
                  </h3>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 right-side-padd">
              <div className="left-side-form">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Fruit's Name</label>
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      name="name"
                      value={this.state.name}
                      onChange={e => this.change(e)}
                      required
                    >
                      <option>Choose...</option>
                      <option>Apple</option>
                      <option>Orange</option>
                      <option>Banana</option>
                      <option>Kiwi</option>
                      <option>Pineapple</option>
                    </select>
                    <span className="text-danger">
                        {this.validator.message(
                          "Fruit's Name",
                          this.state.name,
                          "required"
                        )}
                      </span>
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">
                      Fruit's Description
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="6"
                      name="description"
                      value={this.state.description}
                      onChange={e => this.change(e)}
                      required
                    />
                     <span className="text-danger">
                        {this.validator.message(
                          "Description",
                          this.state.description,
                          "required"
                        )}
                      </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 right-side-padd">
              <div className="right-side-form">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Fruit's Name</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Fruit's Name Here…"
                      disabled
                      value={this.state.name}
                      name="name"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Added By</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="User's Name…"
                      name="user_name"
                      value={this.state.user_name}
                      onChange={e => this.change(e)}
                      required
                    />
                     <span className="text-danger">
                        {this.validator.message(
                          "User Name",
                          this.state.user_name,
                          "required"
                        )}
                      </span>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Date Added</label>
                    <input
                      class="form-control"
                      type="date"
                      placeholder="Enter Date"
                      name="date"
                      value={this.state.date}
                      onChange={e => this.change(e)}
                      required
                    />
                     <span className="text-danger">
                        {this.validator.message(
                          "Date",
                          this.state.date,
                          "required"
                        )}
                      </span>
                  </div>
                  <center>
                    {" "}
                    <button
                      type="submit"
                      class="btn btn-warning mb-2"
                      onClick={e => this.onSubmit(e)}
                    >
                      Submit
                    </button>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pageone;
