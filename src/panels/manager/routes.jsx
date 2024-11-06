import React from "react";
import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import {Layouts} from "@/core/layout";
import {ProfileShow, ProfileForm} from "@/panels/customer/pages/profile";
import {NotificationList} from "@/panels/customer/pages/notifications";
import {LoginPage, RegisterPage} from "@/modules/account/authentication/pages";
import {ErrorPage} from "@/pages/errors";
import {Authenticated} from "@refinedev/core";
import {CatchAllNavigate} from "@refinedev/react-router-v6";
import {BookForm, BookList, BookShow} from "@/panels/manager/pages/books/index.jsx";

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

                <Route index element={<Navigate to="/books" />} />
                <Route path="/profile">
                    <Route index element={<ProfileShow />}/>
                    <Route path="/profile/edit" element={<ProfileForm />}/>
                </Route>

                <Route path="/contributors" element={<Navigate to="/contributors/company" />} />

                <Route path="/contributors/person">
                    <Route index element={<BookList/>}/>
                    <Route path="/contributors/person/:id" element={<BookShow/>}/>
                    <Route path="/contributors/person/:id/:section" element={<BookShow/>}/>
                    <Route path="/contributors/person/create" element={<BookForm/>}/>
                    <Route path="/contributors/person/:id/edit" element={<BookForm/>}/>
                </Route>

                <Route path="/contributors/company">
                    <Route index element={<BookList/>}/>
                    <Route path="/contributors/company/:id" element={<BookShow/>}/>
                    <Route path="/contributors/company/:id/:section" element={<BookShow/>}/>
                    <Route path="/contributors/company/create" element={<BookForm/>}/>
                    <Route path="/contributors/company/:id/edit" element={<BookForm/>}/>
                </Route>

                <Route path="/moderators">
                    <Route index element={<BookList/>}/>
                    <Route path="/moderators/:id" element={<BookShow/>}/>
                    <Route path="/moderators/create" element={<BookForm/>}/>
                    <Route path="/moderators/:id/edit" element={<BookForm/>}/>
                </Route>

                <Route path="/books">
                    <Route index element={<BookList />} />
                    <Route path="/books/:id" element={<BookShow />} />
                    <Route path="/books/create" element={<BookForm />} />
                    <Route path="/books/:id/edit" element={<BookForm />} />
                </Route>

                <Route path="/articles">
                    <Route index element={<BookList />} />
                    <Route path="/articles/:id" element={<BookShow />} />
                    <Route path="/articles/create" element={<BookForm />} />
                    <Route path="/articles/:id/edit" element={<BookForm />} />
                </Route>

                <Route path="/speeches">
                    <Route index element={<BookList />} />
                    <Route path="/speeches/:id" element={<BookShow />} />
                    <Route path="/speeches/create" element={<BookForm />} />
                    <Route path="/speeches/:id/edit" element={<BookForm />} />
                </Route>

                <Route path="/videos">
                    <Route index element={<BookList />} />
                    <Route path="/videos/:id" element={<BookShow />} />
                    <Route path="/videos/create" element={<BookForm />} />
                    <Route path="/videos/:id/edit" element={<BookForm />} />
                </Route>

                {/*<Route path="/notifications">*/}
                {/*    <Route index element={<NotificationList />}/>*/}
                {/*    /!*<Route path="/notifications/:id" element={<NotificationShow />}/>*!/*/}
                {/*</Route>*/}

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