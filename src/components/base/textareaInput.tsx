interface IProps {
  placeholder: string;
  register: any;
  className?: string;
}

export default function TextareaInput({
  placeholder,
  register,
  className,
}: IProps) {
  return (
    <textarea
      {...register}
      rows={2}
      className={`${className} text-primary dark:text-primary-dark w-full resize-none border-b bg-transparent p-3 outline-none sm:w-96`}
      placeholder={placeholder}
    />
  );
}
