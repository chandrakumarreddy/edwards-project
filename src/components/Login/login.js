import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
  login: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(10)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "skyblue",
    borderRadius: "5px"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  forgotPassword: {
    textAlign: "center"
  }
}));

export default function SignIn({ history }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    if (email === "email@email.com" && password === "123456") {
      sessionStorage.loggedIn = true;
      history.push("/sites");
    } else {
      setError("Incorrect email or password");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.login}>
        <Avatar className={classes.avatar}>E</Avatar>
        <Typography component="h1" variant="h5">
          Edwards
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Email Address"
            name="email"
            autoComplete="off"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Enter Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Box className={classes.forgotPassword}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Box>
        </form>
      </div>
    </Container>
  );
}
