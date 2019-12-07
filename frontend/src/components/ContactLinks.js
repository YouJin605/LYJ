import React ,{ Component }  from 'react';
import { Link } from 'react-router';
import './ContactLinks.css'

class ContactLinks extends Component {
    state = {   
        contacts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:9000/api/contact/');
            const contacts = await res.json();
            this.setState({
                contacts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="contact">
                {this.state.contacts.map(item => (
                    <div key={item.id} className="eachcontact">
                        <h1  className="usertitle">{item.usertitle}</h1>
                        <h3 className="user">-{item.user}</h3>    
                        <span className = "usercontent">&nbsp;&nbsp;<img src="under.png" width="25px"/>{item.usercontent}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default ContactLinks;
