import React from 'react';

import BaseLayout from "@/layouts/Base";
import SecondLayout from "@/layouts/Second";
import ContentLayout from "@/layouts/Content";
import AuthLayout from "@/layouts/Auth";

const Layout = () => {}

Layout.Base = BaseLayout;
Layout.Second = SecondLayout;
Layout.Content = ContentLayout;
Layout.Auth = AuthLayout;

export const Layouts = Layout;

const currentLayout = Layout.Second;

export default currentLayout;
