import React from 'react';

class About extends React.Component {
  render() {
    return (
    	<div>
		   <h3 id="about_heading" className="center-align">About LVH</h3>
		   <div className="row teal lighten-2">
		       <div className="col s6 card-panel teal lighten-2">
				    <blockquote className="flow-text">
				    	Lloyd Vaughan Holdings (LVH) is the consultancy for Aidan Vaughan.<br></br><br></br>
				    	LVH was established in 2017.
				    	LVH can provide consultancy for financial advisors, private offices, and discretionary fund managers. <br></br><br></br>
				    	Aidan has a network of contacts based upon his lifetime in Financial Services.
				    </blockquote>
	    	    </div>
	    	   <div className="col s6 card-panel teal lighten-2">
	    	   	  <h5 className="left-align">LVH can offer</h5>
	    	   	  <ul className="collapsible" data-collapsible="accordion">
				    <li>
				      <div className="collapsible-header"><i className="material-icons">filter_drama</i>Advise on exit strategies</div>
				      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
				    </li>
				    <li>
				      <div className="collapsible-header"><i className="material-icons">place</i>Investment strategies including discretionary management</div>
				      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
				    </li>
				    <li>
				      <div className="collapsible-header"><i className="material-icons">whatshot</i>Platforms and custodians</div>
				      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
				    </li>
				    <li>
				      <div className="collapsible-header"><i className="material-icons">whatshot</i>Help a business achieve chartered status</div>
				      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
				    </li>
				    <li>
				      <div className="collapsible-header"><i className="material-icons">whatshot</i>Marketing strategies</div>
				      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
				    </li>
				    <li>
				      <div className="collapsible-header"><i className="material-icons">whatshot</i>Fund raising</div>
				      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
				    </li>
	 			 </ul>
	    	   </div>
			</div>
	    </div>
    )
  }
}

About.propTypes = {

}

export default About;
