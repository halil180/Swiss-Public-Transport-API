import React from "react";

const Result = ({ transportInfo })  => {
  return (
    <div>
      {transportInfo && (
        <div className="card ">
          <div className="card-header bg-info text-light ">
            <h1> From : {transportInfo.from.name}</h1>
            <h1> To : {transportInfo.to.name}</h1>
          </div>
          <div className="card-body">
            {transportInfo.connections.map((connection, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  {connection.products.map((operator, index) => (
                    <span key={index}> {operator} </span>
                  ))}{" "}
                </div>
                <div className="card-body">
                  <div className="lead m-1">
                    {" "}
                    <span className="text-info">Departure:</span>{" "}
                    {new Date(connection.from.departure).toLocaleTimeString()}
                  </div>
                  <div className="lead  m-1">
                    {" "}
                    <span className="text-info">Duration</span>{" "}
                    {connection.duration.slice(3)}
                    <span className="text-danger">
                      {" "}
                      (
                      {connection.duration
                        .slice(3)
                        .split(":")
                        .reduce(function (seconds, v) {
                          return +v + seconds * 60;
                        }, 0) / 60}{" "}
                      minutes){" "}
                    </span>
                  </div>
                  <div className="lead  m-1">
                    <span className="text-info"> Platform:</span>{" "}
                    {connection.from.platform}
                  </div>
                  <div className="lead  m-1">
                    {" "}
                    <span className="text-info">Arrival :</span>{" "}
                    {new Date(connection.to.arrival).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Result;
