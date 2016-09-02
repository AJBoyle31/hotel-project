import React, {Component} from 'react';


class Contact extends Component {
    handleSubmit(event){
        let first = event.target.firstname.value;
        let last = event.target.lastname.value;
        let email = event.target.email.value;
        let mess = event.target.message.value;
        if (first && last && email && mess){
            var reply = "Thank you " + event.target.firstname.value + ", we will get back to you shortly!";
            alert(reply);
            event.preventDefault();
        } else {
            alert("Please complete the form");
            event.preventDefault();
        }
        
    }
    render(){
        return (
            <div id='contactus'>
            <h2 id='contactTitle'>We'd love to hear your thoughts!</h2>
            
            <form id='contactform' onSubmit={this.handleSubmit.bind(this)}>
                <h4 className="contactId">First Name:</h4>
                <input type='text' name='firstname' id='firstname'/>
                <br/>
                <h4 className="contactId">Last Name:</h4>
                <input type='text' name='lastname' id='lastname'/>
                <br/>
                <h4 className="contactId">Email Address:</h4>
                <input type='text' name='email' id='email'/>
                <br/>
                <h4 className="contactId">What's on your mind?</h4>
                <textarea type='text' name='message' id='message' form='contactform' rows='8' cols='75'/>
                <br/>
                <input type='submit' id='submitbut' value='Send my message!'/>
            </form>
            </div>
        );
    }
}

export default Contact;