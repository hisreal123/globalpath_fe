
// import { FormSchema } from '@/utils/FormValiator';
// import { RegisterSchema } from "@/utils/FormValiator";
import axios , {AxiosResponse } from 'axios';
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


// Impl
export const useLogin = (loginData: {email :string, passwrord: string}) : Promise<AxiosResponse<any>> => {
  
  return new Promise ((resolve, reject) => {
    axios.post(`${baseURL}/account/login/`, loginData, headerConfig).then().catch().finally()
  })

}