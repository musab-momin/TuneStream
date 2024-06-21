"use client";

import { closeModal, openModal } from "@/features/modal/modal-slice";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import React, { useEffect } from "react";
import Modal from "../Modal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthModal = () => {
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();

  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();

  const onChange = (open: boolean) => {
    if (!open) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    if (session) {
      router.refresh();
      dispatch(closeModal());
    }
  }, [session, router, closeModal]);

  return (
    <Modal
      isOpen={isModalOpen}
      title="Welcome back"
      description="Login to your Account"
      onChange={onChange}
    >
      <Auth
        theme="dark"
        providers={["google"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
