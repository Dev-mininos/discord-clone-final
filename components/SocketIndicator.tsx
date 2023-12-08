"use client";

import { useSocket } from "./providers/SocketProvider";
import { Badge } from "./ui/badge";
export const SocketIndicator = () => {
  const { isConnected } = useSocket();
  if (!isConnected) {
    return (
      <Badge
        variant={"outline"}
        className="border-none bg-yellow-600 text-white"
      >
        FallBack:Polling every 1s
      </Badge>
    );
  }
  return (
    <Badge
      variant={"outline"}
      className="border-none bg-emerald-600 text-white"
    >
      Live:Real-time updates
    </Badge>
  );
};
