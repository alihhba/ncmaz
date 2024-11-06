import React from "react";

const headlessAuthProvider = {
    login: async ({ providerName, email }) => {
        if (providerName === "google") {
            window.location.href =
                "https://accounts.google.com/o/oauth2/v2/auth";
            return {
                success: true,
            };
        }

        if (providerName === "github") {
            window.location.href =
                "https://github.com/login/oauth/authorize";
            return {
                success: true,
            };
        }

        if (email) {
            localStorage.setItem("email", email);
            return {
                success: true,
                redirectTo: "/",
            };
        }

        return {
            success: false,
            error: {
                message: "Login failed",
                name: "Invalid email or password",
            },
        };
    },
    register: async ({ email, password }) => {
        if (email && password) {
            localStorage.setItem("email", email);
            return {
                success: true,
                redirectTo: "/",
            };
        }
        return {
            success: false,
            error: {
                message: "Register failed",
                name: "Invalid email or password",
            },
        };
    },
    updatePassword: async ({ password }) => {
        if (password) {
            //we can update password here
            return {
                success: true,
                redirectTo: "/login",
            };
        }
        return {
            success: false,
            error: {
                message: "Update password failed",
                name: "Invalid password",
            },
        };
    },
    forgotPassword: async ({ email }) => {
        if (email) {
            //we can send email with forgot password link here
            return {
                success: true,
                redirectTo: "/login",
            };
        }
        return {
            success: false,
            error: {
                message: "Forgot password failed",
                name: "Invalid email",
            },
        };
    },
    logout: async () => {
        localStorage.removeItem("email");
        return {
            success: true,
            redirectTo: "/",
        };
    },
    onError: async (error) => {
        console.error(error);
        return { error };
    },
    check: async () => {
        return localStorage.getItem("email")
            ? { authenticated: true }
            : {
                authenticated: false,
                redirectTo: "/login",
                error: {
                    message: "Check failed",
                    name: "Not authenticated",
                },
            };
    },
    getPermissions: async () => ["admin"],
    getIdentity: async () => ({
        id: 1,
        name: "Jane Doe",
        avatar: "https://unsplash.com/photos/IWLOvomUmWU/download?force=true&w=640",
    }),
};

export default headlessAuthProvider;