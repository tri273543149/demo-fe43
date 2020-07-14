import React, { useState, useEffect, useCallback } from "react"; // hook
import { render } from "@testing-library/react";

const RenderWithState = (props) => {
  // state: thuộc tính chứa nhứng giá trị thay đổi khi người dùng thao tác trên giao diện. Đây là thuộc tính có sẵn của components;
  //   state = {
  //       isLogin: false
  //   }
  // Phương thức setState là 1 phương thức có sắn của component thực hiện 2 nhiệm vụ, 1 là thay đổi state, 2 là gọi this.render()

  let [isLogin = false, setLogin] = useState(0);
  let userName = "Tri";

  const login = () => {
    setLogin((isLogin = true));
    render();
  };
  const renderContent = () => {
    if (isLogin) {
      return <p className="lead text-primary">Hello! {userName}</p>;
    }
    return (
      <button className="btn btn-success" onClick={() => login()}>
        Đăng nhập
      </button>
    );
  };
  return <>{renderContent()}</>;
};

export default RenderWithState;
