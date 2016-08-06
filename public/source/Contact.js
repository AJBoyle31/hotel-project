import React, {Component} from 'react';


class Contact extends Component {
    handleSubmit(event){
        var reply = "Thank you " + event.target.firstname.value + ", we will get back to you shortly!";
        alert(reply);
        event.preventDefault();
    }
    render(){
        return (
            <div id='contactus'>
            <h2 id='contactTitle'>We'd love to hear your thoughts!</h2>
            
            <form id='contactform' onSubmit={this.handleSubmit.bind(this)}>
                <h4>First Name:</h4>
                <input type='text' name='firstname' id='firstname'/>
                <br/>
                <h4>Last Name:</h4>
                <input type='text' name='lastname' id='lastname'/>
                <br/>
                <h4>Email Address:</h4>
                <input type='text' name='email' id='email'/>
                <br/>
                <h4>What's on your mind?</h4>
                <textarea type='text' name='message' id='message' form='contactform' rows='8' cols='75'/>
                <br/>
                <input type='submit' id='submitbut' value='Send my message!'/>
            </form>
            </div>
        );
    }
}

export default Contact;