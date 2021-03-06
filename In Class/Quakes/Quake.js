import { getJSON } from './utilities.js';

export default class Quake {
   constructor() {
      this.baseUrl = 
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
       // store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
      this._quakes = [];
   }

   async getEarthQuakesByRadius(position, radius = 100) {
      // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
      let request = await getJSON(this.baseUrl + `&longitude=${position.lon}&latitude=${position.lat}&maxradiuskm=${radius}`)
      let quakes = request.features;
      this._quakes = quakes;
      return this._quakes;
   }

   getQuakeById(id) {
      // filter this._quakes for the record identified by id and return it
      for(let item of this._quakes) {
         if(item.id == id) {
            return item;
         }
      }
   }
}