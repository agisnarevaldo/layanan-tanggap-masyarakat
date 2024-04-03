interface ButtonProps {
  children: React.ReactNode;
  classname?: string;
}

export default function Button({ children, classname }: ButtonProps) {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-full bg-primary text-white ${classname}`}
    >
      {children}
    </button>
  );
}
