import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
export class Home extends Component {
  componentDidMount() {
    localStorage.setItem("navbar_status", "false");
  }

  render() {
    return (
      <div>
        <div className="home-bg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <center> */}
                <h5>Welcome to Fruit Store</h5>
                <p>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  Lorem ipsum dolor sit
                </p>
                <br />
                <Link to="/Pageone">
                  <button className="btn btn-primary">Enter</button>
                </Link>
                {/* </center> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
