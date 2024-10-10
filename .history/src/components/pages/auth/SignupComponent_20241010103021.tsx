import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormSchema from "../../../utils/FormValiator";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../../ui/input";
import { Link } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";

const SignupComponent = () => {const form = useForm({
  resolver: zodResolver(FormSchema),
  defaultValues: {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    profile : {
      
    }
  },
});

const onSubmit: SubmitHandler<IFormRegister> = (values) => {
  console.log(values);
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
                    placeholder="First Name"
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
                    placeholder="Last Name"
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
            Sign up
          </Button>
        </form>
      </Form>
      <p className="text-center text-gray-600 mt-3">
        Already have an Account?
        <Link to="/auth/signin" className="text-blue-500 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  </div>
);
}

export default SignupComponent
