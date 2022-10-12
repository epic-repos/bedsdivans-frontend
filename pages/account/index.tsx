import { useLogout } from "network-requests/mutations";
import { useFetchUser } from "network-requests/queries";
import Router from "next/router";
import React from "react";

function AccountHome() {
    const { data } = useFetchUser();
    const { mutate } = useLogout();

    const handleLogout = () => {
        mutate();
        Router.push("/auth/login");
    };
    return (
        <div>
            <p>Your Are Logged In</p>
            <p>{JSON.stringify(data)}</p>
            <button onClick={handleLogout}>LOGOUT</button>
        </div>
    );
}

export default AccountHome;
