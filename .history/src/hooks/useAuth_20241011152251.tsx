
import axios from 'axios';

const baseURL =  `https://korede456.pythonanywhere.com`

const useRegister = async () => {
  try {
    const response  =  axios.post (`${baseURL}/account/register/`);
    if()
  } catch {
    throw new Error(" Error Registering User")
  }
}