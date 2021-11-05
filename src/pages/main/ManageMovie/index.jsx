import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./index.css";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Pagination from "react-paginate";
import CardUpdate from "../../../components/CardUpdate";
import axios from "../../../utils/axios";

const ManageMovie = () => {
  let history = useHistory();

  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [pageInfo, setPageInfo] = useState({});
  const [imagesPreview, setImagePreview] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const onFileChange = (e) => {
    setDetail((oldValue) => {
      return { ...oldValue, image: e.target.files[0] };
    });
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const [isUpdate, setIsUpdate] = useState(false);

  const postMovie = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", detail.name);
    data.append("category", detail.category);
    data.append("releaseDate", detail.releaseDate);
    data.append("cast", detail.cast);
    data.append("director", detail.director);
    data.append("duration", detail.duration);
    data.append("synopsis", detail.synopsis);
    data.append("image", detail.image);
    await axios
      .post("movie?type=movie", data)
      .then((res) => {
        alert("Post Movie Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = (detailMovie) => {
    setDetail({ ...detailMovie, releaseDate: detailMovie.releaseDate.slice(0, 10) });
    window.scrollTo(0, 0);
    setIsUpdate(true);
  };

  const handleDelete = (id) => {
    axios
      .delete(`movie/${id}`)
      .then((res) => {
        alert("Delete Movie Success");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const updateMovie = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", detail.name);
    data.append("category", detail.category);
    data.append("releaseDate", detail.releaseDate);
    data.append("cast", detail.cast);
    data.append("director", detail.director);
    data.append("duration", detail.duration);
    data.append("synopsis", detail.synopsis);
    data.append("image", detail.image);
    // console.log(detail);
    await axios
      .patch(`movie/${detail.id}?type=movie`, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then((res) => {
        // console.log(res);
        setIsUpdate(false);
        alert("Update Movie Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(sort);
    axios
      .get(`movie?page=${page}&limit=${limit}&search=${search}&sort=${sort}`)
      .then((res) => {
        setData(res.data.data);
        setPageInfo(res.data.pagination);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [page, limit, search, sort]);

  const onChangeInput = (e) => {
    setDetail((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };

  // handleReset = (event) => {
  //   event.preventDefault();
  //   console.log("Submit Reset");
  // };

  return (
    <>
      <Navs />
      <div className="profile__bg">
        <div className="container">
          <div className="profile__header">
            <h1>Form Movie</h1>
          </div>
          <form
            onSubmit={isUpdate ? updateMovie : postMovie}
            className="profile"
            encType="multipart/form-data"
          >
            <div className="row">
              <div className="col-2">
                <div className="profile__border">
                  <img
                    src={
                      imagesPreview
                        ? imagesPreview
                        : detail.image
                        ? `http://localhost:3001/uploads/movie/${detail.image}`
                        : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                    }
                  />
                </div>
                <input type="file" name="image" onChange={(e) => onFileChange(e)} />
              </div>
              <div className="col-5">
                <div className="profile__content--desc">
                  <span>Movie Name</span>
                </div>
                <div className="profile__content--input">
                  <input type="text" value={detail.name} name="name" onChange={onChangeInput} />
                </div>
                <div className="profile__content--desc">
                  <span>Director</span>
                </div>
                <div className="profile__content--input">
                  <input
                    type="text"
                    value={detail.director}
                    name="director"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="profile__content--desc">
                  <span>Release date</span>
                </div>
                <div className="profile__content--input">
                  <input
                    type="date"
                    value={detail.releaseDate}
                    name="releaseDate"
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <div className="col-5">
                <div className="profile__content--desc">
                  <span>Category</span>
                </div>
                <div className="profile__content--input">
                  <input
                    type="text"
                    value={detail.category}
                    name="category"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="profile__content--desc">
                  <span>Cast</span>
                </div>
                <div className="profile__content--input">
                  <input type="text" value={detail.cast} name="cast" onChange={onChangeInput} />
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="profile__content--desc">
                      <span>Duration</span>
                    </div>
                    <div className="profile__content--input">
                      <input
                        type="text"
                        value={detail.duration}
                        name="duration"
                        onChange={onChangeInput}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile__content--synopsis">
              <span>Synopsis</span>
              <textarea
                name="synopsis"
                cols="100"
                rows="1"
                value={detail.synopsis}
                onChange={onChangeInput}
              ></textarea>
            </div>
            <div className="profile__content--button">
              <button className="btn btn-light text-primary">Reset</button>
              <button className="btn btn-primary" type="submit">
                {isUpdate ? "Update" : "Submit"}
              </button>
            </div>
          </form>
          <div className="movie__data">
            <div className="data--movie">
              <h1>Data Schedule</h1>
            </div>
            <div className="data--dropdown--movie">
              <select onChange={(e) => setSort(e.target.value)}>
                <option>Sort</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </select>
              <input
                type="text"
                placeholder="Search Movie Name..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="profile">
            <div className="row profile__movie">
              {data &&
                data.map((item) => (
                  <div className="col-md-3" key={item.id}>
                    <CardUpdate
                      name={item.name}
                      category={item.category}
                      image={item.image}
                      handleUpdate={() => handleUpdate(item)}
                      handleDelete={() => handleDelete(item.id)}
                    />
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
      </div>

      <Footer />
    </>
  );
};
export default ManageMovie;
