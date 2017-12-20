import React from 'react';

class SecondaryCarousel extends React.Component {
  render() {
    return (
  <div className="carousel carousel-slider">
    <a className="carousel-item" href="#one!"><img src="https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="></img></a>
    <a className="carousel-item" href="#two!"><img src="https://ununsplash.imgix.net/photo-1414849424631-8b18529a81ca?q=75&fm=jpg&s=0e993004a2f3704e8f2ad5469315ccb7"></img></a>
    <a className="carousel-item" href="#three!"><img src="https://ununsplash.imgix.net/uploads/1413259835094dcdeb9d3/6e609595?q=75&fm=jpg&s=6a4fc66161293fc4a43a6ca6f073d1c5"></img></a>
  </div>
    )
  }
}

SecondaryCarousel.propTypes = {

}

export default SecondaryCarousel;
