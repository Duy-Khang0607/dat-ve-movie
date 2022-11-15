import clsx from "clsx";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./ChairList.css";
class Chair extends Component {
  render() {
    const { item, chairSelectedList, handleChair } = this.props;
    return (
      <button
        onClick={() => {
          handleChair(item);
        }}
        className={clsx("ghe", {
          booked: item.daDat,
          booking: chairSelectedList.find((e) => e.soGhe === item.soGhe),
        })}
        disabled={item.daDat} // => kh cho user chọn
        style={{
          background: "#fff",
          color: "black",
          border: "2px solid orange",
          borderRadius: "5px",
        }}>
        {item.soGhe}
      </button>
    );
  }
}

// Kết nối lên trên redux để lấy về chairSelectedList
const mapStateToProps = (state) => {
  return {
    chairSelectedList: state.chair.chairSelectedList,
  };
};

// click vô để booking ghế thì phải truyền lên cho store
const mapDispatchToProps = (dispatch) => {
  return {
    handleChair: (chair) => {
      dispatch({
        type: "CHANGE_CHAIR",
        payload: chair,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chair);
