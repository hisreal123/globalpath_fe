
// import { FormSchema } from '@/utils/FormValiator';
// import { RegisterSchema } from "@/utils/FormValiator";
import axios , {AxiosResponse } from 'axios';
import { useState } from 'react';
// import IFormRegister from '../../data'
// import { z } from 'zod';

const baseURL =  `https://korede456.pythonanywhere.com`

const headerConfig = {
  headers : {
    'Content-type': 'application/json'
  }
}


export // Function to handle user registration and return AxiosResponse
const useRegister = async (
  userData: any
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.post(
      `${baseURL}/account/register/`,
      userData,
      headerConfig
    );

    return response; // Return the API response
  } catch (error: any) {
    if (error.response) {
      console.error("Error registering user:", error.response.status);
      console.error("Error details:", error.response.data);
      throw new Error(error.response.data.message || "Error registering user");
    } else {
      console.error("Error registering user:", error.message);
      throw new Error("Network error");
    }
  }
};


// Implimenting Login for user
export const useLogin = < T>(loginData: {email :string, passwrord: string}) : Promise<{user: T; isLoading: boolean}> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return new Promise ((resolve, reject) => {
    setIsLoading(true);
      axios.post(`${baseURL}/account/login/`, loginData, headerConfig)
      .then( response => {setIsLoading(false);
        resolve({ user: response.data as T, isLoading:false }) })
      .catch( error => {
        setIsLoading(false);
        if (error.message) {
          console.log("Error logging in user:", error.response.status);
          console.log("Error details:", error.response.data);
          reject(new Error(error.response.data.message || "Error logging in user"))
        }
      })
  })

}