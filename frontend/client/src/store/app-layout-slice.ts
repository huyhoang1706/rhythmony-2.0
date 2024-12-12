import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppLayoutState {
  isLeftSideBarCollapse: boolean;
  isRightSideBarOpen: boolean;
  isAuthModalOpen: boolean;
}

const appLayoutSlice = createSlice({
  name: "appLayout",
  initialState: {
    isLeftSideBarCollapse: false,
    isRightSideBarOpen: true,
    isAuthModalOpen: false,
  } as AppLayoutState,
  reducers: {
    toggleCollapseLeftSideBar: (state) => {
      state.isLeftSideBarCollapse = !state.isLeftSideBarCollapse;
    },
    setLeftSideBarCollapse: (state, action: PayloadAction<boolean>) => {
      state.isLeftSideBarCollapse = action.payload;
    },
    toggleOpenRightSideBar: (state) => {
      state.isRightSideBarOpen = !state.isRightSideBarOpen;
    },
    toggleAuthModal: (state) => {
      state.isAuthModalOpen = !state.isAuthModalOpen;
    },
  },
});

export const {
  toggleCollapseLeftSideBar,
  setLeftSideBarCollapse,
  toggleOpenRightSideBar,
  toggleAuthModal,
} = appLayoutSlice.actions;
export default appLayoutSlice.reducer;
