import React, { Component } from "react";
// import "./DataBinding.module.css";
import styleDataBinding from "./DataBinding.module.css";

class DataBinding extends Component {
  sanPham = {
    ma: "SP01",
    tenSP: "Iphone X",
    gia: "1000$",
    img: "https://picsum.photos/id/237/200/300",
  };
  renderThongTin = () => {
    return (
      <div className="card w-25">
        <img className="card-img-top" src={this.sanPham.img} alt="hinh" />
        <div className="card-body">
          <h5 className="card-title">{this.sanPham.ten}</h5>
          <p className="card-text">{this.sanPham.gia}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  };
  render() {
    let title = "Cybersoft";
    let img = "https://picsum.photos/200/300";
    let hocVien = {
      ma: "001",
      ten: "Nguyen Van A",
    };
    const renderImg = () => {
      return (
        <div className="row">
          <div className="col-12">
            <img src={img} alt="hinh" />
          </div>
        </div>
      );
    };
    return (
      <div className="data-binding">
        <h1 id="title">{title}</h1>
        <img src={img} alt="hinh" />
        <div className="media_container mt-5">
          <div className="media">
            <img className="mr-3" src={img} alt="hinh" />
            <div className="media-body">
              <h5 className={`mt-0 text-success ${styleDataBinding.header}`}>Tên: {hocVien.ten}</h5>
              <p className="text-primary">Mã: {hocVien.ma}</p>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              illo recusandae laudantium excepturi culpa laborum?</span>
            </div>
          </div>
        </div>
        {this.renderThongTin()}
        <div className="container">{renderImg()}</div>
      </div>
    );
  }
}
export default DataBinding;
