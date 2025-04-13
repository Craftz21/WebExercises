import React, { useState } from "react";


const WithoutJSX = () => {
  return React.createElement("h1", null, "Hello, React!");
};


const WithJSX = () => {
  return <h1>Hello, React!</h1>;
};


const MessageComponent = () => {
  const message = "Welcome to React!";
  return <h1>{message}</h1>;
};


const FruitList = () => {
  const fruits = ["Apple", "Banana", "Orange"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};


const StyledMessage = () => {
  const style = { color: "blue", fontSize: "20px", fontWeight: "bold" };
  return <p style={style}>This is a styled message!</p>;
};


const SumOfSquares = ({ num1, num2 }) => {
  const sum = num1 ** 2 + num2 ** 2;
  return <p>Sum of squares: {sum}</p>;
};


const Greeting = ({ isMorning }) => {
  return <h1>{isMorning ? "Good Morning" : "Good Evening"}</h1>;
};


const CurrentDay = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  return <p>Today is {days[today]}.</p>;
};


const PrimeCheck = ({ number }) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return <p>{number} is {isPrime(number) ? "a Prime Number" : "not a Prime Number"}</p>;
};


class TemperatureConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: "", scale: "C" };
  }

  handleChange = (event) => {
    this.setState({ temp: event.target.value });
  };

  convertTemperature = () => {
    const { temp, scale } = this.state;
    if (temp === "") return "";
    const value = parseFloat(temp);
    return scale === "C"
      ? (value * 9) / 5 + 32 + "°F"
      : ((value - 32) * 5) / 9 + "°C";
  };

  toggleScale = () => {
    this.setState((prevState) => ({ scale: prevState.scale === "C" ? "F" : "C" }));
  };

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.temp}
          onChange={this.handleChange}
          placeholder="Enter temperature"
        />
        <button onClick={this.toggleScale}>Convert to {this.state.scale === "C" ? "Fahrenheit" : "Celsius"}</button>
        <p>Converted: {this.convertTemperature()}</p>
      </div>
    );
  }
}


const ReverseString = ({ text }) => {
  const reversed = text.split("").reverse().join("");
  const isPalindrome = text.toLowerCase() === reversed.toLowerCase();
  return (
    <p>
      Reverse: {reversed} | {isPalindrome ? "Palindrome" : "Not a Palindrome"}
    </p>
  );
};


const RandomNumber = () => {
  const [number, setNumber] = useState(null);

  return (
    <div>
      <button onClick={() => setNumber(Math.floor(Math.random() * 100) + 1)}>
        Generate Random Number
      </button>
      {number !== null && <p>Random Number: {number}</p>}
    </div>
  );
};


const LeapYearCheck = ({ year }) => {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return <p>{year} is {isLeapYear ? "a Leap Year" : "not a Leap Year"}</p>;
};


class UserGreeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.firstName} {this.props.lastName}!</h1>;
  }
}


export default function App() {
  return (
    <div>
      <WithoutJSX />
      <WithJSX />
      <MessageComponent />
      <FruitList />
      <StyledMessage />
      <SumOfSquares num1={3} num2={4} />
      <Greeting isMorning={true} />
      <CurrentDay />
      <PrimeCheck number={17} />
      <TemperatureConverter />
      <ReverseString text="React" />
      <RandomNumber />
      <LeapYearCheck year={2024} />
      <UserGreeting firstName="Dev" lastName="Pradhan" />
    </div>
  );
}
