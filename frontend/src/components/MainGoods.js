import React ,{ Component }  from 'react';
import BackgroundSlideshow from 'react-background-slideshow'
import './MainGoods.css'
import { Link } from 'react-router';

class MainSlideShow extends Component {
    state = {
        goods: [],
    };
    
    async componentDidMount() {
        
            const res = await fetch('http://127.0.0.1:9000/api/forMainpage/');
            const goods = await res.json();
            this.setState({
                goods
            });       
    }
    
    //item = state.goods.map((good)=>{return good.photo1})

    render() {
        return (
        <div className="maingood">
            {this.state.goods.map(item => (
                <div key={item.id}> 
                <Link to={'/shop'}>             
                    <img classname="gphoto1" width = "380px" height = "auto" src={item.photo1}/>
                    <h1 className="gname">{item.name}</h1>
                    <span className="gprice">{item.price}원</span>
                </Link>
                </div>
            ))}
        </div>
            
        )
};
}

export default MainSlideShow;