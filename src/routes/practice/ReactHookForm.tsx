import React, { useState } from "react";
import Modal from "@/components/Modal";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType, z } from "zod";

const _validationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept Terms and Conditions" }),
  }),
});

// 이렇게 따로 해주지 않고 한 곳에 전부 넣으면 password와 confirmPassword가 같은지 확인하는 refine이 .object에 있는 내용들이 전부 통과 되고 나서야 체크를 한다.
// 이런 점은 zod가 불편하다.
const _passwordValidationSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      path: ["confirmPassword"],
      message: "Password don't match",
    }
  );

interface Form {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export const validationSchema: ZodType<Form> = z.intersection(
  _validationSchema,
  _passwordValidationSchema
);

type FormValues = z.infer<typeof validationSchema>;

const ModalContent = ({
  submitModal,
  closeModal,
}: {
  submitModal: () => void;
  closeModal: () => void;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <form onSubmit={submitModal}>
      <div>
        <label htmlFor='name'>Name</label>
        <input {...register("name")} type='text' />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input {...register("email")} type='email' />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input {...register("password")} type='password' />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input {...register("confirmPassword")} type='password' />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      <div>
        <label htmlFor='terms'>Terms and Conditions</label>
        <input type='checkbox' {...register("terms")} />
        {errors.terms && <p>{errors.terms.message}</p>}
      </div>
      <button type='button' onClick={closeModal}>
        닫기
      </button>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default function ReactHookForm() {
  const [modal1IsOpen, setModal1IsOpen] = useState(true);
  const [states, setStates] = useState<Partial<FormValues>>({
    name: "read",
    email: "asd@test.com",
  });
  const reactHookFormMethods = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    mode: "onBlur",
    defaultValues: states,
  });

  const submitModal = reactHookFormMethods.handleSubmit((data) => {
    setStates(data);
    setModal1IsOpen(false);
  });

  function closeModal() {
    setModal1IsOpen(false);
    reactHookFormMethods.reset(states);
  }

  console.log(reactHookFormMethods.watch(), states);
  return (
    <FormProvider {...reactHookFormMethods}>
      <button onClick={() => setModal1IsOpen(true)}>open modal</button>
      <Modal isOpen={modal1IsOpen}>
        <Modal.FullScreen>
          <Modal.Title>
            <ModalContent closeModal={closeModal} submitModal={submitModal} />
          </Modal.Title>
          <Modal.CloseButton onClick={closeModal} />
        </Modal.FullScreen>
      </Modal>
    </FormProvider>
  );
}

// yup으로 했을 경우
/*
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email"),
  password: yup
    .string()
    .required()
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
  terms: yup
    .boolean()
    .required()
    .oneOf([true], "You must accept Terms and Conditions"),
});

type FormValues = yup.InferType<typeof validationSchema>;

const ModalContent = ({
  submitModal,
  closeModal,
}: {
  submitModal: () => void;
  closeModal: () => void;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <form onSubmit={submitModal}>
      <div>
        <label htmlFor='name'>Name</label>
        <input {...register("name")} type='text' />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input {...register("email")} type='email' />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input {...register("password")} type='password' />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input {...register("confirmPassword")} type='password' />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      <div>
        <label htmlFor='terms'>Terms and Conditions</label>
        <input type='checkbox' {...register("terms")} />
        {errors.terms && <p>{errors.terms.message}</p>}
      </div>
      <button type='button' onClick={closeModal}>
        Close
      </button>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default function ReactHookForm() {
  const [modal1IsOpen, setModal1IsOpen] = useState(true);
  const [states, setStates] = useState<Partial<FormValues>>({
    name: "read",
    email: "asd@test.com",
  });
  const reactHookFormMethods = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
    defaultValues: states,
  });

  const submitModal = reactHookFormMethods.handleSubmit((data) => {
    setStates(data);
    setModal1IsOpen(false);
  });

  function closeModal() {
    setModal1IsOpen(false);
    reactHookFormMethods.reset(states);
  }

  return (
    <FormProvider {...reactHookFormMethods}>
      <button onClick={() => setModal1IsOpen(true)}>Open Modal</button>
      <Modal isOpen={modal1IsOpen}>
        <Modal.FullScreen>
          <Modal.Title>
            <ModalContent closeModal={closeModal} submitModal={submitModal} />
          </Modal.Title>
          <Modal.CloseButton onClick={closeModal} />
        </Modal.FullScreen>
      </Modal>
    </FormProvider>
  );
}

*/
