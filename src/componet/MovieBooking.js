import React, { Component } from "react";
import ChairList from "./ChairList";
import Result from "./Result";
import "./ChairList.css";
export default class MovieBooking extends Component {
  render() {
    return (
      <div className='container'>
        <h2 className='display-4 text-center'>Đặt vé xem phim Cyber</h2>
        <div className='row'>
          <div className='col-7 mt-5'>
            <div className='screen'>
              <h3 className='text-center fs-4'>Screen</h3>
            </div>
            <ChairList />
          </div>
          <div className='col-5'>
            <Result />
          </div>
        </div>
      </div>
    );
  }
}
