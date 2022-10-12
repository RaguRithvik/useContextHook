import { createContext, useState, useContext} from "react";

export const userContext = createContext({
    user: null,
    login : () =>{},
    logout : () =>{},
})
const usere = { name: "Guest", itGuestUser:true }

export function UsercontextProvider({children}){
    const [user, setusers] = useState(usere)
    function login(data){
        setusers({name: data, itGuestUser:false})
    }
    function logout(){
        setusers(usere)
    }
    return <userContext.Provider value={{user, login, logout}}> {children} </userContext.Provider>
}

export function PassUsersConetxt() {

    const { user, login, logout } = useContext(userContext)
    return { user, login, logout }
}