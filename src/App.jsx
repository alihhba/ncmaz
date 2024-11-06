import React, {useEffect, useMemo, useState} from "react";
import {Refine} from "@refinedev/core";
import {BrowserRouter} from "react-router-dom";

import config from './core/config';
import panels from '@/core/panels';
import {UserContext} from "@/contexts/UserContext";
import {Toaster, toast} from "react-hot-toast";
import Notification from "@/components/Notification";


function App() {

    const [role, setRole] = useState(localStorage.getItem("role") || "guest");

    const {resources, routes: Routes} = panels[role];

    const updateRole = newRole => {
        if (newRole !== role) {
            localStorage.setItem("role", newRole || "guest");
            setRole(newRole || "manager");
        }
    }

    const value = useMemo(() => {

        return (
            {role, updateRole}
        );
    }, [role]);

    return (
        <div className="App">
            <UserContext.Provider value={value}>
                <BrowserRouter>
                    <Refine
                        {...config}
                        resources={resources}
                        options={{
                            disableTelemetry: true,
                        }}
                    >
                        <Routes/>
                        <Toaster position="top-right" containerStyle={{inset: '2rem 1rem'}} />
                    </Refine>
                </BrowserRouter>
            </UserContext.Provider>
        </div>
    )
}

export default App
