import { useState } from "react";
import { Button } from "@components/Button";

import EditIcon from "@assets/svgs/edit-icon.svg";
import CancelIcon from "@assets/svgs/cancel-icon.svg";
import RemoveIcon from "@assets/svgs/remove-icon.svg";
import ConfirmIcon from "@assets/svgs/confirm-icon.svg"

interface Props {
  id: number;
};

export const ProductCardButtons = ({ id }: Props) => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const ConfirmFlag = () => setConfirm(!confirm);

  const RemoveHandler = () => {
    console.log(id);
  };

  const EditHandler = () => {
    console.log("edit");
  };

  return (
    <div>
      {!confirm
        ?
        <div className="flex gap-2 mb-2">
          <Button text="Edit" icon={EditIcon} onClick={EditHandler} role="button" />
          <Button text="Remove" icon={RemoveIcon} onClick={ConfirmFlag} role="button" />
        </div>
        :
        <div className="flex gap-2 mb-2">
          <Button text="Cancel" icon={CancelIcon} onClick={ConfirmFlag} role="button" />
          <Button text="Confirm" icon={ConfirmIcon} onClick={RemoveHandler} role="button" />
        </div>
      }
    </div>
  );
};