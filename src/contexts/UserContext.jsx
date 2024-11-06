import React, {createContext, useContext, useMemo, useState} from "react";

export const UserContext = createContext(null);


export const UserContextContainer = ({children}) => {
    const [userId, setUserId] = useState();

    const value = useMemo(() => (
        {id: 1, first_name: 'محمد', last_name: 'قرقچیان', userId, setUserId}
    ), [userId]);

    return (
        <UserContext.Provider value={value}>
            {/*{useMemo((children), [])}*/}
            {children}
        </UserContext.Provider>
    )
}

const Consumer = () => {
    const {first_name:firstName} = useContext(UserContext);

    return <div>{firstName}</div>
}

export const Application = () => {
    return (
        <UserContextContainer>
            Hi.
            <Consumer />
        </UserContextContainer>
    );
}