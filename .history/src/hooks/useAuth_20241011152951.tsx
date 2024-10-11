
import axios from 'axios';

const baseURL =  `https://korede456.pythonanywhere.com`

type userData = z

const useRegister = async (userData) => {
  try {
    const response  =  axios.post(`${baseURL}/account/register/`, userData, config);
    
    console.log("User registered successfully:", response.data);
  } catch {
    throw new Error(" Error Registering User")
  }
}