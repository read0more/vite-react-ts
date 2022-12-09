import React, { useRef } from "react";
import ControllerForm from "./ControllerForm";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";

type Inputs = {
  email: string;
  password: string;
  gender: string;
  skills: string[];
};

export default function index() {
  const defaultValues = {
    email: "read0more@gmail.com",
    gender: "male",
    skills: ["react", "nodejs"],
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues,
  });

  const ref = useRef<HTMLFormElement>(null);
  const onSubmit = (data: Inputs) => {
    console.log(data);
    ref.current?.submit(); // 그다지 좋은 방법은 아니지만 현 직장 업무에서 어쩔 수 없이 필요한 방법.
  };

  return (
    <div className='App'>
      <form
        ref={ref}
        onSubmit={handleSubmit(onSubmit)}
        action='https://someurl.com'
        method='POST'
      >
        <div className='form-control'>
          <label>Email</label>
          <input
            type='text'
            {...register("email", {
              required: "Email is required.",
              value: "read0more@gmail.com",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />
          {errors.email && <p className='errorMsg'>{errors.email.message}</p>}
        </div>
        <div className='form-control'>
          <label>Password</label>
          <input
            type='password'
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password should be at-least 6 characters.",
              },
            })}
          />
          {errors.password && (
            <p className='errorMsg'>{errors.password.message}</p>
          )}
        </div>
        <div className='form-control'>
          <label>
            male
            <input
              type='radio'
              value='male'
              {...register("gender", {
                required: "Please select your gender",
              })}
            />
          </label>
          <label>
            female
            <input type='radio' value='female' {...register("gender")} />
          </label>
          {errors.gender && <p className='errorMsg'>{errors.gender.message}</p>}
        </div>
        <div className='form-control'>
          <label>Select Your Skills</label>
          <label>
            JavaScript
            <input
              type='checkbox'
              value='JavaScript'
              {...register("skills", {
                required: "Please select at-least one skill",
              })}
            />
          </label>
          <label>
            react
            <input type='checkbox' value='react' {...register("skills")} />
          </label>
          <label>
            nodejs
            <input type='checkbox' value='nodejs' {...register("skills")} />
          </label>
          <label>
            angular
            <input type='checkbox' value='angular' {...register("skills")} />
          </label>
          {errors.skills && <p className='errorMsg'>{errors.skills.message}</p>}
        </div>
        <div className='form-control'>
          <label></label>
          <button type='submit'>Login</button>
        </div>
      </form>
      <ControllerForm />
    </div>
  );
}
