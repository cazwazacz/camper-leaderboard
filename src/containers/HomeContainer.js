import React from 'react';
import Home from '../components/Home';
import fccHelpers from '../utils/fccHelpers';

const img = {
  'height': '30px',
  'margin-right': '10px'
};

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}


var HomeContainer = React.createClass({

	getInitialState: function () {
      return {
        names: []
      };
	},
	componentDidMount: function () {
		fccHelpers.getPoints()
          .then(function (info){
            var listAllPoints = info.alltime.map(function(user) {
              return (
                <tr>
                   <td>{info.alltime.indexOf(user) + 1}</td>
                   <td><a href={'https://www.freecodecamp.com/' + user.username}><img src={user.img} alt="profile pic" style={img}/>{user.username}</a></td>
                   <td>{user.alltime}</td>
                   <td>{user.recent}</td>
                </tr>
              );
            })
            this.setState({
              names: listAllPoints
            })
          }.bind(this))
	},
	render: function() {
		return (
			<Home names={this.state.names}/>
		);
	}

});

module.exports = HomeContainer;