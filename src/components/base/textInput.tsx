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
      className={`${className} w-full border-b bg-transparent p-3 text-primary outline-none sm:w-96 dark:text-primary-dark`}
      type={type}
      placeholder={placeholder}
    />
  );
}
