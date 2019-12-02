import React ,{ Component }  from 'react';
import { Link } from 'react-router';
import './GoodLinks.css';


class GoodLinks extends Component {
    state = {   
        goods: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:9000/api/good/');
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
            <div className="good">
                {this.state.goods.map(item => (
                    <div key={item.id}>
                        <Link to={'/shop/'+item.id}>
                        <img className="photo1" src={item.photo1}/>    
                        <h1  className="title">{item.name}</h1>
                        <span className = "price">{item.price}</span>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default GoodLinks;
