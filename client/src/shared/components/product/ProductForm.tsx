import * as yup from "yup";
import { Field } from "../shared/Field";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().positive().required(),
  stock: yup.number().integer().required(),
  active: yup.boolean().required(),
});

type inputs = yup.InferType<typeof schema>;

export const ProductForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm<inputs>({ resolver: yupResolver(schema) });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="border-2 border-cs-blue-500">
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <Field<inputs> label="name" type="text"
          place="Enter name" register={register} />

        <Field<inputs> label="description" type="text"
          place="Enter description" register={register} />

        <Field<inputs> label="price" type="text" register={register} />
        <Field<inputs> label="stock" type="text" register={register} />
      </form>
    </div>
  );
};