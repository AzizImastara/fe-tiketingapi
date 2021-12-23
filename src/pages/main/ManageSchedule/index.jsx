import React, { useState, useEffect } from "react";
import "./index.css";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ebuid from "../../../assets/img/ebuid-mini.png";
import cineone from "../../../assets/img/cineone-mini.png";
import hiflix from "../../../assets/img/hiflix-mini.png";
import TimePicker from "react-time-picker";
import axios from "../../../utils/axios";
import Pagination from "react-paginate";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const ManageSchedule = () => {
  const [timeValue, setTimeValue] = useState("10:00");
  const [timePicker, setTimePicker] = useState(false);
  const [timeArray, setTimeArray] = useState([]);
  const [dataSchedule, setDataSchedule] = useState([]);
  const [movie, setMovie] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [sort, setSort] = useState("");
  const [idSchedule, setIdSchedule] = useState("");
  const [location, setLocation] = useState([
    "Jakarta",
    "Jogja",
    "Solo",
    "Surabaya",
    "Bogor",
    "Bojonegoro"
  ]);
  const [premiere, setPremiere] = useState([
    { id: 1, premiere: "ebuid", image: ebuid },
    { id: 2, premiere: "hiflix", image: hiflix },
    { id: 3, premiere: "cineOne", image: cineone }
  ]);
  const [form, setForm] = useState({
    movieId: "",
    premiere: "",
    price: "",
    location: "",
    dateStart: "",
    dateEnd: "",
    time: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // console.log(form, "form");

  const handleShowTimePicker = () => {
    if (!timePicker) {
      setTimePicker(true);
    } else {
      setTimePicker(false);
    }
  };

  const handleSelectedSchedule = (data) => {
    setForm({
      ...form,
      movieId: data.movieId,
      premiere: data.premiere,
      price: data.price,
      location: data.location,
      dateStart: data.dateStart.split("T")[0],
      dateEnd: data.dateEnd.split("T")[0],
      time: data.time
    });
    setTimeArray(data.time);
    setIdSchedule(data.id);
  };

  // console.log(idSchedule, "idd");

  // console.log(form, "seke");

  const handleSubmitTime = () => {
    // function tConv24(time24) {
    //   var ts = time24;
    //   var H = +ts.substr(0, 2);
    //   var h = H % 12 || 12;
    //   h = h < 10 ? "0" + h : h; // leading 0 at the left for 1 digit hours
    //   var ampm = H < 12 ? "am" : "pm";
    //   ts = h + ts.substr(2, 3) + ampm;
    //   return ts;
    // }
    setTimeArray([...timeArray, timeValue]);
    setForm({ ...form, time: [...timeArray, timeValue].toString() });
    setTimePicker(false);
  };
  // console.log(timeArray);

  const getDataSchedule = () => {
    axios
      .get(`schedule?page=${page}&dblimit=${limit}&sort=${sort}`)
      .then((res) => {
        // console.log(res, "shcee");
        setDataSchedule(res.data.data);
        setPageInfo(res.data.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataMovie = () => {
    axios
      .get("movie?page=1&limit=100")
      .then((res) => {
        setMovie(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postSchedule = (e) => {
    e.preventDefault();
    axios
      .post("schedule", form)
      .then((res) => {
        // console.log(res);
        getDataSchedule();
        toast.success("Success Post Schedule");
        setForm(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const updateSchedule = () => {
    // console.log(idSchedule, "yoii update");
    // const newForm = { ...form, time: form.time };
    // const newDate = form.time;
    // console.log(newDate, "new");
    // console.log(newForm, "new");
    axios
      .patch(`schedule/${idSchedule}`, form)
      .then((res) => {
        // console.log(res, "resss update");
        toast.success("Success Update Schedule");
        setIdSchedule("");
        getDataSchedule();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
      .then(async (res) => {
        if (res.isConfirmed) {
          await axios.delete(`schedule/${id}`);
          Swal.fire("Deleted!", "Success Delete Schedule !", "success");
          getDataSchedule();
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getDataSchedule();
    getDataMovie();
  }, [page, limit, sort]);

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
              <div className="col-lg-6 col-md-12">
                <div className="schedule__content--desc">
                  <span>Movie</span>
                </div>
                <div className="schedule__content--input">
                  <select name="movieId" value={form.movieId} onChange={handleChange}>
                    <option hidden>Select Movie</option>
                    {movie.map((item, index) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="schedule__content--desc">
                  <span>Price</span>
                </div>
                <div className="schedule__content--input">
                  <input type="number" name="price" onChange={handleChange} value={form.price} />
                </div>
                <div className="schedule__content--desc">
                  <span>Premiere</span>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="schedule__premiere">
                      {premiere.map((item, index) => (
                        <button
                          className={`schedule__premiere--button
                            ${
                              item.premiere === form.premiere ? "schedule__premiere--color" : null
                            }`}
                          key={item.id}
                          onClick={() => setForm({ ...form, premiere: item.premiere })}
                        >
                          <img src={item.image} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="schedule__content--desc">
                  <span>Location</span>
                </div>
                <div className="schedule__content--input">
                  <select name="location" onChange={handleChange} value={form.location}>
                    <option hidden>Select Location</option>
                    {location.map((item, index) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="schedule__content--desc">
                      <span>Date Start</span>
                    </div>
                    <div className="schedule__content--input">
                      <input
                        type="date"
                        placeholder="07/05/2020"
                        name="dateStart"
                        onChange={handleChange}
                        value={form.dateStart}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="schedule__content--desc">
                      <span>Date End</span>
                    </div>
                    <div className="schedule__content--input">
                      <input
                        type="date"
                        placeholder="07/07/2020"
                        name="dateEnd"
                        onChange={handleChange}
                        value={form.dateEnd}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="schedule__content--desc">
                    <span>Time</span>
                  </div>
                  <div className="col-4 schedule__content--time--">
                    <button className="time-picker__click" onClick={handleShowTimePicker}>
                      +
                    </button>
                    {timePicker && (
                      <div className="schedule__content--timepicker">
                        <TimePicker
                          onChange={setTimeValue}
                          value={timeValue}
                          amPmAriaLabel="Select am/pm"
                          name="time"
                        />
                        <button onClick={handleSubmitTime} className="time-picker__button">
                          Ok
                        </button>
                      </div>
                    )}
                    {timeArray?.map((e, i) => {
                      return <p key={i}>{e}</p>;
                    })}
                  </div>
                </div>
                <div className="schedule__content--button">
                  {/* <button>Reset</button> */}
                  <button onClick={idSchedule === "" ? postSchedule : updateSchedule}>
                    {idSchedule === "" ? "Submit" : "Update"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="schedule__data">
            <div className="data--schedule">
              <h1>Data Schedule</h1>
            </div>
            <div className="data--dropdown">
              <select onChange={(e) => setSort(e.target.value)}>
                <option hidden>Sort</option>
                <option value="ASC">A - Z</option>
                <option value="DESC">Z - A</option>
              </select>
              {/* <select>
                <option>Location</option>
              </select>
              <select>
                <option>Movie</option>
              </select> */}
            </div>
          </div>
          <div className="row schedule__item">
            {dataSchedule.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 schedule__layout">
                {/* <div className="schedule__booking"> */}
                <div className="row schedule__info">
                  <div className="col-12 col-lg-6 schedule__content--cinema">
                    <img
                      src={
                        item.premiere === "hiflix"
                          ? hiflix
                          : item.premiere === "ebuid"
                          ? ebuid
                          : cineone
                      }
                      alt="mini"
                    />
                  </div>
                  <div className="col-12 col-lg-6 schedule__content--adress">
                    <h4>{item.premiere}</h4>
                    <span>{item.location}</span>
                  </div>
                  {/* </div> */}
                  <div className="d-flex">
                    {item.time.map((time, index) => (
                      <div key={index} className="col schedule__content--date">
                        <button>{time}</button>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex">
                    <div className="col-6 schedule__content--price">
                      <p>Price</p>
                    </div>
                    <div className="col-6 schedule__content--price">
                      <h6>Rp.{item.price}/seat</h6>
                    </div>
                  </div>
                  <div className="d-flex schedule__update">
                    <div className="schedule__update--button">
                      <button onClick={() => handleSelectedSchedule(item)}>Update</button>
                    </div>
                    <div className="schedule__delete--button">
                      <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Pagination
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageInfo.totalPage}
              onPageChange={(e) => setPage(e.selected + 1)}
              containerClassName={"pagination"}
              disabledClassName={"pagination_disabled"}
              activeClassName={"pagination__active"}
            />
          </div>
        </div>
        <div className="empty"></div>
      </div>
      <Footer />
    </>
  );
};
export default ManageSchedule;
