// components/FeatureModal.tsx
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

interface FeatureModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function FeatureModal({ open, onClose, title, content }: FeatureModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader className="flex justify-between items-center">
          <DialogTitle>{title}</DialogTitle>
          <DialogClose asChild>
            <button onClick={onClose} className="text-gray-400 hover:text-red-500">
              <X />
            </button>
          </DialogClose>
        </DialogHeader>
        <div className="text-gray-700 mt-4">
          <p>{content}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
