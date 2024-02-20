import React, { Component } from "react";
import "./style.css";

export default class Item extends Component {
  render() {
    return (
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            <div className="col-lg-3 col-xxl-3 mb-5 text-center">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="..."
                  className="card-img-top"
                  alt="500 X 325"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xxl-3 mb-5 text-center">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="..."
                  className="card-img-top"
                  alt="500 X 325"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xxl-3 mb-5 text-center">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="..."
                  className="card-img-top"
                  alt="500 X 325"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xxl-3 mb-5 text-center">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="..."
                  className="card-img-top"
                  alt="500 X 325"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
