import React from "react";

const ClassProps = ({ src }) => {
  return (
    <div className="card w-50 mx-auto">
      <img className="card-img-top" src={src} alt="/" />
      <div className="card-body">
        <h4 className="card-title">Title</h4>
        <p className="card-text">Body</p>
      </div>
    </div>
  );
};

export default ClassProps;
