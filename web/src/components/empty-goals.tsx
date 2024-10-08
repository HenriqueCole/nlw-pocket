import logo from "../assets/logo-in-orbit.svg";
import letsStart from "../assets/lets-start.svg";

import { DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="Let's start" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        You haven't registered any goals yet, how about registering one right now?
      </p>

      <DialogTrigger asChild>
        <Button className="transition-all">
          <Plus className="size-4" />
          Register goal{" "}
        </Button>
      </DialogTrigger>
    </div>
  );
}
