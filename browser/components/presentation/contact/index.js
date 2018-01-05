import React from 'react';

class Contact extends React.Component {
  render() {
    return (
   	<div>
	  <div>
	    <h3 id="contact_lvh" className="center-align">Contact LVH</h3>
	  </div>
    	<div className="theme-background">
    		<div className="col s6 contact-div">
    			    <blockquote className="flow-text">We are here to help you. For all enquiries, please email enquiries@lvholdings.co.uk or you can reach us over
    			    phone on 07495392902<br></br>
    			    Alternatively, please fill out the enquiries box below, LVH will aim to get back to you as soon as possible</blockquote>
    		</div>
        <div className="contact-div contact-form">
		    <form className="col s6">
		      <div className="row">
		        <div className="input-field col s12">
		          <i className="material-icons prefix">account_circle</i>
		          <input id="name" type="text" className="validate"></input>
		          <label for="name">Full Name</label>
		        </div>
		      </div>
		      <div className="row">
		        <div className="input-field col s12">
		          <i className="material-icons prefix">contact_mail</i>
		          <input id="email" type="email" className="validate"></input>
		          <label for="email">Email</label>
		        </div>
		      </div>
		      <div className="row">
		        <div className="input-field col s12">
		          <i className="material-icons prefix">phone_in_talk</i>
		          <input id="phone" type="tel" className="validate"></input>
		          <label for="phone">Phone Number</label>
		        </div>
		      </div>
		      <div className="row">
        		<div className="input-field col s12">
        		    <i className="material-icons prefix">mode_edit</i>
          			<textarea id="textarea1" className="materialize-textarea"></textarea>
          			<label for="textarea1">Enquiry</label>
        	  	</div>
      		  </div>
      		  <div className="row center-align">
	      		  <button className="btn waves-effect waves-light" id="send_email">Submit
	    			<i className="material-icons right">send</i>
	  			  </button>
	  		  </div>
		    </form>
        </div>
  		</div>
  	</div>
    )
  }
}

Contact.propTypes = {

}

export default Contact;
