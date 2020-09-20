import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { getFirebase } from "../firebase";

import {
  LinearProgress,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    justifyContent: "center",
  },
  progress: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const ViewPost = ({ match, history }) => {
  const classes = useStyles();
  const slug = match.params.slug;
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const postDoesNotExist = !currentPost;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (loading && !currentPost) {
    getFirebase()
      .database()
      .ref()
      .child(`/posts/${slug}`)
      .once("value")
      .then((snapshot) => {
        if (snapshot.val()) {
          setCurrentPost(snapshot.val());
        }
        setLoading(false);
      });
  }

  if (loading) {
    return (
      <div className={classes.progress}>
        <LinearProgress />
      </div>
    );
  }

  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }

  const onEditMode = (i) => {
    var el = document.querySelectorAll("[reveal-on-edit='true']");
    var el2 = document.querySelectorAll("[hide-on-edit='true']");
    for (i = 0; i < el.length; i++) {
      // el[i].classList.toggle("show");
      el[i].toggleAttribute("hidden");
    }
    for (i = 0; i < el.length; i++) {
      // el2[i].classList.toggle("hide");
      el2[i].toggleAttribute("hidden");
    }
  };

  const editPost = () => {
    onEditMode();
  };

  const onEditPost = (e) => {
    e.preventDefault();
    const updatePost = {
      title,
      content,
    };

    getFirebase()
      .database()
      .ref()
      .child(`posts/${slug}`)
      .update(updatePost)
      .then(() => history.push(`/`));
  }

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const deletePost = () => {
    getFirebase()
      .database()
      .ref()
      .child(`posts/${slug}`)
      .remove()
      .then(() => history.push(`/`));
  };

  return (
    <div>
      <Grid container className={classes.grid}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={currentPost.coverImageAlt}
                height="300"
                src={currentPost.coverImage}
                title="Contemplative Reptile"
              />
              <CardContent>
                <div hide-on-edit="true">
                  <Typography gutterBottom variant="h5" component="h2">
                    {currentPost.title}
                  </Typography>
                  <Typography color="textSecondary" component="i">
                    {currentPost.datePretty}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {currentPost.content}
                  </Typography>
                </div>
                <div reveal-on-edit="true" hidden>
                  <form onSubmit={onEditPost}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="title"
                        name="title"
                        variant="outlined"
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        placeholder={currentPost.title}
                        autoFocus
                        onChange={({ target: { value } }) => {
                          setTitle(value);
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
                    placeholder={currentPost.content}
                    onChange={({ target: { value } }) => {
                      setContent(value);
                    }}
                  />
                    </Grid>
                    <div reveal-on-edit="true" hidden>
                      <Button size="small" color="primary" onClick={onEditMode}>
                        Back
                      </Button>
                      &nbsp;
                      <Button size="small" color="primary" type="submit">
                        Save
                      </Button>
                    </div>
                  </Grid>
                  </form>
                </div>
              </CardContent>
              <CardActions>
              <div hide-on-edit="true">
                <Button size="small" color="primary" onClick={editPost}>
                  Edit
                </Button>
                <Button size="small" color="primary" onClick={handleOpenDialog}>
                  Delete
                </Button>
              </div>
            </CardActions>
            </CardActionArea>
            
          </Card>
          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Delete post</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete this post?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                No
              </Button>
              <Button onClick={deletePost} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewPost;
