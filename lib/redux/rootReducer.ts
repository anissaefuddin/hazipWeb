/* Instruments */
import { counterSlice } from './slices'
import { dataAppSlice } from './slices/dataApp'

export const reducer = {
  appData: dataAppSlice.reducer,
  counter: counterSlice.reducer
}
