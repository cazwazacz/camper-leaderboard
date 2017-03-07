import React, { Component } from 'react';
var styles = require('../styles');

class Main extends Component {
	render() {
		return (
		  <div className="main-container" style={styles.mainDiv}>
            {this.props.children}
		  </div>
		);
	}
}

export default Main;
