import React from "react";

import authProvider from './authProvider';
import routerProvider from "./routerProvider";
import dataProvider from "./dataProvider";
import resources from "./resources";
import layout from './layout';
import i18nProvider from './i18nProvider';
import Dashboard from "../pages/dashboard";
import {ErrorPage} from "@/pages/errors";
import notificationProvider from './notificationProvider';

export default {
    authProvider,
    routerProvider,
    dataProvider,
    notificationProvider,
    resources,
    Layout: layout,
    i18nProvider,
    catchAll: <ErrorPage />,
    syncWithLocation: true,
};