import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import withTheme from '../tools/withTheme';
import ConnectionWindow from './ConnectionWindow';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentConnection: 0,
      connections: []
    };
  }

  handleChange = (event, value) => {
    this.setState({ currentConnection: value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Tabs
                value={this.state.currentConnection}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary">
                {this.state.connections.map(con => (
                  <Tab key={con.id} label={con.name} />
                ))}
              </Tabs>
              <Fab size="small" color="primary" aria-label="Add" className={classes.fab}>
                <AddIcon />
              </Fab>
            </Toolbar>
          </AppBar>
          <Typography component="div">
            {this.state.connections.map((con, index) => (
              <Typography key={con.id} component="div"
                style={{ display: this.state.currentConnection !== index && 'none' }}>
                <ConnectionWindow
                  key={con.id}
                  connection={con} />
              </Typography>
            ))}
          </Typography>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default withTheme(withStyles(styles)(Main));