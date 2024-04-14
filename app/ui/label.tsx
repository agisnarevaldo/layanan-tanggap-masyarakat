interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  classname?: string;
}

const Label = ({ htmlFor, children, classname }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`text-secondary ${classname}`}>
      {children}
    </label>
  );
};

export default Label;
