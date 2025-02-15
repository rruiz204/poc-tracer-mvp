interface Props {
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
};

interface Actions {
  onClose: () => void;
};

export const Modal = ({ children, isOpen, onClose, title }: Props & Actions): JSX.Element | null => {
  if (!isOpen) return null;

  return (
    <div test-id="modal" className="fixed inset-0 z-50 flex items-start pt-36 justify-center">
      <div test-id="modal-backdrop" className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose} />

      <div className="relative bg-cs-blue-900 rounded-lg w-full max-w-2xl mx-4 z-10 p-4">
        <div className="flex flex-col gap-4 text-white">
          <h2 test-id="modal-title" className="text-2xl font-semibold">{title}</h2>

          {children}
        </div>
      </div>
    </div>
  );
};