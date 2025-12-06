import React from "react";
import { useSearchParams } from "react-router-dom";

function Search(){
    const [searchParams, setSearchParams] = useSearchParams();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = searchParams.get('q')
        const age = searchParams.get('age')
        alert((data +''+ age));
    }
    return(
        <div>
            <h1>
                This is my Search space
            </h1>
            <form onSubmit={handleSubmit}>
                <label>Search</label>
                <input type="text" placeholder="Search" onChange={(e)=>setSearchParams({q:e.target.value})}></input>
                <br/><br/>
                <button>Search</button>
                <button onClick={()=>setSearchParams({})}>Reset</button>
            </form>
        </div>
    )
};

export default Search;