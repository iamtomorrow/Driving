
import { createContext, useState } from "react";
import { ChildrenProps } from "./Context.Navigation";

interface BookingContextProps {
    vehicle: string 
    location: string 
    schedule: string
}

export const BookingContext = createContext<BookingContextProps | null>(null);

export const BookingContextProvider = ({ children }: ChildrenProps) => {

    const [ vehicle, setVehicle ] = useState<string>("");
    const [ location, setLocation ] = useState<string>("");
    const [ schedule, setSchedule ] = useState<string>("");

    return (
        <BookingContext.Provider
        value={{
            vehicle,
            location,
            schedule
        }}>

        </BookingContext.Provider>
    )
}