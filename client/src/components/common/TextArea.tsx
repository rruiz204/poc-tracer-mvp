import { FormatHelper } from "@core/helpers/FormatHelper";
import { UseFormRegister, Path, FieldValues } from "react-hook-form";

interface Props<V extends FieldValues> {
  rows: number;
  cols?: number;
  error?: string;
  place?: string;
  label: Path<V>;
  register: UseFormRegister<V>;
};

export const TextArea = <V extends FieldValues>({ label, error, rows, cols, register, place }: Props<V>): JSX.Element => {
  const capitalized = FormatHelper.capitalize(label);

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold">{capitalized}</label>

      <textarea rows={rows} cols={cols} {...register(label)} placeholder={place}
        className="w-full text-black outline-none px-2"/>

      { error && <p className="text-red-600">{error}</p> }
    </div>
  );
};