import { type } from 'os'
import { useState } from 'react'

type AuthUser={
    name:string
    email:string
}

// export const Authu = () => {
//   const [user, setUser] = useState<AuthUser|null>(null)
//   const handleLogin = () => {
//     setUser({
//         name:"abbas",
//         email:"03333@gmai.com"
//     })
//   }
//   const handleLogout = () => {
//     setUser(null)
//   }
//   return (
//     <div>
//       <button onClick={handleLogin}>Login</button>
//       <button onClick={handleLogout}>Logout</button>
//       <div>
//         {user?.name}
//         {user?.email}

//       </div>
//     </div>
//   )
// }

export const Authu = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
      setUser({
          name:"abbas",
          email:"03333@gmai.com"
      })
    }
    // const handleLogout = () => {
    //   setUser({})
    // }
    return (
      <div>
        <button onClick={handleLogin}>Login</button>
        {/* <button onClick={handleLogout}>Logout</button> */}
        <div>
          {user.name}
          {user.email}
  
        </div>
      </div>
    )
  }