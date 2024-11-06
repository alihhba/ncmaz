import React, {useState} from "react";
import useResourceAction from "@/hooks/useResourceAction";
import {useNavigate} from "react-router-dom";
import {CustomerCompanyProfileEdit} from "@/panels/customer/pages/profile/company/form";
import {CustomerPersonProfileEdit} from "@/panels/customer/pages/profile/person/form";
import {useBack} from "@refinedev/core";
import {useForm} from "@refinedev/react-hook-form";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import PerformActionWithVerification from "@/modules/account/profile/components/PerformActionWithVerification";
import Form from "@/components/Form";
import departments from "@/modules/ticket/metadata/departments";
import statuses from "@/modules/account/user/metadata/statuses";

export const ProfileForm = ({children, className, ...restProps}) => {
    const {createUrl, fetchList} = useResourceAction("profile");
    const navigate = useNavigate();
    const fetchedData = fetchList();
    const {data = {}} = fetchedData?.data?.data || {};

    const {type} = data || {};

    const goBack = useBack();

    const [showVerification, setShowVerification] = useState(false);

    const onSubmit = () => {
        setShowVerification(true);
    };

    const {handleSubmit, register, control, formState: {errors}, getValues} = useForm({
        values: data,
    });

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="اطلاعات کاربری"
                    icon="user"
                >
                    <PerformActionWithVerification
                        showVerification={showVerification}
                        setShowVerification={setShowVerification}
                        values={getValues()}
                        resource="profile"
                        mobile={data.mobile}
                        afterSubmit={goBack}
                    >
                        <Form.Container withDivide withAction onSubmit={handleSubmit(onSubmit)}>
                            <Form.Section>

                                <Form.Item.Container htmlFor="first_name" label="نام" errors={errors.first_name}>
                                    <Form.Item.Input
                                        id="first_name"
                                        slug="first_name"
                                        validationSchema={{required: true}}
                                        register={register}
                                    />
                                </Form.Item.Container>

                                <Form.Item.Container htmlFor="last_name" label="تام خانوادگی" errors={errors.last_name}>
                                    <Form.Item.Input
                                        id="last_name"
                                        slug="last_name"
                                        validationSchema={{required: true}}
                                        register={register}
                                    />
                                </Form.Item.Container>

                                <Form.Item.Container htmlFor="national_code" label="کد ملی" errors={errors.national_code}>
                                    <Form.Item.NationalCode
                                        id="national_code"
                                        slug="national_code"
                                        type="number"
                                        validationSchema={{required: true}}
                                        register={register}
                                    />
                                </Form.Item.Container>

                                <Form.Item.Container htmlFor="mobile" label="شماره تماس" errors={errors.mobile}>
                                    <Form.Item.Mobile
                                        id="mobile"
                                        slug="mobile"
                                        type="number"
                                        validationSchema={{required: true}}
                                        register={register}
                                        disabled
                                    />
                                </Form.Item.Container>

                                <Form.Item.Container htmlFor="email" label="ایمیل" errors={errors.email}>
                                    <Form.Item.Email
                                        id="email"
                                        slug="email"
                                        validationSchema={{required: true}}
                                        register={register}
                                    />
                                </Form.Item.Container>

                                <Form.Item.Container htmlFor="postal_code" label="کد پستی" errors={errors.postal_code}>
                                    <Form.Item.Input
                                        id="postal_code"
                                        slug="postal_code"
                                        inputmode="numeric"
                                        type="number"
                                        validationSchema={{required: true}}
                                        register={register}
                                    />
                                </Form.Item.Container>

                                <Form.Item.Container htmlFor="address" label="آدرس" errors={errors.address}>
                                    <Form.Item.Input
                                        id="address"
                                        slug="address"
                                        validationSchema={{required: true}}
                                        register={register}
                                    />
                                </Form.Item.Container>

                            </Form.Section>
                        </Form.Container>
                    </PerformActionWithVerification>

                </Placeholder.Card>
            </Page.Content>
        </Page>
    );

};