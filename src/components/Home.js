var React = require('react');
var Link = require('react-router').Link;

function Home (props) {
	return (
      <div>
        <table className="table table-responsive table-hover">
                <thead>
                <tr>
                    <th>
                        Rank
                    </th>
                    <th>
                        Username
                    </th>
                    <th>
                        <Link to='/'>All-time</Link>
                    </th>
                    <th>
                        <Link to='recent'>Recent</Link>
                    </th>
                </tr>
                </thead>
            <tbody>    
                {props.names}
            </tbody> 
        </table>
      </div>
	)
}

module.exports = Home;
