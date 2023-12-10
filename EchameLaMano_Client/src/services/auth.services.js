import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}api/`;

export const register = async (formDataJSON) => {
    try {
      const response = await axios.post(`${BASE_URL}auth/register`, formDataJSON, {

        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      throw new Error("Error occurred while creating the movie. Please try again.");
    }
  };

  export const login = async (formDataJSON) => {
    try {
      const response = await axios.post(`${BASE_URL}auth/login`, formDataJSON, {
        
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      throw new Error("Error occurred while creating the movie. Please try again.");
    }
  };

  export const postSoli = async (formDataJSON) => {
    try {
      const response = await axios.post(`${BASE_URL}postSoli/`, formDataJSON, {
        
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      throw new Error("Error occurred while creating the movie. Please try again.");
    }
  };

  export const postDon = async (formDataJSON) => {
    try {
      const response = await axios.post(`${BASE_URL}postDon/`, formDataJSON, {
        
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      throw new Error("Error occurred while creating the movie. Please try again.");
    }
  };