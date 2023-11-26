"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/createServerModal";
import { InviteModal } from "../modals/inviteModal";

export const ModalProvider = () => {
  const [isMounted, setisMounted] = useState(false);
  useEffect(() => {
    setisMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateServerModal />
      <InviteModal />
    </>
  );
};
