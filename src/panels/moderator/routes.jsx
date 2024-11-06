import React from "react";
import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import {Layouts} from "@/core/layout";
import {ProfileShow, ProfileForm} from "@/panels/customer/pages/profile";
import {NotificationList} from "@/panels/customer/pages/notifications";
import {LoginPage, RegisterPage} from "@/modules/account/authentication/pages";
import {ErrorPage} from "@/pages/errors";
import {Authenticated} from "@refinedev/core";
import {CatchAllNavigate} from "@refinedev/react-router-v6";

const ContributorRoutes = ({children, className, ...restProps}) => {

    return (
        <Routes>

            {/*for authenticated user.*/}
            <Route
                element={
                    <Authenticated
                        v3LegacyAuthProviderCompatible
                        fallback={<CatchAllNavigate to="/login"/>}
                    >
                        <Layouts.Base>
                            <Outlet/>
                        </Layouts.Base>
                    </Authenticated>
                }
            >

                <Route index element={<Navigate to="/projects" />} />
                <Route path="/profile">
                    <Route index element={<ProfileShow />}/>
                    <Route path="/profile/edit" element={<ProfileForm />}/>
                </Route>

                <Route path="/notifications">
                    <Route index element={<NotificationList />}/>
                    {/*<Route path="/notifications/:id" element={<NotificationShow />}/>*/}
                </Route>

            </Route>

            {/*Not Authenticated*/}
            <Route
                element={
                    <Authenticated
                        v3LegacyAuthProviderCompatible
                        fallback={(
                            <Layouts.Auth>
                                <Outlet/>
                            </Layouts.Auth>
                        )}
                    >
                        <Navigate to="/"/>
                    </Authenticated>
                }
            >
                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/register"
                    element={<RegisterPage />}
                />
            </Route>


            {/*Error for authenticated*/}
            <Route
                element={
                    <Authenticated v3LegacyAuthProviderCompatible>
                        <Outlet/>
                    </Authenticated>
                }
            >
                <Route path="*" element={<ErrorPage/>}/>
            </Route>

        </Routes>
    );
};

export default ContributorRoutes;