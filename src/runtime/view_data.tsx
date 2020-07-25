import React, { Component } from "react";
import "../App.css";
import {
  Table,
  Paper,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import Data from "../common_json/Test JSON.json";
import Content from "../common_json/text.json";

class ViewData extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { open: false };
  }
  openDialog: boolean = false;
  activeTimePeriod: any[] = [];
  handleClose = () => {
    this.setState({ open: false });
  };
  handleClick = (id: string) => {
    // debugger;
    Data.members.map((member) => {
      //   debugger;
      if (id === member.id) {
        this.activeTimePeriod = member.activity_periods;
        // console.log("State1", this.activeTimePeriod);
        this.setState({ open: true });
      } else {
        this.setState({ activeTime: ["Active Periods Not Available"] });
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Paper style={{ width: "70%", marginLeft: "15%", marginTop: "5%" }}>
          <Table>
            <TableHead style={{ backgroundColor: "rgb(124, 135, 175)" }}>
              <TableRow>
                <TableCell>{Content.id}</TableCell>
                <TableCell>{Content.realname}</TableCell>
                <TableCell>{Content.tz}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Data.members.map((member) => (
                <TableRow
                  onClick={() => this.handleClick(member.id)}
                  className="tableRow"
                >
                  <TableCell>{member.id}</TableCell>
                  <TableCell>{member.real_name}</TableCell>
                  <TableCell>{member.tz}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title">
            {Content.activityTimeperiod}
          </DialogTitle>
          <DialogContent dividers>
            <Table>
              <TableHead style={{ backgroundColor: "rgb(124, 135, 175)" }}>
                <TableRow>
                  <TableCell>{Content.activitystarttime}</TableCell>
                  <TableCell>{Content.activityendTime}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.activeTimePeriod.map((timePeriod) => (
                  <TableRow>
                    <TableCell>{timePeriod.start_time}</TableCell>
                    <TableCell>{timePeriod.end_time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              {Content.close}
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
export default ViewData;
