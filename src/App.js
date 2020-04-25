import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { setUserInfo } from './redux/actions/users'

const App = () => {
  const users = useSelector(state => state.users)

  const dispatch = useDispatch()

  const handleOnClick = (type) => {
    if (type === 'name') {
      // props.setUserInfo({ name: 'bossROD' })
      dispatch(setUserInfo({ name: 'bossROD New' }))
    } else if (type === 'age') {
      // props.setUserInfo({ age: 23 })
      dispatch(setUserInfo({ age: 23 }))
    } else {
      // props.setUserInfo({ gender: 'Male' })
      dispatch(setUserInfo({ gender: 'Male' }))
    }
  }

  console.log("users: ", users)

  return (
    <div>
      <button onClick={() => handleOnClick('name')}>Add Name</button>
      <button onClick={() => handleOnClick('age')}>Add Age</button>
      <button onClick={() => handleOnClick('gender')}>Add Gender</button>
    </div>  
  )
}

// const mapStateToProps = state => {
//   return {
//     users: state.users
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     setUserInfo
//   }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App