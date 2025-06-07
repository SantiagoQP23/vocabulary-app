import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Word } from "@/shared/models/word.model";
import { EllipsisVerticalIcon } from "lucide-react";

interface WordCardProps {
  word: Word;
}

export const WordCard = ({ word }: WordCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{word.name}</CardTitle>
        <CardDescription>{word.type}</CardDescription>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="secondary" size="icon" className="size-8">
                <EllipsisVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{word.example}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button variant="outline">Review</Button>
      </CardFooter>
    </Card>
  );
};
