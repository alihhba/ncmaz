import {ProfilePage} from "@/pages/profile";

export default [
    {
        name: "tickets",
        options: {label: "پشتیبانی", icon: "headphones",},
        list: '/tickets',
        create: '/tickets/create',
        show: '/tickets/:id',
        edit: '/tickets/:id/edit',
    },
    {
        name: "ticket-replies",
        identifier: "ticket_replies",
        options: {hide: true},
    },
    {
        name: "transactions",
        options: {label: "تراکنش‌ها", icon: "credit-card",},
        list: '/transactions',
        // show: '/transactions/:id',
    },
    {
        name: "invoices",
        options: {label: "فاکتورها", icon: "invoice"},
        list: '/invoices',
        show: '/invoices/:id',
    },
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