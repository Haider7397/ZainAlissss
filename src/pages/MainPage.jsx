/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import {get} from "../api/api";

export default function MainPage() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        get("/products/?title="+search).then(resp=>{
        setData(resp)  
        console.log(resp) 
        })
    },[search])

    const sendData = (item)=>{
        localStorage.setItem("item",JSON.stringify(item))
    }

    return (
        <div className="container">
            <br />
            <br />
            <div className="row">
                <div className="col-4">
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Search</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small" onChange={(event) => setSearch(event.currentTarget.value)} aria-describedby="inputGroup-sizing-sm" />
                    </div>
                </div>
            </div>
            <br/>  
            <div className="row">
                {data.map(function (set) {
                        return <div className="col-4 mx-auto" key={set.id} style={{padding:"30px"}}>
                                <div className="card" style={{width: "22rem", height:"36rem"}}>
                                    <img src={set.images[0]} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{set.title}</h5>
                                        <p className="card-text">{set.description}</p>
                                        <p className="card-text"><strong>Price: </strong>PKR {set.price}</p>
                                        <a href="/detail" className="btn btn-primary" onClick={()=>sendData(set)}>Add to Cart</a>
                                    </div>
                                    </div>
                              </div>
                })}
            </div>
        </div>
    );
}