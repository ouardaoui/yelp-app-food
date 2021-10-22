import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: "Bearer rxxwo8pawwDfJSil95GpFaz1GJf5Vl3fZswvv5WxX1ToexclARlBNc67CyMOFiY6sJX0M6twzkJsfmy-0Z6lR3w4YlJOqKMYfiOcZ2xT-mBWfg7wsFmtzgZ2scYnYXYx",
  }
})