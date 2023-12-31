import Button from "@/components/base/button";
import SectionHeader from "@/components/base/sectionHeader";
import SectionParagraph from "@/components/base/sectionParagraph";
import SectionTitle from "@/components/base/sectionTitle";
import Span from "@/components/base/span";
import TextInput from "@/components/base/textInput";
import TextareaInput from "@/components/base/textareaInput";
import axios from "axios";
import {
  TELEGRAM_API_KEY,
  TELEGRAM_API_URL,
  TELEGRAM_CHAT_ID,
} from "@/config/env";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [data, setData] = useState("");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      axios
        .post(`${TELEGRAM_API_URL}${TELEGRAM_API_KEY}`, {
          chat_id: TELEGRAM_CHAT_ID,
          parse_mode: "html",
          text: `Name: ${data.name}\n\nEmail: ${data.email}\n\nMessage: ${data.message}`,
        })
        .then((response) => {
          toast.custom(
            (t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } pointer-events-auto flex w-full max-w-md rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-slate-800`}
              >
                <div className="w-0 flex-1 p-10">
                  <div className="flex justify-center text-lg">
                    Your message is sent!
                  </div>
                </div>
              </div>
            ),
            { position: "bottom-center" },
          );
          reset();
        })
        .catch((err) => console.error("Failed to send contact data", err));

      console.log("Contact data is sent successfully!");
    } catch (err) {
      console.error("Failed to send contact data", err);
    }
  };

  return (
    <div id="contactme" className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <SectionTitle>Contact me</SectionTitle>
        <SectionHeader>Let me know</SectionHeader>
        <SectionParagraph>
          Waiting for your letter so we can start making your business better.{" "}
          <Span>
            I{"'"}m sure we{"'"}ll find a way around
          </Span>
        </SectionParagraph>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-10"
      >
        <div className="flex flex-col gap-4">
          {errors.name?.type === "required" ||
            errors.email?.type === "required" ||
            errors.message?.type === "required"}
          <TextInput
            register={register("name", { required: true })}
            placeholder="Name"
          />
          <TextInput
            register={register("email", { required: true })}
            type="email"
            placeholder="Email"
          />
          <TextareaInput
            register={register("message", { required: true })}
            placeholder="Message"
          />
          {(errors.name?.type === "required" ||
            errors.email?.type === "required" ||
            errors.message?.type === "required") && <p>Fill out all fields</p>}
        </div>
        <Button type="submit">Reach out</Button>
      </form>
    </div>
  );
}
