import { Field } from "@components/Field";
import { Button } from "@components/Button";
import { Checkbox } from "@components/Checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductSchema, ProductInputs } from "./validation";
import SaveIcon from "@assets/svgs/save-icon.svg";

export const ProductForm = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductInputs>({ resolver: yupResolver(ProductSchema) });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 px-4 py-6 border-2 border-cs-blue-500">
        <div>
          <Field<ProductInputs> label="name" type="text"
            place="Enter name" register={register} error={errors.name?.message} />
        </div>

        <div className="flex gap-2">
          <Field<ProductInputs> label="price" type="text"
            place="Enter price" register={register} error={errors.price?.message} />
          <Field<ProductInputs> label="stock" type="text"
            place="Enter stock" register={register} error={errors.stock?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Description</label>
          <textarea rows={4} {...register("description")} placeholder="Enter description"
            className="w-full text-black outline-none px-2"></textarea>
          { errors.description && <p className="text-red-600">{errors.description.message}</p> }
        </div>

        <div className="flex justify-end">
          <Checkbox<ProductInputs> label="active" register={register}></Checkbox>
        </div>
        <Button text="Save" role="submit" icon={SaveIcon}></Button>
      </form>
    </div>
  );
};