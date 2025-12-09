import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type SidepanelMode = 'list' | 'new' | 'edit';
export type EditingId = string | null

export interface SidepanelUIState {
	sidepanelMode: SidepanelMode,
	editingId: EditingId,
}

const initialState: SidepanelUIState = {
	sidepanelMode: 'list',
	editingId: null
}

export const sidepanelUiSlice = createSlice({
	name: 'sidepanel',
	initialState: initialState,
	reducers: {
		setSidepanelMode(state, action: PayloadAction<SidepanelMode>) {
			state.sidepanelMode = action.payload;
		},
		startEditing(state, action: PayloadAction<EditingId>) {
			state.sidepanelMode = 'edit';
			state.editingId = action.payload;
		},
		stopEditing(state) {
			state.sidepanelMode = 'list';
			state.editingId = null;
		}
	},
	selectors: {
		selectMode: (state) => state.sidepanelMode,
	}
})

export const { setSidepanelMode, startEditing, stopEditing } = sidepanelUiSlice.actions;
export const { selectMode } = sidepanelUiSlice.selectors;

export default sidepanelUiSlice.reducer