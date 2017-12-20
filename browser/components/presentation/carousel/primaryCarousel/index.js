import React from 'react';

class PrimaryCarousel extends React.Component {
  render() {
    return (
        <div className="slider">
		    <ul className="slides">
		      <li>
		        <img src="https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="></img>
		        <div className="caption center-align">
		          <h3>This is our big Tagline!</h3>
		          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
		        </div>
		      </li>
		      <li>
		        <img src="https://ununsplash.imgix.net/photo-1414849424631-8b18529a81ca?q=75&fm=jpg&s=0e993004a2f3704e8f2ad5469315ccb7"></img>
		        <div className="caption left-align">
		          <h3>Left Aligned Caption</h3>
		          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
		        </div>
		      </li>
		      <li>
		        <img src="https://ununsplash.imgix.net/uploads/1413259835094dcdeb9d3/6e609595?q=75&fm=jpg&s=6a4fc66161293fc4a43a6ca6f073d1c5"></img>
		        <div className="caption right-align">
		          <h3>Right Aligned Caption</h3>
		          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
		        </div>
		      </li>
		    </ul>
  		</div>
    )
  }
}

PrimaryCarousel.propTypes = {

}

export default PrimaryCarousel;
