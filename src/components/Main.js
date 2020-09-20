import React, { useState } from "react";

import { getFirebase } from "../firebase";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  LinearProgress,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    // maxWidth: 345,
    // height: "100%"
  },
  progress: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  grid: {
    flexGrow: 1,
  },
  pagination: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  }
}));

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  const classes = useStyles();

  if (loading && !blogPosts.length) {
    getFirebase()
      .database()
      .ref("/posts")
      .orderByChild("datePretty")
      .once("value")
      .then((snapshot) => {
        let posts = [];
        const snapshotVal = snapshot.val();
        for (let slug in snapshotVal) {
          posts.push(snapshotVal[slug]);
        }

        const newestFirst = posts.reverse();
        setBlogPosts(newestFirst);
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

  return (
    <React.Fragment>
      <Grid container className={classes.grid} spacing={2}>
        {blogPosts.map((blogPost) => (
          <Grid item xs={12} md={4} lg={4} key={blogPost.slug}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={blogPost.coverImageAlt}
                  height="200"
                  image={blogPost.coverImage}
                  title={blogPost.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {blogPost.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {blogPost.content}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    {blogPost.datePretty}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={`/${blogPost.slug}`}>
                  Read more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        
      </Grid>
    </React.Fragment>
  );
};

export default Main;
