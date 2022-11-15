import React, { Component } from "react";
import { connect } from "react-redux";
import Chair from "./Chair";

class ChairList extends Component {
  render() {
    const { chairList } = this.props;
    return (
      <div>
        {chairList.map((item) => {
          return (
            <div className='row text-center' key={item.hang}>
              <div
                className='col-1 m-2'
                style={{
                  border: "1px solid orange",
                  background: "orange",
                  borderRadius: "5px",
                  height: "30px",
                  color: "white",
                }}>
                {item.hang}
              </div>
              <div className='col w-100 d-flex justify-content-around m-2'>
                {item.danhSachGhe.map((item) => {
                  return <Chair key={item.soGhe} item={item} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairList: state.chair.chairList,
  };
};
export default connect(mapStateToProps)(ChairList);
