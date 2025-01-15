interface Props {
  children: React.ReactNode;
};

export const Page = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen bg-cs-blue-900 p-5">
      {children}
    </div>
  );
};