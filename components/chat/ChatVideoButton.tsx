"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import qs from "query-string";
import { Video, VideoOff } from "lucide-react";
import { ActionToolTip } from "../ActionToolTip";
export const ChatVideButton = () => {
  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname || "",
        query: {
          video: isVideo ? undefined : true,
        },
      },
      { skipNull: true },
    );
    router.push(url);
  };
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isVideo = searchParams?.get("video");
  const Icon = isVideo ? VideoOff : Video;
  const tooltipLabel = isVideo ? "End video call" : "Start video";
  return (
    <ActionToolTip side="bottom" label={tooltipLabel}>
      <button onClick={onClick} className="mr-4 transition hover:opacity-75">
        <Icon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
      </button>
    </ActionToolTip>
  );
};
