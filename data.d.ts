interface IFormLogin {
  email: string;
  password: string;
}

interface Profile {
  job_title: string;
  company_name: string;
  company_web_address: string;
}

export interface IFormRegister {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  profile: Profile;
  role: string;
}

