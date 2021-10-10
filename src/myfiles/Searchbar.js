import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#242424"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "#ffffff"
  },
  iconButton: {
    padding: 10,
    color: "#fffff",
    fontFamily: '"Lato", sans-serif'
  }
}));

export default function Searchbar(props) {
  const classes = useStyles();
  const [srchInput, setSrchInput] = useState("");

  const handleInput = e => {
    e.persist();
    setSrchInput(e.target.value);
  };

  const handleSubmit = e => {
    e.persist();
    e.preventDefault();
    props.handleFiter(srchInput);
  };

  return (
    <div className="search">
      <Paper component="form" onSubmit={handleSubmit} className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search Ships"
          inputProps={{ "aria-label": "search ships" }}
          onChange={handleInput}
          value={srchInput}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <p>Total Ships : {props.total}</p>
    </div>
  );
}
