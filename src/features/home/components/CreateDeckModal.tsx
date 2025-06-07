import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

export const CreateDeckModal = NiceModal.create(() => {
  const modal = useModal();

  return (
    <Dialog open={modal.visible} onOpenChange={modal.remove}>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New deck</DialogTitle>
            <DialogDescription>
              Create a new deck to start adding words.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
});
