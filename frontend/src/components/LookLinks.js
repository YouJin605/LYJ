import React ,{ Component }  from 'react';
import { Link } from 'react-router';
import './LookLinks.css'

class LookLinks extends Component {
    state = {
        goods: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:9000/api/lookbookImage/');
            const goods = await res.json();
            this.setState({
                goods
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.goods.map(item => (
                    <div key={item.id}>
                        <Link to={'/lookbook/'+item.modelNumber}>
                        <h1 className="modelname">{item.modelNumber}</h1>
                        <img className="modelphoto" src={item.photo1}/>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default LookLinks;
