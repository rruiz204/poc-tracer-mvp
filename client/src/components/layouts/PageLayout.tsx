interface Props {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <div className="bg-cs-blue-900 min-h-screen w-screen py-5 px-9">
      {children}
    </div>
  );
};