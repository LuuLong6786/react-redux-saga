import React, { Component } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { STATUSES } from "../../constants/index";

import TaskList from "../../components/TaskList/index";

const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read material UI book",
    status: 0,
  },
  {
    id: 2,
    title: "Play football",
    description: "Play Hard, kill hard",
    status: 2,
  },
  {
    id: 3,
    title: "Swimming",
    description: "Be careful to diving!",
    status: 1,
  },
];

class TaskBoard extends Component {
  renderBoard() {
    let xtml = null;
    xtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value
          );
          return <TaskList task={taskFiltered} status={status} key={index} />;
        })}
      </Grid>
    );
    return xtml;
  }
  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          <AddIcon /> Add new work
        </Button>
        {this.renderBoard()}
      </div>
    );
  }
}
export default TaskBoard;
