interface ButtonProps {
  children: React.ReactNode;
  classname?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ children, classname }: ButtonProps) {
  return (
    <button
      className={`before:ease relative rounded-full bg-primary h-10 overflow-hidden border text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40 ${classname}`}
    >
      <span className="relative z-10 tracking-wide">{children}</span>
    </button>
  );
}
