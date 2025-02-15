import { UseFormRegister, Path, FieldValues } from "react-hook-form";

interface Props<V extends FieldValues> {
  label: Path<V>;
  register: UseFormRegister<V>;
};

export const Checkbox = <V extends FieldValues>({ label, register }: Props<V>) => {
  return (
    <div test-id="checkbox" className="w-max px-2">
      <label test-id="checkbox-label" className="flex gap-2 items-center cursor-pointer font-semibold">
        <input test-id="checkbox-input" type="checkbox" {...register(label)}
          className="appearance-none w-4 h-4 border-2 border-blue-500 rounded-sm bg-white mt-1 checked:bg-cs-blue-700" />
        Active
      </label>
    </div>
  );
};