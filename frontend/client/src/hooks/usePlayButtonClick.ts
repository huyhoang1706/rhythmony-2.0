import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { toggleAuthModal } from "@/store/app-layout-slice";

const usePlayButtonClick = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const handlePlayButtonClick = (playAction: () => void) => {
    if (!session) {
      dispatch(toggleAuthModal());
      return;
    }

    playAction();
  };

  return handlePlayButtonClick;
};

export default usePlayButtonClick;
