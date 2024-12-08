import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppLayoutState {
  isLeftSideBarCollapse: boolean;
  isRightSideBarOpen: boolean;
}

const appLayoutSlice = createSlice({
  name: "appLayout",
  initialState: {
    isLeftSideBarCollapse: false,
    isRightSideBarOpen: true,
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
  },
});

export const { toggleCollapseLeftSideBar, setLeftSideBarCollapse, toggleOpenRightSideBar } =
  appLayoutSlice.actions;
export default appLayoutSlice.reducer;
