import React,{useState}  from "react"
const Card =({showData, loadingData, climaData,FclimaData})=>{
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    // var date = day + "/" + month + "/" + year ;
    var url= "", icon= "", urlicon3="", urlicon6="",urlicon9="", FclimaData3="",FclimaData6="",FclimaData9=""

    if(showData){
        
    url="http://openweathermap.org/img/w/"
    icon= url+ climaData.weather[0].icon + ".png";
    urlicon3 = url+ FclimaData.list[1].weather[0].icon + ".png"
    urlicon6 = url+ FclimaData.list[2].weather[0].icon + ".png"
    urlicon9 = url+ FclimaData.list[3].weather[0].icon + ".png"
    var date = FclimaData.list[0].dt_txt.substring(8,10)+"/"+FclimaData.list[0].dt_txt.substring(5,7)+"/"+FclimaData.list[0].dt_txt.substring(0,4)
    FclimaData3 = FclimaData.list[1].dt_txt.substring(8,10)+"/"+FclimaData.list[1].dt_txt.substring(5,7)+"/"+FclimaData.list[1].dt_txt.substring(0,4)+" a las "+FclimaData.list[1].dt_txt.substring(11,13)
    FclimaData6 = FclimaData.list[2].dt_txt.substring(8,10)+"/"+FclimaData.list[2].dt_txt.substring(5,7)+"/"+FclimaData.list[2].dt_txt.substring(0,4)+" a las "+FclimaData.list[2].dt_txt.substring(11,13)
    FclimaData9 = FclimaData.list[3].dt_txt.substring(8,10)+"/"+FclimaData.list[3].dt_txt.substring(5,7)+"/"+FclimaData.list[3].dt_txt.substring(0,4)+" a las "+FclimaData.list[3].dt_txt.substring(11,13)

    }
    return(
       <div className="mt-5">

        { showData === true ?(
            <div className="conatainer">
                <div className="card mb-3 mx-auto bg-dark text-light">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <h3 className="card-title">{climaData.name}</h3>
                            <p className="card-date">{date}</p>
                            <h1 className="card-temp">{(climaData.main.temp - 273.15).toFixed(1)}°C</h1>
                            <p className="card-desc"><img src={icon}></img>{climaData.weather[0].description}</p>
                            <img src="https://images.pexels.com/photos/1414535/pexels-photo-1414535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-start mt-2">
                                <h5 className="card-text">Temperatura máxima: {(climaData.main.temp_max - 273.15).toFixed(1)}°C </h5>
                                <h5 className="card-text">Temperatura mínima: {(climaData.main.temp_min - 273.15).toFixed(1)}°C </h5>
                                <h5 className="card-text">Sensacíon térmica: {(climaData.main.feels_like - 273.15).toFixed(1)}°C </h5>
                                <h5 className="card-text">Humedad: {(climaData.main.humidity)}%</h5>
                                <h5 className="card-text">Velocidad del viento: {(climaData.wind.speed)}m/s</h5>
                            </div>
                            <hr/>
                            <div className="row mt-4">
                                <div className="col">
                                    <p>{FclimaData3}h UTC+2</p>
                                    <p className="description"><img src={urlicon3}></img>{FclimaData.list[1].weather[0].description}</p>
                                    <p className="temp">{(FclimaData.list[1].main.temp-273.15).toFixed(1)}°C</p>
                                </div>
                                <div className="col">
                                    <p>{FclimaData6}h UTC+2</p>
                                    <p className="description"><img src={urlicon6}></img>{FclimaData.list[2].weather[0].description}</p>
                                    <p className="temp">{(FclimaData.list[2].main.temp-273.15).toFixed(1)}°C</p>
                                </div>
                                <div className="col">
                                    <p>{FclimaData9}h UTC+2</p>
                                    <p className="description"><img src={urlicon9}></img>{FclimaData.list[3].weather[0].description}</p>
                                    <p className="temp">{(FclimaData.list[3].main.temp-273.15).toFixed(1)}°C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ):(
            <h2 className="text-linght">sin datos</h2>)
        }

       </div>
    )
}
export default Card;