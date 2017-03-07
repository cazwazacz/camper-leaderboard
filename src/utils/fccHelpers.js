import axios from 'axios';

var helpers = {

	getPoints: function () {
		return axios.all([
          axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent'),
          axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
		]).then(axios.spread(function (recent, alltime) {
			return {
				recent: recent.data,
				alltime: alltime.data
			}

		}))
	}

  // getAllPoints: function () {
  // 	//fetch data from fcc api
  // 	return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
  // 	.then(function (response) {
  // 		//console.log(response);
  // 		return (response.data);
  // 	})
  // 	.catch(function (error) {
  // 		console.log(error);
  // 	})
  // }

}

module.exports = helpers;