interface InputProps {
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
}

const Input = ({ type, placeholder, className }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`py-2 px-4 border rounded-full ${className}`}
    />
  );
};

export default Input;
