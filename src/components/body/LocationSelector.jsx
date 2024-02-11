import React, { useEffect, useState } from 'react'

const LocationSelector = (props) => {
    const {setLatitude, setLongitude} = props;
    const regexLatLon = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/;
    const[lat, setLat] = useState();
    const[lon, setLon] = useState();
    const[isLatValid, setIsLatValid] = useState(false);
    const[isLonValid, setIsLonValid] = useState(false);

    useEffect(() => {
        setIsLatValid(regexLatLon.test(lat));
    },[lat]);

    useEffect(() => {
        setIsLonValid(regexLatLon.test(lon));
    },[lon]);

    useEffect(() => {
        if(isLatValid){
            setLatitude(lat);
        } else {
            setLatitude(undefined);
        }
    }, [isLatValid]);

    useEffect(() => {
        if(isLonValid){
            setLongitude(lon);
        } else {
            setLongitude(undefined);
        }
    }, [isLonValid]);

  return (
    <div className="card">
        <div className="card-header">
            <h5 className="card-title mb-0">Location</h5>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-sm-6">
                    <input type="text" className={"form-control " + (isLatValid ? "is-valid" : "is-invalid")}
                    placeholder="Latitude" onChange={event => setLat(event.target.value)} />
                    {
                        isLatValid ? 
                        <div className="valid-feedback">Looks Good!</div> : 
                        <div className="invalid-feedback">Please provide a valid latitude</div>
                    }
                    
                </div>
                <div className="col-sm-6">
                    <input type="text" className={"form-control " + (isLonValid ? "is-valid" : "is-invalid") }
                    placeholder="Longitude" onChange={event => setLon(event.target.value)} />
                    {
                        isLonValid ?
                        <div className="valid-feedback">Looks Good!</div> : 
                        <div className="invalid-feedback">Please provide a valid longitude</div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default LocationSelector