import React from "react";
import { Redirect, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { AppBar, Container, Toolbar, Typography, Button } from "@material-ui/core";

import Main from "./components/Main";
import Create from "./components/Create";
import ViewPost from "./components/ViewPost";
import Error from "./components/Error";

import { makeStyles } from "@material-ui/core/styles";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FE6B8B",
    },
    secondary: {
      main: "#FF8E53",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  button: {
    color: "#fff"
  }
}));



function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <AppBar position="static">
          <Toolbar>
            <Button className={classes.button} href="/">
              Home
            </Button>
            <Button className={classes.button} href="/create">
              Create
            </Button>
          </Toolbar>
        </AppBar>
        <br></br>
        <Router>
          <main>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/create" component={Create} />
              <Route path="/404" component={Error} />
              <Route path="/:slug" component={ViewPost} />
            </Switch>
          </main>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
