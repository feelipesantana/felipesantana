import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.API_ROUTE,
})

//API_ROUTE_LOCAL
//API_ROUTE