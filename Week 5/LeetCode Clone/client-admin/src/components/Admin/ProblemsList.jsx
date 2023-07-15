/* eslint-disable react/prop-types */
import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Courses() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/problems", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProblems(res.data.problems);
      });
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {problems.map((p) => {
        return <Problem problem={p} key={p.title} />;
      })}
    </div>
  );
}

export function Problem({ problem }) {
  const navigate = useNavigate();

  return (
    <Card
      style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20,
      }}
    >
      <Typography textAlign={"center"} variant="h5">
        {problem.title}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle1">
        {problem.description}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle1">
        <span
          style={{
            backgroundColor: "lightgreen",
            padding: 5,
            borderRadius: 5,
            color: "white",
            textAlign: "center",
          }}
        >
          {" "}
          {problem.difficulty}
        </span>
      </Typography>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/problem/" + problem._id);
          }}
        >
          Edit
        </Button>
      </div>
    </Card>
  );
}

export default Courses;
