import React, { Component } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import Icon from "@mui/material/Icon";
import DeleteIcon from "@mui/icons-material/Delete";

export default class TaskItem extends Component {
  render() {
    const { task, status } = this.props;
    const { id, title } = task;
    return (
      <Card key={id}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small"></Button>
          <Fab color="primary" aria-label="edit" fontSize="small">
            <Icon>
              <EditIcon />
            </Icon>
          </Fab>
          <Fab color="error" aria-label="delete" fontSize="small">
            <Icon>
              <DeleteIcon />
            </Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}
