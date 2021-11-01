import React, { Component } from "react";
import Navs from "../../../components/Navbar";
import Card from "../../../components/Card";
import axios from "../../../utils/axios";
import Pagination from "react-paginate";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      limit: 6,
      pageInfo: {},
      form: {
        name: "",
        category: "",
        releaseDate: "",
        cast: "",
        director: "",
        duration: "",
        synopsis: "",
        image: null
      }
    };
  }

  componentDidMount() {
    this.getDataMovie();
  }

  changeFile = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.files[0]
      }
    });
  };

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.form);
    const formData = new FormData();

    for (const data in this.state.form) {
      formData.append(data, this.state.form[data]);
    }
    // for (const pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
  };

  setUpdate = () => {
    console.log("setUpdate");
  };

  handleUpdate = () => {
    console.log("handleUpdate");
  };

  handleDelete = () => {
    console.log("handleDelete");
  };

  getDataMovie = () => {
    axios
      .get(`movie?page=${this.state.page}&limit=${this.state.limit}`)
      .then((res) => {
        // console.log(res.data.data);
        this.setState({
          data: res.data.data,
          pageInfo: res.data.pagination
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  handlePagination = (event) => {
    // console.log(event.selected + 1);
    const selectedPage = event.selected + 1;
    this.setState(
      {
        page: selectedPage
      },
      () => {
        this.getDataMovie();
      }
    );
  };

  handleDetail = (data) => {
    // 1 = bisa menggunakan urlParams
    // this.props.history.push(`/basic-detail?movieId=${data}`);
    // 2 = bisa digunakan jika tidak mau ditampilkan di url
    // this.props.history.push("/basic-detail", { movieId: data });
    // 3 =
    this.props.history.push(`/basic-detail/${data}`);
    // console.log(data);
  };

  render() {
    // console.log(this.state.data);
    const { data, pageInfo } = this.state;
    return (
      <>
        <div className="container text-center">
          <h1>Home</h1>
          <Navs />
          <hr />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="input name ..."
              name="name"
              onChange={(event) => this.changeText(event)}
            />
            <br />
            <input
              type="text"
              placeholder="input category ..."
              name="category"
              onChange={(event) => this.changeText(event)}
            />
            <br />
            <input type="date" name="releaseDate" onChange={(event) => this.changeText(event)} />
            <br />
            <input
              type="text"
              placeholder="input cast ..."
              name="cast"
              onChange={(event) => this.changeText(event)}
            />
            <br />
            <input
              type="text"
              placeholder="input director ..."
              name="director"
              onChange={(event) => this.changeText(event)}
            />
            <br />
            <input
              type="text"
              placeholder="input duration ..."
              name="duration"
              onChange={(event) => this.changeText(event)}
            />
            <input
              type="text"
              placeholder="input synopsis ..."
              name="synopsis"
              onChange={(event) => this.changeText(event)}
            />
            <br />
            <input type="file" name="image" onChange={(event) => this.changeFile(event)} />
            <button onSubmit={this.handleSubmit}>submit</button>
          </form>
          <hr />
          <div className="row">
            {data.map((item) => (
              <div className="col-md-4" key={item.id}>
                <Card data={item} handleDetail={this.handleDetail} />
              </div>
            ))}
          </div>
          <Pagination
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageInfo.totalPage}
            onPageChange={this.handlePagination}
            containerClassName={"pagination"}
            disabledClassName={"pagination_disabled"}
            activeClassName={"pagination__active"}
          />
        </div>
      </>
    );
  }
}

export default Home;
