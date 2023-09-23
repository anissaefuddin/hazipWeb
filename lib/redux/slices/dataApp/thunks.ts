/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchIdentityDataApp } from './fetchIdentityDataApp'
import { selectDataApp } from './selectors'
import { dataAppSlice } from './dataAppSlice'
import type { ReduxThunkAction } from '@/lib/redux'
import { Overview  } from '../interfaceData';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const addDataOverViewAsync = createAppAsyncThunk(
  'counter/fetchIdentityDataApp',
  async (data: Overview) => {
    const response = await fetchIdentityDataApp(data)

    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)
