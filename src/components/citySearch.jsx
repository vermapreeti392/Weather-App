const Citysearch = (props)=>{
    return(
        <div>
            <>
            <input className="p-1 rounded-3 pb-2" onChange={(e)=>{(props.setSearch(e.target.value))}} type="search" placeholder="enter city name"/>
           
           <button className={props.search!=="" ? "btn btn-dark" : "btn btn-dark disabled"} onClick={props.searchPressed}>Search</button>
            </>
        </div>
    )
}

export default Citysearch