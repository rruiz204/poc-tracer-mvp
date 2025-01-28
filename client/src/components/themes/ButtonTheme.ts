interface Properties {
  bgColor: string;
  bgHover: string;
  txtColor: string;
};

export interface Themes {
  primary: Properties;
  seconday: Properties;
  positive: Properties;
  negative: Properties;
};

export const ButtonThemes: Themes = {
  primary: {
    bgColor: "bg-cs-blue-700",
    bgHover: "hover:bg-cs-blue-500",
    txtColor: "text-white"
  },
  seconday: {
    bgColor: "#f5f5f5",
    bgHover: "",
    txtColor: "text-black"
  },
  positive: {
    bgColor: "bg-green-500",
    bgHover: "hover:bg-green-600",
    txtColor: "text-white"
  },
  negative: {
    bgColor: "bg-red-500",
    bgHover: "hover:bg-red-600",
    txtColor: "text-white"
  },
};