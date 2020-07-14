import React from "react";

const RenderWithMap = () => {
  let productList = [
    { id: "SP01", name: "IphoneX", gia: 100 },
    { id: "SP02", name: "Iphone4", gia: 50 },
    { id: "SP03", name: "Iphone6", gia: 20 },
  ];

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Mã</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, key) => (
            <tr key={key}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.gia}</td>
              <td>
                <button className="btn btn-danger">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RenderWithMap;
