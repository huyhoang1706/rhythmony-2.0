import { cn } from "@/lib/utils";

interface Props {
  background?: string;
}

export default function PlayingAnimation({ background }: Props) {
  return (
    <div className="absolute left-0 top-0 h-full w-full bg-opacity-50">
      <div className="flex h-full items-center justify-center">
        <div
          className={cn(
            "animate-wave mx-0.5 h-3 w-1 rounded",
            background ? background : "bg-white",
          )}
          style={{ animationDelay: "-0.4s" }}
        ></div>
        <div
          className={cn(
            "animate-wave mx-0.5 h-3 w-1 rounded",
            background ? background : "bg-white",
          )}
          style={{ animationDelay: "-0.2s" }}
        ></div>
        <div
          className={cn(
            "animate-wave mx-0.5 h-3 w-1 rounded",
            background ? background : "bg-white",
          )}
        ></div>
      </div>
    </div>
  );
}
