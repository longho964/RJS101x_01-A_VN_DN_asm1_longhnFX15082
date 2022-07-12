import React, { Component } from "react";
import { Media } from "reactstrap";
import { STAFFS } from "./staffs";
import "./App.css";
import dateFormat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      STAFFS,
      choosenStaff: null,
    };
  }

  showInfo(item) {
    this.setState({ choosenStaff: item });
  }

  render() {
    console.log("this.state.STAFFS", this.state.STAFFS);
    const menu = this.state.STAFFS.map((item) => {
      return (
        <div key={item.id} className="liInfor">
          <Media tag="li" onClick={() => this.showInfo(item)}>
            <Media body className="ml-5">
              <Media heading>{item.name}</Media>
            </Media>
          </Media>
        </div>
      );
    });

    return (
      <div className="container">
        <h1 className="application"> Ứng dụng quản lí nhân sự v1.0 </h1>

        <div>
          <Media list className="row">
            {menu}
          </Media>
        </div>
        <div className="infor">
          <h1> Thông tin chi tiết nhân viên</h1>{" "}
        </div>

        <div className="infor-body">
          {" "}
          {this.state.choosenStaff !== null && (
            <div key={this.state.choosenStaff.id} className="containerinfor">
              <h5> Họ và tên: {this.state.choosenStaff.name}</h5>
              <p> Ngày sinh : {this.state.choosenStaff.doB}</p>
              <p> Ngày vào công ty:{this.state.choosenStaff.startDate}</p>
              <p> Phòng ban: {this.state.choosenStaff.department.name}</p>
              <p>
                {" "}
                Số ngày nghỉ còn lại: {this.state.choosenStaff.annualLeave}
              </p>
              <p> số ngày làm thêm: {this.state.choosenStaff.overTime}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default StaffList;
