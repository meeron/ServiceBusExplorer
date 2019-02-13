import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

export default class AddConnectionDialog extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onConnect: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      connectionString: ""
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleConnectionStringChange = (event) => {
    this.setState({ connectionString: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.formEl.checkValidity()) {
      this.props.onConnect(this.state);
    }
  }

  render() {
    return (
      <Dialog
        open={true}
        onClose={this.props.onClose}>
        <DialogTitle >New connection</DialogTitle>
        <DialogContent>
          <form ref={form => this.formEl = form}
            noValidate
            autoComplete="off"
            onSubmit={this.handleSubmit}>
            <TextField
              required
              autoFocus
              margin="dense"
              id="connectionName"
              label="Name"
              type="text"
              fullWidth
              value={this.state.name}
              onChange={this.handleNameChange}

            />
            <TextField
              required
              label="Connection string"
              multiline
              rows="4"
              margin="normal"
              variant="outlined"
              fullWidth
              value={this.state.connectionString}
              onChange={this.handleConnectionStringChange}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
            </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Connect
            </Button>
        </DialogActions>
      </Dialog>
    );
  }
}