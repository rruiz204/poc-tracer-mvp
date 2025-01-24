import { Themes, ButtonThemes } from "@components/themes/ButtonTheme";

type Theme = keyof Themes;
type Role = "submit" | "button";

interface Props {
  text: string;
  icon: string;
  theme: Theme;
  role: Role;
};

interface Actions {
  handler?: () => Promise<void> | void;
};

export const Button = ({ role, icon, text, theme, handler }: Props & Actions): JSX.Element => {
  const iconSize: number = 20;

  const { bgColor, bgHover, txtColor } = ButtonThemes[theme];

  return (
    <div className={`rounded-lg flex-1 duration-200 ${bgColor} ${bgHover}`}>
      <button role={role} onClick={handler} className="flex justify-center items-center gap-1 w-full p-2">
        <img src={icon} width={iconSize} height={iconSize} />
        <p className={`font-semibold ${txtColor}`}>{text}</p>
      </button>
    </div>
  );
};