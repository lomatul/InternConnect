import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGINADMIN':
      return { useradmin: action.payload}
    case 'LOGINSTUDENT':
        return { userstudent: action.payload}
    case 'LOGOUT':
        return { userstudent: null, useradmin:null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    userstudent: null,
    useradmin:null
    
  })

 

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    const adminuser= JSON.parse(localStorage.getItem('adminuser'))
    

    if (user) {
      dispatch({ type: 'LOGINSTUDENT', payload: user }) 
    }else if(adminuser){
      dispatch({type: 'LOGINADMIN', payload: adminuser})
    }
  }, [])

  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}