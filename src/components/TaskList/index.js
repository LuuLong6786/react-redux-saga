import React, { Component } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TaskItem from "../TaskItem/index";

export default class TaskList extends Component {
  render() {
    const { classes, task, status } = this.props;
    return (
      <Grid item md={4}>
        <Box mt={5} ml={10}>
          <div>{status.label}</div>
        </Box>
        <div>
          {task.map((task) => {
            return <TaskItem task={task} status={status} key={task.id} />;
          })}
        </div>
      </Grid>
    );
  }
}
