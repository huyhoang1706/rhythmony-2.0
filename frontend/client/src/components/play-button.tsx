import { cn } from "@/lib/utils";

interface Props {
  playingElement: React.ReactNode;
  notPlayingElement: React.ReactNode;
  playing: boolean;
  onClick?: () => void;
  className?: string;
}

export default function PlayButton({
  playingElement,
  notPlayingElement,
  playing,
  onClick,
  className,
}: Props) {
  return (
    <button onClick={onClick} className={cn("relative", className)}>
      {playing ? playingElement : notPlayingElement}
    </button>
  );
}
