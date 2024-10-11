
import { FormSchema } from '@/utils/FormValiator';
import axios, { AxiosResponse } from 'axios';
import { z } from 'zod';

const baseURL =  `https://korede456.pythonanywhere.com`

const headerConfig = {
  headers : {
    'Content-type': 'application/json'
  }
}


const useRegister = async (): Promise<void> => {
  try {
    const response = await axios.post(`${baseURL}/account/register/`,
      userData,
      headerConfig
    );

    console.log("User registered successfully:", response.data.message);
  } catch {
    throw new Error(" Error Registering User");
  }
};