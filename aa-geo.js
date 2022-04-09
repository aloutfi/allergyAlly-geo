import fetch from "node-fetch";
import dotenv  from "dotenv";

dotenv.config({path:'app.env'})

export function geocodeAddress(address) {
    /*
    Given an address, return the coordinates for that address
    */
    const geocode_url = 'https://maps.googleapis.com/maps/api/geocode/json?'
    const url = `${geocode_url}address=${address}&key=${process.env.GCP_API_KEY}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.results[0].geometry.location);
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}