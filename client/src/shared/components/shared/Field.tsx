import { UseFormRegister, Path, FieldValues } from "react-hook-form";

interface Props<V extends FieldValues> {
  type: string;
  place?: string;
  label: Path<V>;
  register: UseFormRegister<V>;
};

export const Field = <V extends FieldValues>({ type, label, place, register }: Props<V>): JSX.Element => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-white">{label}</label>
      <input {...register(label)} type={type} placeholder={place}
        className="outline-none text-black px-2 py-1 rounded-md" />
    </div>
  );
};