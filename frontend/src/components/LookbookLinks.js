import React ,{ Component }  from 'react';
import { Link } from 'react-router';
import './LookbookLinks.css'

class LookbookLinks extends Component {
    state = {   
        lookbooks: []
    };
    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:9000/api/lookbook/');
            const lookbooks = await res.json();
            this.setState({
                lookbooks
            });
        } catch (e) {
            console.log(e);
        }
    }



    render() {
        return (
            <div>
                {this.state.lookbooks.map(item => (
                    <div className="lookbook" key={item.id}>
                        <h1 className="modelname">{item.person}</h1>
                        <img className="modelphoto" src={item.photo_05}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default LookbookLinks;