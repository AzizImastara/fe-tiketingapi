import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);
  // index 0 = untuk pemanggilan data di jsx
  // index 1 = untuk proses manipulasi data di index 0

  const increaseCounter = () => {
    setCount(count + 1);
  };
  const decreaseCounter = () => {
    setCount(count - 1);
  };

  // componentDidMonth
  useEffect(() => {
    console.log("Didmonth is running");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("Didupdate is running");
  }, [count]);

  // componentWillunmonth
  useEffect(() => {
    return () => {
      console.log("Willunmonth is running");
    };
  }, []);

  return (
    <Container className="text-center">
      <h2>Counter App</h2>
      <h3>{count}</h3>
      <Button variant="primary" onClick={decreaseCounter}>
        -
      </Button>
      <Button variant="secondary" className="mx-2">
        RESET
      </Button>
      <Button variant="primary" onClick={increaseCounter}>
        +
      </Button>
    </Container>
  );
};

export default Counter;
