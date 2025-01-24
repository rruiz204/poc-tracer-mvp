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
    bgColor: "#00c853",
    bgHover: "",
    txtColor: "text-white"
  },
  negative: {
    bgColor: "#d32f2f",
    bgHover: "",
    txtColor: "text-white"
  },
};