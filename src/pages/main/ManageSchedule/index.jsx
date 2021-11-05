import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./index.css";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import gambar from "../../../assets/img/Spiderman.png";
import ebuid from "../../../assets/img/ebuid-mini.png";
import cineone from "../../../assets/img/cineone-mini.png";
import hiflix from "../../../assets/img/hiflix-mini.png";
import TimePicker from "react-time-picker";

const ManageSchedule = () => {
  let history = useHistory();

  const [timeValue, setTimeValue] = useState("10:00");
  const [timePicker, setTimePicker] = useState(false);
  const [timeArray, setTimeArray] = useState([]);

  const handleShowTimePicker = () => {
    if (!timePicker) {
      setTimePicker(true);
    } else {
      setTimePicker(false);
    }
  };

  const handleSubmitTime = () => {
    function tConv24(time24) {
      var ts = time24;
      var H = +ts.substr(0, 2);
      var h = H % 12 || 12;
      h = h < 10 ? "0" + h : h; // leading 0 at the left for 1 digit hours
      var ampm = H < 12 ? " AM" : " PM";
      ts = h + ts.substr(2, 3) + ampm;
      return ts;
    }
    setTimeArray([...timeArray, tConv24(timeValue)]);
    setTimePicker(false);
  };
  console.log(timeArray);
  // const [form, setForm] = useState({
  //   movieId: "",
  //   premiere: "",
  //   time: "",
  // })

  // handleAddTime = (e) => {
  //   if (e.key === "Enter") {
  //     setForm({
  //       ...form,
  //       time: [...form.time, e.target.value]
  //     }),
  //     setShowInputTime(false)
  //   }
  // };

  // handlePostSchedule = () => {
  //   const setData = {
  //     ...this.state.form,
  //     time: this.state.form.time.join(",")
  //   };
  //   console.log(this.state.form);
  //   console.log(setData);
  // };

  return (
    <>
      <Navs />
      <div className="schedule__bg">
        <div className="container">
          <div className="schedule__header">
            <h1>Form Schedule</h1>
          </div>
          <div className="schedule">
            <div className="row">
              <div className="col-2">
                <div className="schedule__border">
                  <img src={gambar} />
                </div>
              </div>
              <div className="col-5">
                <div className="schedule__content--desc">
                  <span>Movie</span>
                </div>
                <div className="schedule__content--input">
                  {/* <input type="text" placeholder="Select Movie" /> */}
                  <select>
                    <option>Select Movie</option>
                  </select>
                </div>
                <div className="schedule__content--desc">
                  <span>Price</span>
                </div>
                <div className="schedule__content--input">
                  <input type="number" placeholder="10" />
                </div>
                <div className="schedule__content--desc">
                  <span>Premiere</span>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="schedule__premiere">
                      <img src={ebuid} />
                      <img src={hiflix} />
                      <img src={cineone} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="schedule__content--desc">
                  <span>Location</span>
                </div>
                <div className="schedule__content--input">
                  {/* <input type="text" placeholder="Select Location" /> */}
                  <select>
                    <option>Select Location</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="schedule__content--desc">
                      <span>Date Start</span>
                    </div>
                    <div className="schedule__content--input">
                      <input type="text" placeholder="07/05/2020" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="schedule__content--desc">
                      <span>Date End</span>
                    </div>
                    <div className="schedule__content--input">
                      <input type="text" placeholder="07/07/2020" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="schedule__content--desc">
                    <span>Time</span>
                  </div>
                  <div className="col-3 schedule__content--time--">
                    <button onClick={handleShowTimePicker}>+</button>
                    {timePicker && (
                      <div className="schedule__content--timepicker">
                        <TimePicker
                          onChange={setTimeValue}
                          value={timeValue}
                          amPmAriaLabel="Select AM/PM"
                        />
                        <button onClick={handleSubmitTime}>Ok</button>
                      </div>
                    )}
                    {timeArray?.map((e, i) => {
                      return <p key={i}>{e}</p>;
                    })}
                  </div>
                  {/* <div className="col-3 schedule__content--time">
                    <button>08:30 am</button>
                  </div>
                  <div className="col-3 schedule__content--time">
                    <button>10:30 am</button>
                  </div>
                  <div className="col-3 schedule__content--time">
                    <button>12:00 pm</button>
                  </div>
                  <div className="col-3 schedule__content--time">
                    <button>04:30 pm</button>
                  </div>
                  <div className="col-3 schedule__content--time">
                    <button>07:30 pm</button>
                  </div>
                  <div className="col-3 schedule__content--time">
                    <button>10:30 am</button>
                  </div>
                  <div className="col-3 schedule__content--time">
                    <button>12:00 pm</button>
                  </div> */}
                </div>
                <div className="schedule__content--button">
                  <button className="btn btn-light text-primary">Reset</button>
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="schedule__data">
            <div className="data--schedule">
              <h1>Data Schedule</h1>
            </div>
            <div className="data--dropdown">
              <select>
                <option>Sort</option>
              </select>
              <select>
                <option>Location</option>
              </select>
              <select>
                <option>Movie</option>
              </select>
            </div>
          </div>
          <div className="schedule">
            <div className="schedule__layout">
              <div className="schedule__booking">
                <div className="row">
                  <div className="col-12 col-lg-6 schedule__content--cinema">
                    <img src={ebuid} />
                  </div>
                  <div className="col-12 col-lg-6 schedule__content--adress">
                    <h4>ebv.id</h4>
                    <span>Whatever street No.12, South Purwokerto</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                </div>
              </div>
              <div className="schedule__booking">
                <div className="row">
                  <div className="col-6 schedule__content--cinema">
                    <img src={cineone} />
                  </div>
                  <div className="col-6 schedule__content--adress">
                    <h4>ebv.id</h4>
                    <span>Whatever street No.12, South Purwokerto</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                </div>
              </div>
              <div className="schedule__booking">
                <div className="row">
                  <div className="col-6 schedule__content--cinema">
                    <img src={hiflix} />
                  </div>
                  <div className="col-6 schedule__content--adress">
                    <h4>ebv.id</h4>
                    <span>Whatever street No.12, South Purwokerto</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="empty"></div>
      </div>
      <Footer />
    </>
  );
};
export default ManageSchedule;
