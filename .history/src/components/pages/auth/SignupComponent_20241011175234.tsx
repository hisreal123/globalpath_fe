import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterSchema } from "@/utils/FormValiator";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../../ui/input";
import { Link } from "react-router-dom";
import { useRegister } from "@/hooks/useAuth";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormValues = z.infer<typeof RegisterSchema>;

const SignupComponent = () => {
  // states
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmployer, setIsEmployer] = useState<boolean>(true);

  // Initializing form
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      confirm_password: "",
      role: "EMPLOYER",
      profile: {
        job_title: "",
        company_name: "",
        company_web_address: "",
      },
    },
  });

  // Submit handler
  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    setIsLoading(true);
    try {
      const response = await useRegister(values);
      console.log("User registered successfully:", response.data);
    } catch (error: any) {
      console.error("Registration failed:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
   
  );
};

export default SignupComponent;
