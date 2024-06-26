interface IProps {
  placeholder: string;
  register: any;
  type?: "text" | "email";
  className?: string;
}

export default function TextInput({
  placeholder,
  register,
  type = "text",
  className,
}: IProps) {
  return (
    <input
      {...register}
      className={`${className} w-full border-b bg-transparent p-3 outline-none sm:w-96`}
      type={type}
      placeholder={placeholder}
    />
  );
}
