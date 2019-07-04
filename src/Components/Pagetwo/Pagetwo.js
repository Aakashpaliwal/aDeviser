import React, { Component } from "react";
import { Link } from "react-router-dom";
import './pagetwo.css'
export class Pagetwo extends Component {
  constructor() {
    super();
    this.state = {
      userdata: [],
      page_status : true
    };
  }
  componentDidMount() {
    let movies = localStorage.getItem("fruits_arr");
    this.setState({
      userdata: JSON.parse(movies)
    });
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
             
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/Pageone">Page One</Link>
                </a>
              </li>

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
                    <em>Table Here</em>
                  </h3>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="table-bg">
         
              <br />
              <table className="table table-responsive-sm table-bordered">
                <thead className="thead-dark">
                  <tr>
                    {/* <th scope="col">Sr. No.</th> */}
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">User's Name</th>
                    <th scope="col">Date Addedd</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.userdata ? (
                    this.state.userdata.map(function(item, id) {
                      return (
                        <tr key={id}>
                          <td>{item.name || "NO DATA"}</td>
                          <td>{item.description || "NO DATA"}</td>
                          <td>{item.user_name || "NO DATA"}</td>
                          <td>{item.date || "NO DATA"}</td>
                        </tr>
                      );
                    }, this)
                  ) : (
                    <span>No Data Present....</span>
                  )}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagetwo;
