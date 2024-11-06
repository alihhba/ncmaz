import React, {useEffect} from "react";
import Form from "@/components/Form";
import Placeholder from "@/components/Placeholder";
import {useForm, useInvalidate} from "@refinedev/core";
import useResourceForm from "@/hooks/useResourceForm";

const TicketReplySend = ({ticketId}) => {

    const invalidate = useInvalidate();

    const {register, control, watch, onSubmit, setValue, ...form} = useResourceForm({
        resource: "ticket-replies",
        action: "create",
        refineCoreProps: {
            onMutationSuccess: (data, variables, context, isAutoSave) => {
                invalidate({
                    resource: 'tickets',
                    invalidates: ['detail'],
                    id: ticketId,
                })
            },
        }
    });

    useEffect(()=>{
        setValue("ticket_id", ticketId);
    }, [ticketId]);

    const reset = () => {
        setValue('description', '');
        setValue('attachments', null);
    };

    return (
        <Placeholder.Card
            title="ارسال پاسخ"
            icon="pencil"
        >
            <Form.Container onSubmit={e => {onSubmit(e).then(()=>{reset();})}}>
                <Form.Section>
                    <Form.Item.Textarea
                        id="description"
                        slug="description"
                        placeholder="لطفا پاسخ خود را اینجا بنویسید ..."
                        register={register}
                        validationSchema={{required: true,}}
                    />
                </Form.Section>
                <Form.Section>
                    <Form.Item.File
                        id="attachments"
                        slug="attachments"
                        watch={watch}
                        register={register}
                        mimes={['jpg', 'png', 'pdf']}
                        multiple={false}
                    />
                    <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5 pt-5">
                        <button
                            className="flex w-24 ms-2 justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        >
                            ارسال
                        </button>
                    </div>
                </Form.Section>
                <Form.Section>

                </Form.Section>
            </Form.Container>
        </Placeholder.Card>
    );
};

export default TicketReplySend;