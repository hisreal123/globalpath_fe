
const ForgotPasswordForm = () => {
  return (
    import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema } from "@/utils/FormValiator";;
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

// Define types 
type FormValues = z.infer<typeof LoginSchema>

const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmployer, setIsEmployer] = useState<boolean>(true);

  const form = useForm<FormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "EMPLOYER"
    },
  });


  // perform signin logic here
  const onSubmit : SubmitHandler<FormValues> = async (values: any) => {
    setIsLoading(true); // Start loading
    try {
      // Mock API call or your authentication logic here
      console.log(values);
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="form_wrapper bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md mt-20 md:mt-30 mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center"> Login </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Username"
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        {/* forgotpassword  */}       
          <Link
            to="/auth/reset/forgotPassword"
            className="text-blue-500 hover:underline text-xs hover:text-blue-800"
          >
            Forgot Password
          </Link>

          <Button
            type="submit"
            className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600 mt-5 relative"
          >
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </form>
      </Form>

      <div className="w-full h-[.3px] bg-gray-200 rounded-full mt-3 "> </div>
      <p className="text-center text-gray-600 mt-3">
       Back to Sin?
        <Link to="/auth/signup" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

}

export default ForgotPasswordForm