"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/createServerModal";
import { InviteModal } from "../modals/inviteModal";
import { EditServerModal } from "../modals/EditServerModal";
import { MembersModal } from "../modals/ManageMembers";
import { CreateChannelModal } from "../modals/createChannelModal";
import { LeaveServerModal } from "../modals/LeaveServer";
import { DeleteServerModal } from "../modals/DeleteServer";

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
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
    </>
  );
};
