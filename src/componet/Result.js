import React, { Component } from "react";
import { connect } from "react-redux";
import "./ChairList.css";
class Result extends Component {
  render() {
    const { chairSelectedList, deleteChair, handlePay } = this.props;
    return (
      <div>
        <h2 className='text-center'>Danh sách ghế bạn chọn</h2>
        <div className='row py-2'>
          <div className='col-1 gheDaDat'></div>
          <div className='col'>Ghế đã đặt</div>
        </div>
        <div className='row py-2'>
          <div className='col-1 gheDangChon'></div>
          <div className='col'>Ghế đang chọn</div>
        </div>
        <div className='row py-2'>
          <div className='col-1 gheChuaDat'></div>
          <div className='col'>Ghế chưa đặt</div>
        </div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>
            {chairSelectedList.map((item) => {
              return (
                <tr key={item.soGhe}>
                  <td>{item.soGhe}</td>
                  <td>{item.gia.toLocaleString()}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteChair(item);
                      }}
                      className='btn btn-danger'>
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div>
          <button className='btn btn-warning'>
            Tổng tiền:{" "}
            {chairSelectedList
              .reduce((total, item) => {
                return (total += item.gia);
              }, 0)
              .toLocaleString() + " VNĐ"}
          </button>
        </div>
        <button onClick={handlePay} className='btn btn-success my-3'>
          Thanh toán
        </button>
      </div>
    );
  }
}

// Show ghế được chọn thì phải lên store lấy chairSelectedList về
const mapStateToProps = (state) => {
  return {
    chairSelectedList: state.chair.chairSelectedList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePay: () => {
      dispatch({
        type: "PAY",
      });
    },
    deleteChair: (chair) => {
      dispatch({
        type: "CHANGE_CHAIR",
        payload: chair,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
