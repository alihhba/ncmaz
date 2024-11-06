import React, {useEffect, useState} from 'react';
import Link from "@/components/Link";

export default ({mobile: providedMobile, onSubmit}) => {

    const [mobile, setMobile] = useState('');
    const submit = (e) => {
        e.preventDefault();
        onSubmit(mobile);
    };

    useEffect(() => {
        setMobile(providedMobile)
    }, [providedMobile]);

    return (
        <form onSubmit={submit}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    شماره تلفن همراه
                </label>
                <div className="mt-2">
                    <input
                        id="mobile"
                        name="mobile"
                        autoComplete="mobile"
                        required
                        value={mobile}
                        onSubmit={submit}
                        pattern="^09\d{9}$"
                        onChange={e => {setMobile(e.target.value)}}
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                    />
                </div>
            </div>

            <div className="mt-8">
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                    ایجاد حساب
                </button>
            </div>

            <div className="flex items-center justify-between mt-6">
                <div className="text-sm">
                    <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
                        قبلا حساب کاربری ایجاد کرده اید؟ وارد شوید.
                    </Link>
                </div>
            </div>
        </form>
    );
};