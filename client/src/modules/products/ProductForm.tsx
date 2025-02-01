import { useForm } from "react-hook-form";
import { Product } from "@core/models/Product";
import { Field } from "@components/common/Field";
import { Button } from "@components/common/Button";
import { Checkbox } from "@components/common/Checkbox";
import { TextArea } from "@components/common/TextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductSchema, ProductSchemaType } from "@core/schemas/ProductSchema";

import SaveIcon from "@assets/svgs/save-icon.svg";

interface Props {
  product?: Product;
};

interface Actions {
  onSubmit: (data: ProductSchemaType) => Promise<void>;
};

export const ProductForm = ({ onSubmit, product }: Props & Actions): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductSchemaType>({
    resolver: yupResolver(ProductSchema),
    defaultValues: { ...product },
  });

  const SubmitHandler = handleSubmit(onSubmit);

  return (
    <div test-id="product-form">
      <form onSubmit={SubmitHandler} className="flex flex-col gap-4 px-4 py-6">
        <div>
          <Field<ProductSchemaType> label="name" type="text"
            place="Enter name" register={register} error={errors.name?.message} />
        </div>

        <div className="flex gap-2">
          <Field<ProductSchemaType> label="price" type="text"
            place="Enter price" register={register} error={errors.price?.message} />
          <Field<ProductSchemaType> label="stock" type="text"
            place="Enter stock" register={register} error={errors.stock?.message} />
        </div>

        <TextArea<ProductSchemaType> rows={4} register={register} label="description"
          place="Enter description" error={errors.description?.message} />

        <div className="flex justify-end">
          <Checkbox<ProductSchemaType> label="active" register={register} />
        </div>

        <Button text="Save" role="submit" icon={SaveIcon} theme="primary"></Button>
        {/* {error && <p className="text-red-600 font-semibold text-center">{error.message}</p>} */}
      </form>
    </div>
  );
};