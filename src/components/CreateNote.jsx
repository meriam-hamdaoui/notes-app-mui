import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

export default function CreateNote() {
  //states
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);

  const [details, setDetails] = useState("");
  const [detailsError, setDetailsError] = useState(false);

  const [category, setCategory] = useState("todos");

  const navigate = useNavigate();

  //
  const handleSubmit = async (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      // console.log(title, details, category);
      await axios
        .post(
          "http://localhost:8000/notes",
          {
            id: nanoid(),
            title: title,
            details: details,
            category: category,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          // console.log("response", res);
          const { title, details, category } = res.data;
          setDetails(title);
          setDetailsError(details);
          setCategory(category);
          navigate("/", { replace: true });
        })
        .catch((err) => console.error("error", err));
    }
  };

  return (
    <Container size="sm">
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom // add w slight margin bottom to the title
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <TextField
          name="title"
          sx={{ marginTop: 2, marginBottom: 2 }}
          variant="outlined"
          label="Note Title"
          required
          color="secondary"
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />
        <TextField
          name="details"
          sx={{ marginTop: 2, marginBottom: 2 }}
          variant="outlined"
          label="Details"
          required
          color="secondary"
          fullWidth
          multiline
          rows={4}
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
        />
        <FormControl>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="money"
              control={<Radio color="secondary" />}
              label="Money"
            />
            <FormControlLabel
              value="todos"
              control={<Radio color="secondary" />}
              label="Todos"
            />
            <FormControlLabel
              value="reminders"
              control={<Radio color="secondary" />}
              label="Reminders"
            />
            <FormControlLabel
              value="work"
              control={<Radio color="secondary" />}
              label="Work"
            />
          </RadioGroup>
        </FormControl>
        <br />
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          submit
        </Button>
      </form>
    </Container>
  );
}
