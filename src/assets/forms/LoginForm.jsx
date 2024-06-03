import React from "react";
import { useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";
export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FieldSet label="Enter Login Details">
          <Field label="Email">
            <input
              {...register("email")}
              className="p-2 border box-border w-[300px] rounded-md border-gray-200"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Address"
            />
          </Field>
          <Field label="Password">
            <input
              {...register("password")}
              className="p-2 border box-border w-[300px] rounded-md border-gray-200"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
          </Field>
          <Field>
            <button className="text-md text-white cursor-pointer p-1 border rounded-lg  bg-purple-500">
              Login
            </button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
}
