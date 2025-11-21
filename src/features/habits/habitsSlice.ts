import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// 8601 format e.g. "2025-11-21"
type ISODate = string;
export interface Habit {
	name: string,
	color: string,
	logs: ISODate[],
}

// Define the TS type for the counter slice's state
export interface HabitsState {
  value: Habit[]
  status: 'idle' | 'loading' | 'failed'
}


// Define the initial value for the slice state
const initialState: HabitsState = {
  value: [
	{name: 'Workout', color: '#f51d1d', logs: [
		'2025-10-05',
		'2025-10-10',
		'2025-10-11',
		'2025-10-15',
		'2025-10-19',
		'2025-10-21'
	]}, 
	{name: 'Journal', color: '#5aff02', logs: []}
],
  status: 'idle'
}

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
	create: (state, action: PayloadAction<Habit>) => {
		// check for same name
		state.value.push(action.payload)
	},
	update: (state, action: PayloadAction<Habit>) => {
		// find same name habit and replace
		state.value.push(action.payload)
	},
	delete: (state, action: PayloadAction<Habit>) => {
		// find same name habit and delete
		state.value.push(action.payload)
	}
  }
})

// Export the generated action creators for use in components
export const { create, update } = habitsSlice.actions

// Export the slice reducer for use in the store configuration
export default habitsSlice.reducer