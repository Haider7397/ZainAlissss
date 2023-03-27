import { useEffect, useState } from "react";

export default function CartPage() {
    const [data,setData]= useState(JSON.parse(localStorage.getItem('cart')))
    const [subTotal,setSubTotal]= useState(0)

    useEffect(()=>{
        let total=0;
        setData(JSON.parse(localStorage.getItem('cart')))
        data.forEach(element => {
            total = total + (element.price*element.qty)
        });
        setSubTotal(total)
    },[data])

    return (
        <div className="container">
            <br />
            <br />
            <h3>My Cart ({data.length})</h3>
            <br />
            <br />
            <div className="row">
                <div className="col-8">
                    {
                        data.map((set,index) =>
                            <div className="row" style={{borderBottom:"2px solid black"}} key={index}>
                                <br />
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6">
                                        <div className="card" style={{width:"18rem", textAlign:"center", border:"none"}}>
                                            <h5 className="card-title">{set.title}</h5>
                                            <img src={set.images[0]} class="card-img-top" alt=""/>
                                        </div>
                                        </div>
                                        <div className="col-6" style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                                            <div className="card" style={{width:"18rem", textAlign:"center", border:"none"}}>
                                                <p className="card-text">Quatity: {set.qty}</p>
                                                <p className="card-text">Price: {set.price}</p>
                                                <p className="card-text"> Total: {set.qty*set.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        )
                    }
    
                </div>
                <div className="col-4" style={{border:"2px solid black",borderRadius:"7px", textAlign:"center", height:"15rem", width:"18rem"}}>
                    <br /><br/>
                    <h2>Order Summary</h2>
                    <br />
                    <div style={{display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                        <div className="row">
                            <div className="col-4">
                                <p className="card-text">Subtotal:</p>
                            </div>
                            <div className="col-8">
                                <p className="card-text">PKR {subTotal}</p>
                            </div>
                        </div>
                        <div className="row" style={{borderBottom:"2px solid black"}}>
                            <div className="col-4">
                                <p className="card-text">Est:</p>
                            </div>
                            <div className="col-8" >
                                <p className="card-text">PKR 200</p>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-4">
                                <p className="card-text">Total:</p>
                            </div>
                            <div className="col-8" >
                                <p className="card-text">PKR {subTotal+200}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}