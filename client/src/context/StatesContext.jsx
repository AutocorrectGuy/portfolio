import { createContext, useState } from "react";

const StatesContext = createContext();

export const FuncProvider = ({ children }) => {

    return (
        <StatesContext.Provider >
            {children}
        </StatesContext.Provider>
    )
}

export default StatesContext;