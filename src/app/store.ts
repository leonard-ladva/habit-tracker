import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import habitsReducer from '../features/habitsSlice'
import sidepanelUiReducer from '../features/sidepanel/sidepanelUiSlice'

export const store = configureStore({
  reducer: {
	habits: habitsReducer,
	sidepanel: sidepanelUiReducer,
  },
})

// Infer the type of `store`
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch']
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>