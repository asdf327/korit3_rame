import axios, {AxiosRequestConfig} from "axios";
import { CarEntry, CarResponse, Car } from "../types";

const getAxiosConfig = () : AxiosRequestConfig => {
  const token = sessionStorage.getItem('jwt'); //지역변수 

  return {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    }
  }
}

const getCars = async (): Promise<CarResponse[]> => {
  
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/cars`, getAxiosConfig());

    return response.data._embedded.cars;
  }

  export const deleteCar = async (link:string): Promise<CarResponse> => {
    const response = await axios.delete(link, getAxiosConfig());
    return response.data
    
  }

  export const addCar = async (car: Car) : Promise<CarResponse> => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/cars`, car, getAxiosConfig())
    return response.data;
  }

  export const updateCar = async (carEntry : CarEntry) : Promise<CarResponse> => {
    const response = await axios.put(carEntry.url, carEntry.car, getAxiosConfig());
  
    return response.data;
  }

export {getCars}