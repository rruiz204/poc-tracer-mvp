interface Props {
  text: string;
  icon: string;
};

export const Button = ({ text, icon }: Props): JSX.Element => {
  return (
    <div className="bg-cs-blue-700 hover:bg-cs-blue-500 duration-200 text-white rounded-lg flex-1">
      <button role="button" className="flex justify-center items-center gap-1 w-full p-2">
        <img src={icon} height={20} width={20} />
        <p className="text-white font-semibold">{text}</p>
      </button>
    </div>
  );
};