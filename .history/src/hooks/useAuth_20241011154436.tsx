
// import { FormSchema } from '@/utils/FormValiator';
import { FormSchema } from '@/utils/FormValiator';
import axios from 'axios';
import IFormRegister from '../../data'
// import { z } from 'zod';

const baseURL =  `https://korede456.pythonanywhere.com`

const headerConfig = {
  headers : {
    'Content-type': 'application/json'
  }
}


export const useRegister = async (userData: {}): Promise<void> => {
  try {
    const response = await axios.post(
      `${baseURL}/account/register/`,
      userData,
      headerConfig
    );

    console.log("User registered successfully:", response.data.message);
  } catch (error: any) {
    if (error.response) {
      console.log("Error registering user:", error.response.status);
      console.log("Error details:", error.response.data);
    } else {
      console.log(" Error Registering User");
    }
  }
};