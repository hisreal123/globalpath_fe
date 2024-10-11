
import { FormSchema } from '@/utils/FormValiator';
import axios from 'axios';
import { z } from 'zod';

const baseURL =  `https://korede456.pythonanywhere.com`

const headerConfig = {
  headers : {
    'Content-type': 'application/json'
  }
}
type userData = z.infer<typeof FormSchema>;

const useRegister = async () => {
  try {
    const response = axios.post(
      `${baseURL}/account/register/`,
      userData,
      headerConfig
    );

    console.log("User registered successfully:", response.data);
  } catch {
    throw new Error(" Error Registering User");
  }
};