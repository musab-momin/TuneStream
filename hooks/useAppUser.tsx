import { useAppSelector } from "./useRedux";

export const useAppUser = () => {
  const user = useAppSelector((state) => state.user);

  return user;
};
