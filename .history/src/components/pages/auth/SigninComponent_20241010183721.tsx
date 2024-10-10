import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

// Define types 
const FormValues = z.infer<type

const SigninComponent = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  // perform signin logic here
  const onSubmit = (values: any) => {
    console.log(values);

    // values = {}
  };

  return (
    <div>
      <div className="top_nav px-5 flex items-center justify-between font-bold pt-3">
        <Link to="/"> logo</Link>
        <h2>right</h2>
      </div>
      <div className="form_wrapper bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md mt-20 md:mt-40 mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
            <Button
              type="submit"
              className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600 mt-5 relative"
            >
              Sign in
            </Button>
          </form>
        </Form>
        <p className="text-center text-gray-600 mt-3">
          New here?
          <Link to="/auth/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninComponent;
