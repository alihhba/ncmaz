import React from "react";
import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import {Layouts} from "@/core/layout";
import {ErrorPage} from "@/pages/errors";
import {TicketList, TicketShow, TicketCreate, TicketEdit} from "@/panels/accounting/pages/tickets";
import {TransactionList, TransactionShow} from "@/panels/accounting/pages/transactions";
import {InvoiceList, InvoiceShow} from "@/panels/accounting/pages/invoices";
import {NotificationList, NotificationShow} from "@/panels/accounting/pages/notifications";
import {Authenticated} from "@refinedev/core";
import {CatchAllNavigate} from "@refinedev/react-router-v6";
import {LoginPage, RegisterPage} from "@/modules/account/authentication/pages";
import {ProfileForm, ProfileShow} from "@/panels/accounting/pages/profile";

const AccountingRoutes = ({children, className, ...restProps}) => {

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
                <Route path="/invoices">
                    <Route index element={<InvoiceList />}/>
                    <Route path="/invoices/:id" element={<InvoiceShow />}/>
                </Route>
                <Route path="/transactions">
                    <Route index element={<TransactionList />}/>
                    <Route path="/transactions/:id" element={<TransactionShow />}/>
                </Route>
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

export default AccountingRoutes;