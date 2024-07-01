import { openModal } from "@/features/modal/modal-slice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export function useIsAuthenticated(cb?: (param?: any) => unknown) {
  const user = useAppSelector((state) => state.user?.user);
  const dispatch = useAppDispatch();

  function checkForAuth(cbParam?: any) {
    if (!user) {
      dispatch(openModal("AUTH"));
      return;
    }
    cb && cb(cbParam);
  }

  return checkForAuth;
}
