interface InputProps {
  id: string;
  type?:
    | "button"
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "week"
    | "month"
    | "datetime"
    | "datetime-local"
    | "color";
  placeholder: string;
  className?: string;
  autoComplete: string;
}

const Input = ({
  id,
  type,
  placeholder,
  className,
  autoComplete,
}: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`py-2 px-4 border rounded-full ${className}`}
      required
      autoComplete={autoComplete}
    />
  );
};

export default Input;
