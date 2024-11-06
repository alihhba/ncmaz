import React, {useState} from "react";
import {useBack} from "@refinedev/core";
import {useForm} from "@refinedev/react-hook-form";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import Form from "@/components/Form";
import PerformActionWithVerification from "@/modules/account/profile/components/PerformActionWithVerification";

export const CustomerPersonProfileEdit = ({data}) => {

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

                                    <Form.Item.Container htmlFor="last_name" label="نام خانوادگی" errors={errors.last_name}>
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
                                            validationSchema={{required: true}}
                                            register={register}
                                        />
                                    </Form.Item.Container>

                                    <Form.Item.Container htmlFor="mobile" label="شماره تماس" errors={errors.mobile}>
                                        <Form.Item.Mobile
                                            id="mobile"
                                            slug="mobile"
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
    }
;