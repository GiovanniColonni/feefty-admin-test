"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import UserForm from "./UserForm.client";

const roles = z.enum(["Account manager", "Administrator", "Developer", "Support"]);

const userSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  role: z.string().min(1, { message: "Role is required" }),
});

function UpdateUser({ defaultValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: defaultValues
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="flex flex-row p-2 pt-2 pb-4 gap-4 left-0 top-12">
      <div className="flex-grow">
        <div className="bg-white drop-shadow-lg py-6 px-4">
          <UserForm onSubmit={handleSubmit(onSubmit)} register={register} />
        </div>
        <div className="px-4 py-3 sm:px-6 flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );

}

export default UpdateUser;