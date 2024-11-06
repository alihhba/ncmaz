import React from "react";
import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import {Layouts} from "@/core/layout";
import {ProfileShow, ProfileForm} from "@/panels/customer/pages/profile";
import {ProjectList, ProjectShow, ProjectForm} from "@/panels/customer/pages/projects";
import {ServerCreate, ServerList, ServerShow} from "@/panels/customer/pages/servers";
import {InvoiceList, InvoiceShow} from "@/panels/customer/pages/invoices";
import {TransactionList, TransactionShow} from "@/panels/customer/pages/transactions";
import {TicketCreate, TicketList, TicketShow} from "@/panels/customer/pages/tickets";
import {NotificationList} from "@/panels/customer/pages/notifications";
import {LoginPage, RegisterPage} from "@/modules/account/authentication/pages";
import {ErrorPage} from "@/pages/errors";
import {TestPage} from '@/panels/customer/pages/test/TestPage';
import {Authenticated} from "@refinedev/core";
import {CatchAllNavigate} from "@refinedev/react-router-v6";

const CustomerRoutes = ({children, className, ...restProps}) => {

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
                <Route path="/test" element={<TestPage />} />
                {/*<Route path="/dashboard" element={<Dashboard/>}/>*/}
                <Route path="/profile">
                    <Route index element={<ProfileShow />}/>
                    <Route path="/profile/edit" element={<ProfileForm />}/>
                </Route>
                <Route path="/projects">
                    <Route index element={<ProjectList />}/>
                    <Route path="/projects/:id" element={<ProjectShow />}/>
                    <Route path="/projects/create" element={<ProjectForm />}/>
                    {/*<Route path="/projects/:id" element={<ServerList />}/>*/}
                </Route>

                <Route path="/projects/:project_id/servers">
                    <Route index element={<ServerList />}/>
                    <Route path="/projects/:project_id/servers/create" element={<ServerCreate />}/>
                    <Route path="/projects/:project_id/servers/:id/:section" element={<ServerShow />}/>
                    <Route path="/projects/:project_id/servers/:id" element={<ServerShow />} />
                </Route>

                <Route path="/servers">
                    <Route index element={<ServerList />}/>
                    <Route path="/servers/create" element={<ServerCreate />}/>
                    <Route path="/servers/:id/:section" element={<ServerShow />}/>
                    <Route path="/servers/:id" element={<ServerShow />} />
                </Route>
                {/*<Route*/}
                {/*    path="/payments"*/}
                {/*    element={<PaymentList><Outlet /></PaymentList>}*/}
                {/*>*/}
                {/*    <Route index element={<Navigate to="/payments/invoices" />}/>*/}
                {/*    <Route path="/payments/invoices" element={<InvoiceList />}/>*/}
                {/*    <Route path="/payments/invoices/:id" element={<InvoiceShow />}/>*/}
                {/*    <Route path="/payments/transactions" element={<TransactionList />}/>*/}
                {/*</Route>*/}
                <Route path="/payments" element={<Navigate to="/payments/invoices" />} />
                <Route path="/payments/invoices">
                    {/*<Route index element={<ServerList />}/>*/}
                    <Route index element={<InvoiceList />}/>
                    <Route path="/payments/invoices/:id" element={<InvoiceShow />}/>
                </Route>
                <Route path="/payments/transactions">
                    <Route index element={<TransactionList />}/>
                    <Route path="/payments/transactions/:id" element={<TransactionShow />}/>
                </Route>
                <Route path="/tickets">
                    {/*<Route index element={<ServerList />}/>*/}
                    <Route index element={<TicketList />}/>
                    <Route path="/tickets/create" element={<TicketCreate />}/>
                    <Route path="/tickets/:id" element={<TicketShow />}/>
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

export default CustomerRoutes;