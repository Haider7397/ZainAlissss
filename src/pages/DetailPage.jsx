/* eslint-disable no-const-assign */
import { useEffect, useState } from "react";

export default function DetailPage() {

    const [data,setData]= useState(JSON.parse(localStorage.getItem('item')))
    const [qty, setQty] = useState("");
    
    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem('item')))
        console.log(data)
    },[data])

    const add = ()=>{
        data.qty=qty;
        let items=[];
        if(localStorage.getItem("cart")===null || localStorage.getItem("cart")===undefined || localStorage.getItem("cart")===""){
            items.push(data)
            localStorage.setItem("cart",JSON.stringify(items))
        }else{
            items = JSON.parse(localStorage.getItem("cart"));
            items.push(data)
            localStorage.setItem("cart",JSON.stringify(items))
        }
    }

    return (
        <div className="container">
            <br />
            <br />
            <div className="row">
                <div className="col-4">
                    <div className="card" style={{width:"18rem", textAlign:"center", border:"none"}}>
                        <h5 className="card-title">{data.title}</h5>
                        <img src={data.images[0]} class="card-img-top" alt=""/>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card" style={{width:"18rem", textAlign:"center", border:"none"}}>
                        <h5 className="card-title"><strong>Price: </strong>PKR {data.price}</h5>
                        <p className="card-text">{data.description}</p>
                        <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Qty</span>
                            </div>
                                <input type="number" className="form-control" aria-label="Small" onChange={(event) => setQty(event.currentTarget.value)} aria-describedby="inputGroup-sizing-sm" />
                                <br />
                        </div>
                        <a href="/cart" className="btn btn-primary" onClick={()=>add()}>Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
    );
}