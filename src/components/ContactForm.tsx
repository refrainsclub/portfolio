import { useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const send = api.contact.send.useMutation();
  const error = send.error;
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await send.mutateAsync(data);

      setSent(true);
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      className="flex flex-col flex-wrap gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row flex-wrap gap-4">
        <div className="flex flex-1 flex-col flex-wrap">
          <label className="sr-only" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="rounded-lg border border-gray-700 bg-gray-900 p-4"
            required={true}
            placeholder="Full Name"
            minLength={3}
            maxLength={100}
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
          />
        </div>
        <div className="flex flex-1 flex-col">
          <label className="sr-only" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="rounded-lg border border-gray-700 bg-gray-900 p-4"
            required={true}
            placeholder="Email Address"
            minLength={5}
            maxLength={100}
            {...register("email", {
              required: true,
              minLength: 5,
              maxLength: 100,
            })}
          />
        </div>
      </div>
      <label className="sr-only" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        className="h-72 rounded-lg border border-gray-700 bg-gray-900 p-4"
        required={true}
        minLength={50}
        maxLength={500}
        placeholder="Message"
        {...register("message", {
          required: true,
          minLength: 50,
          maxLength: 500,
        })}
      />
      <div className="flex flex-row items-center gap-4 self-start">
        <Button type="submit">Submit</Button>
        {sent ? <p className="flex-1 text-sm text-gray-400">Sent!</p> : null}
        {error ? (
          <p className="flex-1 text-sm text-gray-400">{error.message}</p>
        ) : null}
      </div>
    </form>
  );
}
