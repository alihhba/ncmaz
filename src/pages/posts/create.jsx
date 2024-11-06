import React from "react";
import Page from '@/components/Page';
import Form from '@/components/Form';
import Icon from "@/components/Icon";
import StatusListBox from "@/pages/posts/components/actions/status";
import { useNavigation, useResource, useRouterContext } from "@refinedev/core";
import ResourceButton from "@/components/ResourceButton";

export const PostCreate = () => {

    const {goBack} = useNavigation();
    const {id} = useResource();

    return (
        <Page>
            <Page.Heading
                meta={
                    <>
                        <StatusListBox selected="published" items={[
                            {slug: "active", label: "فعال"},
                            {slug: "disabled", label: "غیرفعال"},
                        ]} />
                        <span className="inline-flex sm:shadow-sm">
                            <ResourceButton.Return className="rounded-none rounded-s-md" onClick={goBack} />
                            <ResourceButton.Delete className="rounded-none" id={id} />
                            <ResourceButton.Save className="rounded-none rounded-e-md" />
                      </span>
                    </>
                }
            >اطلاعات شفافیت</Page.Heading>
            <Page.Content>
                <Form.Container>
                    <Form.Section
                        // title="اطلاعات"
                        // description="اطلاعات ثبت شده در این فرم، در اپلیکیشن نمایش داده می شود."
                    >
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 py-5">
                            <Form.Item.Label
                                htmlFor="first_name">نام</Form.Item.Label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <Form.Item.Input
                                    id="first_name"
                                    name="first_name"
                                />
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 py-5">
                            <Form.Item.Label htmlFor="last_name">نام خانوادگی</Form.Item.Label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <Form.Item.Input
                                    id="last_name"
                                    name="last_name"
                                />
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 py-5">
                            <Form.Item.Label htmlFor="email">آدرس ایمیل</Form.Item.Label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <Form.Item.Input
                                    id="email"
                                    name="email"
                                />
                            </div>
                        </div>
                    </Form.Section>
                </Form.Container>
            </Page.Content>
        </Page>
    );
};