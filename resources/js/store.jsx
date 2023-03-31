import { createSlice, configureStore } from '@reduxjs/toolkit'

import { hipoteca } from './storefeacture/hipotecas'

export const store = configureStore({
  reducer:{ 
    hipo:hipoteca
    }
})