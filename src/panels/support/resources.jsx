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