import React from "react";
import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import {Layouts} from "@/core/layout";
import {ProfilePage} from "@/pages/profile";
import {ErrorPage} from "@/pages/errors";
import {ServerList, ServerShow} from "@/modules/server/pages";
import {InvoiceList, InvoiceShow} from "@/modules/payment/sub-modules/invoice/pages";
import {TransactionList, TransactionShow} from "@/modules/payment/sub-modules/transaction/pages";
import {TicketList, TicketShow, TicketCreate, TicketEdit} from "@/panels/support/pages/tickets";
import {NotificationList, NotificationShow} from "@/panels/support/pages/notifications";
import {RegionList} from "@/modules/region/pages";
import {Authenticated} from "@refinedev/core";
import {CatchAllNavigate} from "@refinedev/react-router-v6";
import {LoginPage, RegisterPage} from "@/modules/account/authentication/pages";
import {ProfileForm, ProfileShow} from "@/panels/support/pages/profile";

const SupportRoutes = ({children, className, ...restProps}) => {

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
                <Route index element={<Navigate to="/tickets" />} />
                {/*<Route path="/dashboard" element={<Dashboard/>}/>*/}
                <Route path="/profile">
                    <Route index element={<ProfileShow />}/>
                    <Route path="/profile/edit" element={<ProfileForm />}/>
                </Route>
                {/*<Route path="/projects">*/}
                {/*    <Route index element={<ProjectList />}/>*/}
                {/*    <Route path="/projects/:id" element={<ProjectShow />}/>*/}
                {/*</Route>*/}
                <Route path="/tickets">
                    <Route index element={<TicketList />}/>
                    <Route path="/tickets/:id" element={<TicketShow />}/>
                    <Route path="/tickets/create" element={<TicketCreate />}/>
                    <Route path="/tickets/:id/edit" element={<TicketEdit />}/>
                </Route>
                <Route path="/notifications">
                    <Route index element={<NotificationList />}/>
                    <Route path="/notifications/:id" element={<NotificationShow />}/>
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

export default SupportRoutes;