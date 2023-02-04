const Result = ({ weatherdata }) => {

    return (

        
            <div >

                <>
                    {
                        (weatherdata.name !== undefined)
                            ?
                            <>
                                <h2>{weatherdata.name}</h2>
                                <div className="d-flex justify-content-evenly">
                                    <div >
                                        <p className="m-1">Avg Temp : <span className="span-1">{Math.floor(weatherdata.main.temp-273)}°C,</span> </p>
                                        <p className="m-1 mt-3">Max Temp : <span className="span-1">{Math.floor(weatherdata.main.temp_max-273)}°C,</span></p>
                                    </div>
                                    <div >
                                        <p className="m-1">Min Temp : <span className="span-1">{Math.floor(weatherdata.main.temp_min-273)}°C </span> </p>
                                        <p className="m-1 mt-3">Weather Type : <span className="span-1">{weatherdata.weather[0].main}</span> </p>
                                    </div>
                                </div>
                                <img src={`https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`} alt="" />

                            </>
                            :
                            
                                <h3>Please Enter City Name</h3>
                            
                    }
                </>


            </div>
        
    )
}

export default Result