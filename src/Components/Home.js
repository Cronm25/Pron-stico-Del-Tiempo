import React,{useState}  from "react"
import Form from "./Form";
import Card from "./Card";
const Home =()=>{
    let urlClima = "https://api.openweathermap.org/data/2.5/weather?appid=7d16596509c3b954005cd9932bc06f0b&lang=es"
    let cityUrl = "&q=";
    let urlFuturo = "https://api.openweathermap.org/data/2.5/forecast?appid=7d16596509c3b954005cd9932bc06f0b&lang=es";

    const [clima , setClima]= useState([]);
    const [Fclima , setFclima]= useState([]);
    const [loading, setLoading]= useState(false);
    const [show, setShow]= useState(false);
    const [location, setLocation]= useState("");

    const getLocation = async(loc)=>{
        setLoading(true);
        setLocation(loc);

        urlClima = urlClima + cityUrl + loc ;
        await fetch(urlClima).then((response)=>{
            if(!response.ok) throw {response}
            return response.json();
         }).then((DataR)=>{
            setClima(DataR)
            console.log({DataR})
         }).catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })


        urlFuturo = urlFuturo + cityUrl + loc;
        await fetch(urlFuturo).then((response)=>{
            if(!response.ok) throw {response}
            return response.json();
         }).then((DataRF)=>{
            setFclima(DataRF)

            setLoading(false)
            setShow(true)
         }).catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })
        
    }
    return(
        <React.Fragment>
            <Form newLocation={getLocation} />
            {loading?<img src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" width="150"></img>:
            <Card
            showData = {show}
            loadingData = {loading}
            climaData = {clima}
            FclimaData = {Fclima}
            />}
        </React.Fragment>
    )
}
export default Home;