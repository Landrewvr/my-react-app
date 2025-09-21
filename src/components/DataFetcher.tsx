import { useEffect, useState } from "react";
import type { UserType } from "../models/user";
import userList from "../utils/userList";
import User from "./user/User";


function DataFetcher() {
    const [data, setData] = useState<UserType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('the component is created');

        const timeOut = setTimeout(() => {
            console.log('data fetched');
            setData(userList);
            setIsLoading(false);
        }, 1500);

        return () => {
            console.log('component clean-up');
            clearTimeout(timeOut);
        };
    }, [])

    return (
        <div style={{ margin: "16px", padding: "8px", border: "1px solid gray" }}>
            {
                (isLoading) 
                ? `Loading user's list` 
                : data.map(user => <User key={user.id} user={user} />)
            }
        </div>
    );
}

export default DataFetcher;
