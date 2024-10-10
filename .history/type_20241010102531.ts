import { IFormRegister } from './.history/type_20241010102403';
interface IFormLogin {
  email : string,
  password : string,
}


// first_name: "",
//     last_name: "",
//     email: "",
//     company_name: "",
//     company_website: "",
//     job_title: "",
//     work_email: "",
//     password: "",
//     confirm_password: "",
//     is_recuiter: ""
interface Profile {
  job_title: string;
  company_name: string;
  company_web_address: string;
}

interface IFormRegister {
  email : string
  first_name : string
  last_name : string
  password : string
  profile : Profile
  role: string
}

export default IFormRegister