import React, { useState } from "react";
import { Container, Typography, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyle = makeStyles({
  filed: {
    display: "block",
  },
});

export default function CreateNote() {
  const classes = useStyle();

  //states
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);

  const [details, setDetails] = useState("");
  const [detailsError, setDetailsError] = useState(false);

  //
  const handleSubmit = (e) => {
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
      console.log(title, details);
    }
  };

  return (
    <Container>
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
          className={classes.filed}
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
          className={classes.filed}
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
