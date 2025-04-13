import React, {
  useState,
  useReducer,
  useEffect,
  useRef,
  useContext,
  createContext,
} from "react";
import PropTypes from "prop-types";
import "./style.css";
import "./App.css"; 

const MessageContext = createContext();

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: "Ready" };
  }

  componentDidMount() {
    this.setState({ msg: "Mounted!" });
  }

  componentDidUpdate() {
    console.log("Updated!");
  }

  componentWillUnmount() {
    console.log("Unmounted!");
  }

  render() {
    return <p>Lifecycle Status: {this.state.msg}</p>;
  }
}

const Header = ({ title }) => <h1>{title}</h1>;
Header.propTypes = { title: PropTypes.string.isRequired };

const StyledButton = () => {
  const inlineStyle = { backgroundColor: "orange", padding: "10px" };
  return (
    <>
      <style>
        {`
        .internal-button {
          border: none;
          font-size: 16px;
          margin: 5px;
        }
        `}
      </style>
      <button className="internal-button external-button" style={inlineStyle}>
        Mixed CSS Button
      </button>
    </>
  );
};

const FormComponent = () => {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter something"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
      <p>Typed: {text}</p>
    </form>
  );
};

const ContextDisplay = () => {
  const msg = useContext(MessageContext);
  return <p>{msg}</p>;
};

const App = () => {
  const [joke, setJoke] = useState("");
  const [count, dispatch] = useReducer(counterReducer, 0);

  useEffect(() => {
    console.log("App Mounted");
  }, []);

  const getJoke = async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    setJoke(`${data.setup} - ${data.punchline}`);
  };

  return (
    <MessageContext.Provider value="This is from Context!">
      <div className="app">
        <Header title="React All-in-One Demo" />
        <StyledButton />
        <button onClick={getJoke}>Fetch Joke</button>
        <p>{joke}</p>
        <h3>Reducer Counter</h3>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <FormComponent />
        <LifecycleDemo />
        <ContextDisplay />
      </div>
    </MessageContext.Provider>
  );
};

export default App;
