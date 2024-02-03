"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {AddUserForm} from "./UserForm.client";

const roles = z.enum(["Account manager", "Administrator", "Developer", "Support"]);

const userSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  role: z.string().min(1, { message: "Role is required" }),
});

function AddUser() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }
  
  function onSubmitError(data) {
    console.log("Error")
    console.log(data);
  }

  return (
    <div className="flex flex-row p-2 pt-2 pb-4 gap-4 left-0 top-12">
      <AddUserForm onSubmit={handleSubmit(onSubmit,onSubmitError)} register={register} />
    </div>
  );

}

export default AddUser;