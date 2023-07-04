import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ( {children} ) => {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

    const data = {
        email,
        setEmail,
        password,
        setPassword
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;