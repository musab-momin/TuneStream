"use client";

import { fetchCurrentUser, setUser } from "@/features/user-details/user-slice";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { useEffect } from "react";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { supabaseClient } = useSessionContext();
  const user = useSupaUser();
  const userDetails = useAppSelector((state) => state.user?.userDetails);
  const isLoading = useAppSelector((state) => state.user?.isLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user && !userDetails && !isLoading) {
      dispatch(fetchCurrentUser(supabaseClient));
      dispatch(setUser(user));
    } else {
      dispatch(fetchCurrentUser(supabaseClient));
      dispatch(setUser(null));
    }
  }, [user]);

  return <>{children}</>;
};

export default UserProvider;
