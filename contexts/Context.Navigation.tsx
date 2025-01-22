
import { useNavigation } from "@react-navigation/native";
import { createContext, ReactNode, useContext, useState } from "react";

interface ChildrenProps {
    children: ReactNode
}

interface NavigationContextProps {
    currentRoute: string 
    updateRoute: ( route: string ) => void
}

const NavigationContext = createContext<NavigationContextProps>({
    currentRoute: "",
    updateRoute: ( ) => { }
}); 

export const NavigationContextProvider = ({ children }: ChildrenProps) => {
    const [ currentRoute, setCurrentRoute ] = useState<string>("");
    const nav = useNavigation( );

    const updateRoute = ( route: string ) => {
        setCurrentRoute( route );
        nav.navigate({ name: route } as never);
    }

    return (
        <NavigationContext.Provider 
        value={{
            currentRoute, 
            updateRoute
        }}>
            { children }
        </NavigationContext.Provider>
    )
}

export const useNavigationContext = ( ) => {
    return useContext( NavigationContext );
}