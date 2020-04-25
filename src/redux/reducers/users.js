import { SET_USER_INFO } from '../types'

const initialState = {
  info: { name: 'bossROD' }
}

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        info: {
          ...state.info,
          ...action.payload
        }
      }
    default: return state
  }
}

export default usersReducer