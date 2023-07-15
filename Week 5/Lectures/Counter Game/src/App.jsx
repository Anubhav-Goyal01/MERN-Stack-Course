// import { useState } from "react";
import "./App.css";
import { Button, Card, Typography } from "@mui/material";
import { useRecoilValue, atom, useSetRecoilState, RecoilRoot } from "recoil";
// import { createContext } from "react";
// import { useContext } from "react";

// const CountContext = createContext(); // contexts helps in reducing the number of props passed down to child components but it does help in stopping re-rendering of child components

function App() {
  // const [count, setCount] = useState(0);

  return (
    // <CountContext.Provider value={{ count, setCount }}>
    <RecoilRoot>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            padding: 20,
            width: 500,
          }}
        >
          <Typography variant="h5">Counter Game</Typography>
          <br />
          <Buttons />
          <CountComponent />
        </Card>
      </div>
    </RecoilRoot>
    // </CountContext.Provider>
  );
}

function Buttons() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Increase />
      <Decrease />
    </div>
  );
}

function Increase() {
  // const { count, setCount } = useContext(CountContext);
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Increase Counter
      </Button>
    </div>
  );
}

function Decrease() {
  // const { count, setCount } = useContext(CountContext);
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >
        Decrease Counter
      </Button>
    </div>
  );
}

function CountComponent() {
  // const { count } = useContext(CountContext);
  const count = useRecoilValue(countState);
  return (
    <div>
      <Typography variant="h5" textAlign={"center"}>
        {count}
      </Typography>
    </div>
  );
}

export default App;

const countState = atom({
  key: "countState",
  default: 0,
});
