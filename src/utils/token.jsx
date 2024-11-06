import React from "react";

const Token_Slug = 'token';
export const Token =  {
    set: token => {
        localStorage.setItem(Token_Slug, token);
    },

    get: () => {
        const token = localStorage.getItem(Token_Slug);

        if (token) {
            return `Bearer ${token}`;
        }

        return '';
    },
    exists: () => {
        return !!localStorage.getItem(Token_Slug);
    },
    remove: ()=>{
        localStorage.removeItem(Token_Slug);
    }
};

export default Token;