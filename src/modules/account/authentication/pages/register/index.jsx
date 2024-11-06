import React, {useContext, useEffect, useState} from "react";

import Type from './components/Type';
import Identification from './components/Identification';
import Contact from './components/Contact';
import Verification from './components/Verification';
import {useRegister} from "@refinedev/core";
import {UserContext} from "@/contexts/UserContext";
import {flushSync} from "react-dom";

export const RegisterPage = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const [data, setData] = useState({});

    const onSave = ({step, data: stepData}) => {
        setData({...data, [step]: stepData});

        nextStep(stepData);
    }

    const nextStep = (currentStepData) => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }else{
            finalSubmit(currentStepData);
        }
    };

    const prevStep = () => {
        if (currentStep >= 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const {mutate: register} = useRegister();
    const {updateRole} = useContext(UserContext);

    const finalSubmit = (verification) => {
        const {
            type_selection: typeSelection = {},
            identification = {},
            contact = {},
            // verification = {},
        } = data || {};

        register({
            ...typeSelection,
            ...identification,
            ...contact,
            ...verification,
            updateRole,
        })
    };

    const steps = [
        {
            slug: 'type_selection',
            component: <Type slug="type_selection" data={data} onSubmit={values => {onSave({step: 'type_selection', data: values})}} onBack={prevStep} />
        },
        {
            slug: 'identification',
            component: <Identification slug="identification" data={data} onSubmit={values => {onSave({step: 'identification', data: values})}} onBack={prevStep} />
        },
        {
            slug: 'contact',
            component: <Contact slug="contact" data={data} onSubmit={values => {onSave({step: 'contact', data: values})}} onBack={prevStep} />
        },
        {
            slug: 'verification',
            component: <Verification slug="verification" data={data} onSubmit={values => {onSave({step: 'verification', data: values})}} onBack={prevStep} />
        },
    ];

    const CurrentStepComponent = steps[currentStep]?.component;

    return (
        <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900">ایجاد حساب کاربری</h2>

            <div className="mt-16">
                {CurrentStepComponent}
            </div>
        </div>
    )
}
