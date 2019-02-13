import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

class ConnectionWindow extends Component {
  static propTypes = {
    connection: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }

  componentDidMount() {
    console.log(`componentDidMount ${this.props.connection.name}`)
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount ${this.props.connection.name}`)
  }

  render() {
    const style = {
      paddingLeft: 80,
      paddingTop: 20
    }
    const { connection } = this.props;

    return (
      <Typography component="div" style={style}>
        <span>{connection.name}</span>
      </Typography>
    );
  }
}

export default ConnectionWindow;