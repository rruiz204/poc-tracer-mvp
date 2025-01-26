import { Button } from "@components/common/Button";
import { useListProduct } from "@core/hooks/product/useListProducts";

import AddIcon from "@assets/icons/add-icon.svg";
import RefreshIcon from "@assets/icons/refresh-icon.svg";

export const ProductOptions = (): JSX.Element => {
  const { ListProductHandler } = useListProduct();

  return (
    <div className="flex gap-3">
      <Button role="button" text="New Product" theme="primary" icon={AddIcon} />

      <Button role="button" text="Refresh" theme="primary" icon={RefreshIcon} 
        handler={ListProductHandler}/>
    </div>
  );
};