import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Card } from "@mui/material";

export default function Notes() {
  const [data, setData] = useState([]);

  const displayNotes = async () =>
    await axios
      .get("http://localhost:8000/notes")
      .then((res) => {
        // console.log(res.data);
        setData([...res.data]);
      })
      .catch((err) => console.log("err", err));

  useEffect(() => {
    displayNotes();
  }, []);

  return (
    <Container>
      <Typography variant="h2" color="textSecondary">
        My Notes
      </Typography>
      {data &&
        data.map((el) => (
          <Card key={el.id} variant="div">
            <Typography variant="h5">{el.title}</Typography>
            <Typography variant="p">{el.details} </Typography>
            <Typography variant="h6">{el.category}</Typography>
          </Card>
        ))}
    </Container>
  );
}
