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
    <div>
      <div className="top_nav px-5 flex items-center justify-between font-bold pt-3">
        <Link to="/">Logo</Link>
        <h2>right</h2>
      </div>
      <div className="form_wrapper bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md mt-10 md:mt-10 mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-x-5">
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

            <div className="grid grid-cols-2 gap-x-5">
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
            </div>

            <div className="grid grid-cols-2 gap-x-5">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Role Field */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md">Role</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value as "EMPLOYER" | );
                        setIsEmployer(value === "EMPLOYER"); // Update state based on selected role
                      }}
                      value={field.value} // Ensure value is either EMPLOYER or JOBSEEKER
                    >
                      <SelectTrigger className="min-w-[100%]">
                        <SelectValue placeholder="Select Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EMPLOYER">EMPLOYER</SelectItem>
                        <SelectItem value="JOBSEEKER">JOBSEEKER</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            {isEmployer && (
              <div className="profile-section">
                <div className="grid grid-cols-2 gap-x-5">
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
                </div>

                {/* Company Website Field (Profile) */}
                <FormField
                  control={form.control}
                  name="profile.company_web_address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md">Company Website</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Company Website"
                          {...field}
                          className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full mt-5 bg-blue-600 text-white"
            >
              {isLoading ? "Registering..." : "Register"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignupComponent;
