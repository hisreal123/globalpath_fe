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

type FormValues = z.infer<typeof RegisterSchema>;


const SignupComponent = () => { const form = useForm({
  resolver: zodResolver(RegisterSchema),
  defaultValues: {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
    profile: {
      job_title: "",
      company_name: "",
      company_web_address: "",
    },
  },
});

const onSubmit: SubmitHandler<FormValues> = (values) => {
  const parsedData = RegisterSchema.parse(values)
  console.log(parsedData);
};

return (
  <div>
    <div className="top_nav px-5 flex items-center justify-between font-bold pt-3">
      <Link to="/">Logo</Link>
      <h2>right</h2>
    </div>
    <div className="form_wrapper bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md mt-20 md:mt-40 mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex space-x-5">

          {/* First Name Field */}
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">First Name</FormLabel>
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

          {/* Last Name Field */}
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Last Name</FormLabel>
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
            </div>

.flex
          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password Field */}
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Job Title Field (Profile) */}
          <FormField
            control={form.control}
            name="profile.job_title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Job Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Job Title"
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company Name Field (Profile) */}
          <FormField
            control={form.control}
            name="profile.company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Company Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Company Name"
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company Web Address Field (Profile) */}
          <FormField
            control={form.control}
            name="profile.company_web_address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Company Web Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Company Web Address"
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600 mt-5 relative"
          >
            Sign up
          </Button>
        </form>
      </Form>

      <p className="text-center text-gray-600 mt-3">
        Already have an account?{" "}
        <Link to="/auth/signin" className="text-blue-500 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  </div>
);
}

export default SignupComponent
