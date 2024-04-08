interface ButtonProps {
  children: React.ReactNode;
  classname?: string;
}

export default function Button({ children, classname }: ButtonProps) {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-full bg-primary text-white ${classname} hover:bg-opacity-90`}
    >
      {children}
    </button>
  );
}
