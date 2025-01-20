import * as yup from "yup";
import { Field } from "../shared/Field";
import { Button } from "../shared/Button";
import { Checkbox } from "../shared/Checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import SaveIcon from "@assets/svgs/save-icon.svg";

const schema = yup.object({
  name: yup.string()
    .required("Name is a required field"),
  description: yup.string()
    .required("Description is a required field"),
  price: yup.number()
    .typeError("The price must be a valid number")
    .positive().required(),
  stock: yup.number()
    .typeError("The stock must be a valid number")
    .integer().required(),
  active: yup.boolean().required(),
});

type inputs = yup.InferType<typeof schema>;

export const ProductForm = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<inputs>({ resolver: yupResolver(schema) });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 px-4 py-6 border-2 border-cs-blue-500">
        <div>
          <Field<inputs> label="name" type="text"
            place="Enter name" register={register} error={errors.name?.message} />
        </div>

        <div className="flex gap-2">
          <Field<inputs> label="price" type="text"
            place="Enter price" register={register} error={errors.price?.message} />
          <Field<inputs> label="stock" type="text"
            place="Enter stock" register={register} error={errors.stock?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Description</label>
          <textarea rows={4} {...register("description")} placeholder="Enter description"
            className="w-full text-black outline-none px-1"></textarea>
          { errors.description && <p className="text-red-600">{errors.description.message}</p> }
        </div>

        <div className="flex justify-end">
          <Checkbox<inputs> label="active" register={register}></Checkbox>
        </div>
        <Button text="Save" role="submit" icon={SaveIcon}></Button>
      </form>
    </div>
  );
};