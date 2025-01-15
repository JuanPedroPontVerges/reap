import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <Link href="/">
      <Button variant="ghost" size="icon">
        <ArrowLeft className="h-4 w-4" />
      </Button>
    </Link>
  );
}
