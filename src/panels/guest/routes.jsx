import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Layouts } from "@/core/layout";
import { ErrorPage } from "@/pages/errors";
import {
  LoginPage,
  RegisterPage,
} from "@/modules/account/authentication/pages/index.jsx";
import { Authenticated } from "@refinedev/core";
import { CatchAllNavigate } from "@refinedev/react-router-v6";
import { BookList, BookShow } from "@/panels/guest/pages/books/index.jsx";
import PodcastList from "./pages/podcasts/lists";
import PodcastShow from "./pages/podcasts/Show";
import VideosList from "./pages/videos/list";
import VideoShow from "./pages/videos/show";

const GuestRoutes = ({ children, className, ...restProps }) => {
  return (
    <Routes>
      {/*for authenticated user.*/}
      <Route
        element={
          <Authenticated
            v3LegacyAuthProviderCompatible
            // fallback={<CatchAllNavigate to="/login"/>}
          >
            <Layouts.Base>
              <Outlet />
            </Layouts.Base>
          </Authenticated>
        }
      ></Route>

      {/*Not Authenticated*/}
      <Route
        element={
          <Authenticated v3LegacyAuthProviderCompatible fallback={<Outlet />}>
            <Navigate to="/" />
          </Authenticated>
        }
      >
        <Route
          path="/login"
          element={
            <Layouts.Auth>
              <LoginPage />
            </Layouts.Auth>
          }
        />

        <Route
          path="/register"
          element={
            <Layouts.Auth>
              <RegisterPage />
            </Layouts.Auth>
          }
        />

        <Route path="/" element={<Navigate to="/books" />} />

        <Route
          element={
            <Layouts.Content>
              <Outlet />
            </Layouts.Content>
          }
        >
          <Route path="/books">
            <Route index element={<BookList />} />
            <Route path="/books/:id" element={<BookShow />} />
          </Route>
        </Route>

        <Route
          element={
            <Layouts.Content>
              <Outlet />
            </Layouts.Content>
          }
        >
          <Route path="/podcasts">
            <Route index element={<PodcastList />} />
            <Route path="/podcasts/:id" element={<PodcastShow />} />
          </Route>
        </Route>

        <Route
          element={
            <Layouts.Content>
              <Outlet />
            </Layouts.Content>
          }
        >
          <Route path="/videos">
            <Route index element={<VideosList />} />
            <Route path="/videos/:id" element={<VideoShow />} />
          </Route>
        </Route>
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

export default GuestRoutes;
