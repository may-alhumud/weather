import "./index.css";
import { useEffect, useState } from "react";

const App = () => {
  const [counterName, setCountryName] = useState("");
  const [searchedCountry, setSearchedCountry] = useState("CounteryName");
  const [temperature, settemperature] = useState(0);
  const [wind, setwind] = useState(0);
  const [description, setdescription] = useState(0);

  useEffect(() => {
    const getDataFromApi = async () => {
      const request = await fetch(
        "https://goweather.herokuapp.com/weather/" + counterName
      );
      const data = await request.json();
      settemperature(data.temperature);
      setwind(data.wind);
      setdescription(data.description);
      setSearchedCountry(counterName);
    };
    getDataFromApi();
  }, [counterName]);

  return (
    <div className="container">
      <h1 className="text-center">Weather</h1>
      <div className="input-group  mt-3">
        <input
          type="text"
          value={counterName}
          onChange={(e) => setCountryName(e.target.value)}
          className="form-control"
          placeholder="Country name"
        />

        <h3 className="text-center mt-3 w-100">
          The weather in{" "}
          <span style={{ color: "blue" }}>{searchedCountry}</span> is :
        </h3>

        <div className="data mt-3">
          <div className="text-center">
            <h3>Temperature</h3>
            <h3 text-color="black">{temperature}</h3>
          </div>

          <div div className="text-center">
            <h3>Wind</h3>
            <h3>{wind}</h3>
          </div>
          <div className="text-center">
            <h3>Description</h3>
            <h3>{description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
