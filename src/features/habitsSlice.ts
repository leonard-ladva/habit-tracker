import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// 8601 format e.g. "2025-11-21"
type ISODate = string;

export interface Habit {
	id: string,
	name: string,
	color: string,
	logs: ISODate[],
}

export interface HabitsState {
	value: Habit[]
}

const initialState: HabitsState = {
	value: [],
}
export interface logAction {
	habitName: string,
	date: string
}
export const habitsSlice = createSlice({
	name: 'habits',
	initialState,
	reducers: {
		create: {
			reducer(state, action: PayloadAction<Habit>) {
			state.value.push(action.payload);
			},
			prepare(data) {
				return { payload: {id: nanoid(), ...data }}
			}
		},
		update: (state, action: PayloadAction<Habit>) => {
			const index = state.value.findIndex(h => h.id === action.payload.id);
			if (index === -1) return;
			state.value[index] = action.payload	
		},
		remove: (state, action: PayloadAction<Habit>) => {
			const index = state.value.findIndex(h => h.id === action.payload.id);
			if (index === -1) return;
			state.value.splice(index, 1);
		},
		addLog: (state, action: PayloadAction<logAction>) => {
			const { habitName, date } = action.payload;
			const habit = state.value.find(h => h.name === habitName);
			if (!habit) return;
			if (!habit.logs.includes(date)) habit.logs.push(date);
		},
		removeLog: (state, action: PayloadAction<logAction>) => {
			const { habitName, date } = action.payload;
			const habit = state.value.find(h => h.name === habitName);
			if (!habit) return;
			habit.logs = habit.logs.filter(d => d !== date);
		}, 
	},
	selectors: {
		selectHabits: (state) => state.value,
		selectHabitsById: (state, id: string | null) => state.value.find(habit => habit.id === id),
	}
})


export const { create, update, remove, addLog, removeLog } = habitsSlice.actions
export const { selectHabits, selectHabitsById } = habitsSlice.selectors

export default habitsSlice.reducer