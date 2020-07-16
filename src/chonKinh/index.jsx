import React, { Component } from "react";
import "./index.css";

let arrProduct = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/v1.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/v2.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/v3.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 4,
    price: 30,
    name: "DIOR D6005U",
    url: "./img/v4.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 5,
    price: 30,
    name: "PRADA P8750",
    url: "./img/v5.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 6,
    price: 30,
    name: "PRADA P9700",
    url: "./img/v6.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 7,
    price: 30,
    name: "FENDI F8750",
    url: "./img/v7.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 8,
    price: 30,
    name: "FENDI F8500",
    url: "./img/v8.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 9,
    price: 30,
    name: "FENDI F4300",
    url: "./img/v9.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

class ChonKinh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }
  handleOnChooseGlasses = (id) => {
    for (let item of arrProduct) {
      if (item.id === id) {
        this.setState({
          item,
        });
      }
    }
  };
  render() {
    let { name, price, url, desc } = this.state.item;
    return (
      <section className="glasses">
        <div className="glasses__wrapper container my-4">
          <div className="row">
            <div className="col-6">
              <h2>Virtual Glasses</h2>
              <div className="d-flex flex-wrap">
                {arrProduct.map((glasses, key) => (
                  <button
                    key={key}
                    className="btn"
                    onClick={() => this.handleOnChooseGlasses(glasses.id)}
                  >
                    <img src={glasses.url} alt="kinh" />
                  </button>
                ))}
              </div>
            </div>
            <div className="col-6">
              <div className="card position-relative" style={{ width: 400 }}>
                <img
                  className="card-img-top img-fluid"
                  src="./img/model.jpg"
                  alt="Card"
                />
                <div className="model__content">
                    <img
                      src={url ? url : "./img/v6.png"}
                      alt="hinh"
                      className="glasses__glass"
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {name ? name : "PRADA P9700"}
                      </h4>
                      <button type="button" className="btn btn-danger btn-lg">
                        ${price ? price : 30}
                      </button>
                      <p className="card-text">
                        {desc
                          ? desc
                          : "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."}
                      </p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ChonKinh;
