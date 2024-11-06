import Link from "@/components/Link";

export const ErrorPage = () => {
    return (
        <>
            <div className="min-h-screen bg-white py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="mx-auto max-w-max">
                    <main className="sm:flex">
                        <p className="text-4xl font-bold tracking-tight text-primary-600 sm:text-5xl">404</p>
                        <div className="sm:ms-6">
                            <div className="sm:border-s sm:border-gray-200 sm:ps-6">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">متاسفانه صفحه مورد نظر یافت نشد.</h1>
                                <p className="mt-2 text-base text-gray-500">لطفا آدرس صفحه را بررسی نمایید و مجددا تلاش کنید.</p>
                            </div>
                            <div className="mt-10 flex space-s-3 sm:border-l sm:border-transparent sm:ps-6">
                                <Link
                                    to="/"
                                    className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                >
                                    بازگشت
                                </Link>
                                {/*<a*/}
                                {/*    href="#"*/}
                                {/*    className="inline-flex items-center rounded-md border border-transparent bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"*/}
                                {/*>*/}
                                {/*    ارتباط با پشتیبانی*/}
                                {/*</a>*/}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}