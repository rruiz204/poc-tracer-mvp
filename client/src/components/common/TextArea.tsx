import { FormatHelper } from "@core/helpers/FormatHelper";
import { UseFormRegister, Path, FieldValues } from "react-hook-form";

interface Props<V extends FieldValues> {
  rows: number;
  cols?: number;
  error?: string;
  place?: string;
  value?: any;
  label: Path<V>;
  register: UseFormRegister<V>;
};

export const TextArea = <V extends FieldValues>({ label, error, rows, cols, register, place, value }: Props<V>): JSX.Element => {
  const capitalized = FormatHelper.capitalize(label);

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold">{capitalized}</label>

      <textarea rows={rows} cols={cols} {...register(label)} placeholder={place}
        value={value} className="w-full text-black outline-none px-2"/>

      { error && <p className="text-red-600">{error}</p> }
    </div>
  );
};