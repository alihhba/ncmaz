import React from "react";
import classNames from "@/utils/classNames";
import Page from "@/components/Page";
import StatusListBox from "@/pages/posts/components/actions/status";
import Icon from "@/components/Icon";
import Form from "@/components/Form";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";

export const ProfilePage = ({children, className, ...restProps}) => {
    return (
        <Page>
            <Page.Content>
                <Placeholder.Card title="اطلاعات کاربری" icon="user" className="col-span-3"
                meta={(<button
                    className="flex w-24 ms-2 justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                    ثبت
                </button>)}
                >
                    <Form.Container>
                        <Form.Section>
                            <Form.Item.Container htmlFor="name" label="نام ثبت شده شرکت">
                                <Form.Item.Input
                                    id="name"
                                    name="name"
                                    value="فناوران نوین"
                                />
                            </Form.Item.Container>


                            <Form.Item.Container htmlFor="number" label="شماره ثبت">
                                <Form.Item.Input
                                    id="number"
                                    type="text"
                                    value="256475"
                                    className="text-left"
                                    style={{direction: 'ltr'}}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="national_id" label="شناسه ملی">
                                <Form.Item.Input
                                    id="national_id"
                                    type="text"
                                    className="text-left"
                                    value="14002365951"
                                    style={{direction: 'ltr'}}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="code" label="کد اقتصادی">
                                <Form.Item.Input
                                    id="code"
                                    type="text"
                                    value="14002365951"
                                    className="text-left"
                                    style={{direction: 'ltr'}}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="mobile" label="شماره تلفن همراه">
                                <Form.Item.Input
                                    id="mobile"
                                    type="text"
                                    value="09121234567"
                                    disabled
                                    className="text-left bg-gray-50"
                                    style={{direction: 'ltr'}}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="email" label="ایمیل">
                                <Form.Item.Input
                                    id="email"
                                    type="text"
                                    value="test@example.com"
                                    className="text-left"
                                    style={{direction: 'ltr'}}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="zip_code" label="کد پستی">
                                <Form.Item.Input
                                    id="zip_code"
                                    type="text"
                                    value="1376598547"
                                    className="text-left"
                                    style={{direction: 'ltr'}}
                                />
                            </Form.Item.Container>

                            <Form.Item.Container htmlFor="address" label="آدرس">
                                <Form.Item.Input
                                    id="address"
                                    type="text"
                                    value="تهران، خیابان انقلاب، کوچه دوم"
                                />
                            </Form.Item.Container>

                        </Form.Section>
                        {/*<div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5 pt-5">*/}
                        {/*    <button*/}
                        {/*        className="btn btn-secondary w-24">بازگشت*/}
                        {/*    </button>*/}
                        {/*    <button*/}
                        {/*        className="flex w-24 ms-2 justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"*/}
                        {/*    >*/}
                        {/*        ثبت*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </Form.Container>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};