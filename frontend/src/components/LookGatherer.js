import React ,{ Component }  from 'react';
import axios from "axios"
import LookDetail from './LookDetail';

export default class LookGatherer extends Component {
    state = {
        isLoading:true,
        id:"aa",
        photo1:"aa",
        modelNumber:"aa",
        isMain:"aa",
        looks:[]
    };

    getLook = async() =>{
        console.log('http://127.0.0.1:9000/api/lookbookImage/'+this.props.params.modelNumber);
        const res= await fetch('http://127.0.0.1:9000/api/lookbookImage/'+this.props.params.modelNumber);
        const looks = await res.json();
        this.setState({
            isLoading:false,
            looks
            // id:obj.data.id,photo1:obj.data.photo1,modelNumber:obj.data.modelNumber,isMain:obj.data.isMain
        });
    }
    
    componentDidMount(){
        this.getLook();
    }

    render() {
        const {isLoading,looks,id,photo1,modelNumber,isMain}=this.state;
        return (
            this.state.isLoading?
                (<>
                <h1>true</h1>
                </>
                ):(
                    <>
                    <LookDetail
                    obj={looks}
                    id={id} photo1={photo1} modelNumber={modelNumber} isMain={isMain}
                    />
                    </>
                )
        );
    }
}
