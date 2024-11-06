import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { CatchAllNavigate } from "@refinedev/react-router-v6";
import { Layouts } from "@/core/layout";
import { Authenticated } from "@refinedev/core";
import { ErrorPage } from "@/pages/errors";
import {
  LoginPage,
  RegisterPage,
} from "@/modules/account/authentication/pages";
import {
  DocumentForm,
  DocumentList,
  DocumentShow,
} from "@/panels/admin/pages/documents";
import {
  CustomerCompanyForm,
  CustomerCompanyList,
  CustomerCompanyShow,
} from "@/panels/admin/pages/customers/company";
import {
  CustomerPersonForm,
  CustomerPersonList,
  CustomerPersonShow,
} from "@/panels/admin/pages/customers/person";
import {
  ManagerForm,
  ManagerList,
  ManagerShow,
} from "@/panels/admin/pages/managers";
import { StaffForm, StaffList, StaffShow } from "@/panels/admin/pages/staffs";
import {
  NotificationList,
  NotificationShow,
} from "@/panels/admin/pages/notifications";
import { ProfileForm, ProfileShow } from "@/panels/admin/pages/profile";

const AdminRoutes = ({ children, className, ...restProps }) => {
  return (
    <Routes>
      {/*for authenticated user.*/}
      <Route
        element={
          <Authenticated
            v3LegacyAuthProviderCompatible
            fallback={<CatchAllNavigate to="/login" />}
          >
            <Layouts.Base>
              <Outlet />
            </Layouts.Base>
          </Authenticated>
        }
      >
        <Route path="/documents">
          <Route index element={<DocumentList />} />
          <Route path="/documents/create" element={<DocumentForm />} />
          <Route path="/documents/:id/edit" element={<DocumentForm />} />
          <Route path="/documents/:id/:section" element={<DocumentShow />} />
          <Route path="/documents/:id" element={<DocumentShow />} />
        </Route>

        <Route index element={<Navigate to="/customers" />} />
        {/*<Route path="/dashboard" element={<Dashboard/>}/>*/}
        <Route path="/profile">
          <Route index element={<ProfileShow />} />
          <Route path="/profile/edit" element={<ProfileForm />} />
        </Route>

        <Route
          path="/customers"
          element={<Navigate to="/customers/company" />}
        />

        <Route path="/customers/person">
          <Route index element={<CustomerPersonList />} />
          <Route
            path="/customers/person/:id"
            element={<CustomerPersonShow />}
          />
          <Route
            path="/customers/person/:id/:section"
            element={<CustomerPersonShow />}
          />
          <Route
            path="/customers/person/create"
            element={<CustomerPersonForm />}
          />
          <Route
            path="/customers/person/:id/edit"
            element={<CustomerPersonForm />}
          />
        </Route>

        <Route path="/customers/company">
          <Route index element={<CustomerCompanyList />} />
          <Route
            path="/customers/company/:id"
            element={<CustomerCompanyShow />}
          />
          <Route
            path="/customers/company/:id/:section"
            element={<CustomerCompanyShow />}
          />
          <Route
            path="/customers/company/create"
            element={<CustomerCompanyForm />}
          />
          <Route
            path="/customers/company/:id/edit"
            element={<CustomerCompanyForm />}
          />
        </Route>

        <Route path="/managers">
          <Route index element={<ManagerList />} />
          <Route path="/managers/:id" element={<ManagerShow />} />
          <Route path="/managers/create" element={<ManagerForm />} />
          <Route path="/managers/:id/edit" element={<ManagerForm />} />
        </Route>

        <Route path="support/staffs">
          <Route index element={<StaffList />} />
          <Route path="/support/staffs/create" element={<StaffForm />} />
          <Route path="/support/staffs/:id" element={<StaffShow />} />
          <Route path="/support/staffs/:id/edit" element={<StaffForm />} />
        </Route>

        <Route path="/notifications">
          <Route index element={<NotificationList />} />
          <Route path="/notifications/:id" element={<NotificationShow />} />
        </Route>
      </Route>

      {/*Not Authenticated*/}
      <Route
        element={
          <Authenticated
            v3LegacyAuthProviderCompatible
            fallback={
              <Layouts.Auth>
                <Outlet />
              </Layouts.Auth>
            }
          >
            <Navigate to="/" />
          </Authenticated>
        }
      >
        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/*Error for authenticated*/}
      <Route
        element={
          <Authenticated v3LegacyAuthProviderCompatible>
            <Outlet />
          </Authenticated>
        }
      >
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
