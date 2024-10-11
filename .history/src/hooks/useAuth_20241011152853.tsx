
import axios from 'axios';

const baseURL =  `https://korede456.pythonanywhere.com`

const useRegister = async (userData) => {
  try {
    const response  =  axios.post (`${baseURL}/account/register/`, userData, config);
    
    console.log()
  } catch {
    throw new Error(" Error Registering User")
  }
}