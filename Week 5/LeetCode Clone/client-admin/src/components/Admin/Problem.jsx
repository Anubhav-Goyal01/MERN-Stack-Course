/* eslint-disable react/prop-types */
import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Problem() {
  let { problemId } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/problems/" + problemId, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProblem(res.data.problem);
      });
  }, [problemId]);

  if (!problem) {
    return (
      <div
        style={{
          height: "100vh",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        Loading....
      </div>
    );
  }

  return (
    <div>
      <GrayTopper title={problem.title} />
      <Grid container>
        <Grid item lg={12} md={12} sm={12}>
          <UpdateCard problem={problem} setProblem={setProblem} />
        </Grid>
      </Grid>
    </div>
  );
}

function GrayTopper({ title }) {
  return (
    <div
      style={{
        height: 250,
        background: "#212121",
        top: 0,
        width: "100vw",
        zIndex: 0,
        marginBottom: -250,
      }}
    >
      <div
        style={{
          height: 250,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <Typography
            style={{ color: "white", fontWeight: 600 }}
            variant="h3"
            textAlign={"center"}
          >
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
}

function UpdateCard({ problem, setProblem }) {
  const [title, setTitle] = useState(problem.title);
  const [description, setDescription] = useState(problem.description);
  const [difficulty, setDifficulty] = useState(problem.difficulty);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card varint={"outlined"} style={{ maxWidth: 600, marginTop: 200 }}>
        <div style={{ padding: 20 }}>
          <Typography style={{ marginBottom: 20, textAlign: "center" }}>
            Update Problem details
          </Typography>
          <TextField
            value={title}
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            fullWidth={true}
            label="Title"
            variant="outlined"
          />

          <TextField
            value={description}
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            fullWidth={true}
            label="Description"
            variant="outlined"
          />
          <Select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            fullWidth={true}
            style={{ marginBottom: 10 }}
          >
            <MenuItem value={"Easy"}>Easy</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Hard"}>Hard</MenuItem>
          </Select>

          <Button
            variant="contained"
            onClick={async () => {
              axios.put(
                "http://localhost:3000/admin/problems/" + problem._id,
                {
                  title: title,
                  description: description,
                  difficulty: difficulty,
                },
                {
                  headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );
              let updatedProblem = {
                _id: problem._id,
                title: title,
                description: description,
                difficulty: difficulty,
              };
              setProblem(updatedProblem);
            }}
          >
            Update Problem
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Problem;
