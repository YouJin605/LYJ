import React ,{ Component }  from 'react';
import axios from "axios"
import ShopDetail from './ShopDetail';

export default class GoodGatherer extends Component {
    state = {
        isLoading:true,
        id:"aa",
        name:"aa",
        photo1:"aa",
        photo2:"aa",
        price:"aa",
        code:"aa",
        quantity:"aa",
        forMainpage:"aa"
    };

    getGood = async() =>{
        const obj= await axios.get('http://127.0.0.1:9000/api/good/'+this.props.params.id);
        this.setState({
            isLoading:false,
            id:obj.data.id,name:obj.data.name,photo1:obj.data.photo1,photo2:obj.data.photo2,price:obj.data.price,code:obj.data.code,quantity:obj.data.quantity,forMainpage:obj.data.forMainpage});
    }
    
    componentDidMount(){
        this.getGood();
    }

    render() {
        const {isLoading,id,name,photo1,photo2,price,code,quantity,forMainpage}=this.state;
        return (
            this.state.isLoading?
                (<>
                <h1>true</h1>
                </>
                ):(
                    <>
                    <ShopDetail
                    id={id} name={name} photo1={photo1} photo2={photo2}price={price}
                    code={code} quantity={quantity} forMainpage={forMainpage}
                    />
                    </>
                )
        );
    }
}
