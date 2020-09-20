import React, { useState } from "react";

import {
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { getFirebase } from "../firebase";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
}));

const Create = ({ history }) => {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [coverImageAlt, setCoverImageAlt] = useState("");
  const [content, setContent] = useState("");

  const generateDate = () => {
    const now = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };

    const year = now.getFullYear();

    let month = now.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }

    const day = now.getDate();
    if (day < 10) {
      day = `0${day}`;
    }

    return {
      formatted: `${year}-${month}-${day}`,
      pretty: now.toLocaleDateString("en-US", options)
    };
  };

  const createPost = (e) => {
    e.preventDefault();
    const date = generateDate();
    const newPost = {
      title,
      dateFormatted: date.formatted,
      datePretty: date.pretty,
      slug,
      coverImage,
      coverImageAlt,
      content
    };
    getFirebase()
      .database()
      .ref()
      .child(`posts/${slug}`)
      .set(newPost)
      .then(() => 
        history.push(`/`)
        );
  };
  
  return (
    <React.Fragment>
      <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  color="primary"
                >
                  Add a post
                </Typography>
                <form className={classes.form} onSubmit={createPost}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                      <TextField
                        autoComplete="title"
                        name="title"
                        variant="outlined"
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        autoFocus
                        value={title}
                        onChange={({ target: { value } }) => {
                          setTitle(value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <TextField
                        autoComplete="slug"
                        name="slug"
                        variant="outlined"
                        required
                        fullWidth
                        id="slug"
                        label="Slug"
                        autoFocus
                        value={slug}
                        onChange={({ target: { value } }) => {
                          setSlug(value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <TextField
                        autoComplete="coverImage"
                        name="coverImage"
                        variant="outlined"
                        fullWidth
                        id="coverImage"
                        label="Image URL"
                        autoFocus
                        placeholder="https://placekitten.com/g/300/700"
                        onChange={({ target: { value } }) => {
                          setCoverImage(value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <TextField
                        autoComplete="coverImageAlt"
                        name="coverImageAlt"
                        variant="outlined"
                        required
                        fullWidth
                        id="coverImageAlt"
                        label="Image Alt"
                        autoFocus
                        onChange={({ target: { value } }) => {
                          setCoverImageAlt(value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="content"
                        name="content"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                        fullWidth
                        id="content"
                        label="Blog Content"
                        autoFocus
                        onChange={({ target: { value } }) => {
                          setContent(value);
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Save
                </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </React.Fragment>
  );
};

export default Create;
