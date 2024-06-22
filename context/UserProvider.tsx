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
  const appUser = useAppSelector((state) => state.user?.user);
  const userDetails = useAppSelector((state) => state.user?.userDetails);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user && !appUser && !userDetails) {
      dispatch(fetchCurrentUser(supabaseClient));
      dispatch(setUser(user));
    } else if (!user) {
      dispatch(fetchCurrentUser(supabaseClient));
      dispatch(setUser(null));
    }
  }, [user]);

  return <>{children}</>;
};

export default UserProvider;
