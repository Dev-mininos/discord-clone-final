import { Hash, Menu } from "lucide-react";
import { MobileToggle } from "../MobileToogle";
import UserAvatar from "../userAvatar";
import { SocketIndicator } from "../SocketIndicator";
import { useModal } from "@/hooks/use-modal-store";
import { ChatVideButton } from "./ChatVideoButton";
interface ChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  serverId,
  name,
  type,
  imageUrl,
}) => {
  return (
    <div className="text-md flex h-12 items-center border-b-2 border-neutral-200 px-3 font-semibold dark:border-neutral-800">
      <MobileToggle serverId={serverId} />
      {type === "channel" && (
        <Hash className="mr-2 h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      )}
      {type === "conversation" && (
        <UserAvatar src={imageUrl} className="mr-2 h-8 w-8 md:h-8 md:w-8" />
      )}
      <p className="text-md font-semibold text-black dark:text-white">{name}</p>
      <div className="ml-auto flex items-center">
        {type === "conversation" && <ChatVideButton />}
        <SocketIndicator />
      </div>
    </div>
  );
};
