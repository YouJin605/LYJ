import React ,{ Component }  from 'react';
import BackgroundSlideshow from 'react-background-slideshow'


class MainSlideShow extends Component {
    state = {
        goods: [],
    };
    
    async componentDidMount() {
        
            const res = await fetch('http://127.0.0.1:9000/api/mainpageImage/');
            const goods = await res.json();
            this.setState({
                goods
            });       
    }
    
    //item = state.goods.map((good)=>{return good.photo1})

    render() {
        return (
            <BackgroundSlideshow images=
            {this.state.goods.map(item => (
                item.photo1
            ))} />
        )
};
}

export default MainSlideShow;