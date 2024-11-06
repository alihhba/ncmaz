import {LayoutWrapper} from "@refinedev/core";
import BaseLayout from "@/layouts/Base";

// functionality for transforming to resource.
// Add layout.

const defaultLayout = BaseLayout;

const configLayout = ({page: Page, layout}) => {
    return () => <LayoutWrapper Layout={layout ?? defaultLayout}><Page/></LayoutWrapper>;
};

export default [
    {
        name: "projects",
        meta: {label: "پروژه‌ها", icon: "layer-group",},
        identifier: "projects",
        list: '/projects',
        show: '/projects/:id',
        create: '/projects/create',
        edit: '/projects/:id/edit',
    },
    {
        name: "servers",
        identifier: "project_servers",
        options: {label: "سرورها", icon: "server",},
        list: '/projects/:project_id/servers',
        create: '/projects/:project_id/servers/create',
        show: '/projects/:project_id/servers/:id',
    },
    {
        name: "servers",
        identifier: "servers",
        options: {label: "سرورها", icon: "server",},
        list: '/servers',
        create: '/servers/create',
        show: '/servers/:id',
    },
    {
        name: "snapshots",
        identifier: "snapshots",
        options: {label: "اسنپ شات", icon: "camera",},
        list: '/server/:server_id/snapshots',
        create: '/server/:server_id/snapshots/create',
        // show: '/server/:server_id/snapshots/:id',
    },
    {
        name: "regions",
        options: {label: "دیتاسنتر", icon: "server", hide: true},
    },
    {
        name: "flavors",
        options: {label: "منابع", icon: "server", hide: true},
    },
    {
        name: "images",
        options: {label: "سیستم عامل", icon: "server", hide: true},
    },
    {
        name: "tickets",
        options: {label: "پشتیبانی", icon: "headphones",},
        list: '/tickets',
        create: '/tickets/create',
        show: '/tickets/:id',
    },
    {
        name: "ticket-replies",
        identifier: "ticket_replies",
        options: {hide: true},
    },
    // {
    //     name: "payments",
    //     options: {label: "پرداخت", icon: "credit-card",},
    //     list: '/payments',
    // },
    {
        name: "invoices",
        options: {label: "پرداخت", icon: "credit-card"},
        list: '/payments/invoices',
        show: '/payments/invoices/:id',
    },
    {
        name: "transactions",
        options: {label: "پرداخت", icon: "credit-card", hide: true},
        list: '/payments/transactions',
        // show: '/payments/transactions/:id',
    },
    // {
    //     name: "transactions",
    //     options: {label: "تراکنش‌ها", icon: "carousel",},
    //     list: '/transactions',
    //     show: '/transactions/:id',
    // },
    {
        name: "notifications",
        options: {label: "اطلاعیه‌ها", icon: "bell",},
        list: '/notifications',
        show: '/notifications/:id',
    },
    {
        name: "profile",
        show: "/profile",
        create: "/profile/edit",
        identifier: 'profile',
        meta: {
            label: 'پروفایل',
            hide: true,
        }
    },
];