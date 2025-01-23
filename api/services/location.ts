import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../firebase"

const LocationCollection = collection(db, 'locations');

export const getAllLocations = async ( ) => {
    const snapshot = await getDocs(LocationCollection);

    let locations = snapshot.docs.map(( doc ) => {
        return doc.data( );
    })

    return locations;
}