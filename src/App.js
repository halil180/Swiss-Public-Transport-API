import "./App.css";
import React, { useState, useEffect } from "react";
import SearchSection from "./components/SearchSection";
import Result from "./components/Result";
import Title from "./components/Title";
const  App =() => {
  const [transportInfo, setTransportInfo] = useState(); /// this is where i store my transport data (data from the api )
  const [from, setFrom] = useState("Basel"); //// chose where you want to take the train from
  const [to, setTo] = useState("Zürich");//// chose  the destination you want to go 
  const [selectedDate, setselectedDate] = useState("2022-06-26"); /// chose the date you want to travel 
  const [time, setTime] = useState("17:30"); ///  select the time you want to travel
  useEffect(() => {
    getTransportDataFromApi(); //// fetch the data on load 
  }, []);
  const getTransportDataFromApi = async () => {
    const response = await fetch(`http://transport.opendata.ch/v1/connections?from=${from}&to=${to}&date=${selectedDate}&time=${time}`);
    const data = await response.json();
    setTransportInfo(data); //im setting the data i fetched from the transport api 
    console.log(data); 
  };
  const handleSearch = () => {
    getTransportDataFromApi(); ///fetch the data on click 
  };
  return (
    <div className="container">
        <Title/> 
      <SearchSection  setFrom={setFrom} setTo={setTo} setselectedDate={setselectedDate }setTime={setTime } handleSearch={handleSearch} />
      <Result transportInfo={transportInfo}/>
    </div>
  );
}

export default App;
