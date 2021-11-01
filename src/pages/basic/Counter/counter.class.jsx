import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { increaseCounter } from "../../../stores/actions/counter";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increaseCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decreaseCounter = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  ResetCounter = () => {
    this.setState({
      count: 0
    });
  };

  componentDidMount() {
    // console.log("DidMonth is running");
    // console.log(this.props.counter);
  }

  componentDidUpdate() {
    // console.log("didUpdate is run");
  }

  componentWillUnmount() {
    // console.log("willunmonth");
  }

  render() {
    const { count } = this.props.counter;
    return (
      <Container className="text-center">
        <h2>Counter App</h2>
        <h3>{count}</h3>
        <Button variant="primary" onClick={this.decreaseCounter}>
          -
        </Button>
        <Button variant="secondary" className="mx-2" onClick={this.ResetCounter}>
          RESET
        </Button>
        <Button variant="primary" onClick={this.props.increaseCounter}>
          +
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = {
  increaseCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
