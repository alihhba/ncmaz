import React, {useEffect, useState} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import Icon from "@/components/Icon";
import ServerSteps from "@/modules/server/components/steps";
import ServerStepsHorizontal from "@/modules/server/components/steps-horizontal";
import ServerSpecification from "@/modules/server/components/specifications/sections";

export const ProjectCreate = () => {

    const [steps, setSteps] = useState([
            {
                id: 'datacenter',
                name: 'انتخاب دیتاسنتر',
                description: 'توضیحات این مرحله از ساخت سرور',
                href: '#',
                status: 'current',
                icon: 'datacenter',
                component: <ServerSpecification.Datacenter/>,
            },
            {
                id: 'image',
                name: 'انتخاب سیستم عامل',
                description: 'توضیحات این مرحله از ساخت سرور توضیحات این مرحله از ساخت سرور توضیحات این مرحله از ساخت سرور',
                href: '#',
                status: 'upcoming',
                icon: 'image',
                component: <ServerSpecification.Image/>,
            },
            {
                id: 'flavor',
                name: 'منابع سرور',
                description: 'توضیحات این مرحله از ساخت سرور',
                href: '#',
                status: 'upcoming',
                icon: 'flavor',
                component: <ServerSpecification.Flavor/>,
            },
            {
                id: 'access-control',
                name: 'دسترسی به سرور',
                description: 'توضیحات این مرحله از ساخت سرور',
                href: '#',
                status: 'upcoming',
                icon: 'key',
                component: <ServerSpecification.AccessControl/>,
            },
            {
                id: 'submit',
                name: 'تایید نهایی',
                description: 'توضیحات این مرحله از ساخت سرور',
                href: '#',
                status: 'upcoming',
                icon: 'upload-cloud',
                component: <ServerSpecification.Submit/>,
            },
        ]
    );

    const [currentStep, setCurrentStep] = useState(0);

    const onChangeState = () => {

    };

    const prevStep = () => {
        if (currentStep === 0) {
            return;
        }

        let newSteps = steps;
        steps[currentStep] = {...steps[currentStep], status: 'upcoming'};
        steps[currentStep - 1] = {...steps[currentStep - 1], status: 'current'}

        setSteps([...newSteps]);
        setCurrentStep(currentStep - 1);

    };

    const nextStep = () => {
        if (currentStep === steps.length - 1) {
            return;
        }

        let newSteps = steps;
        steps[currentStep] = {...steps[currentStep], status: 'complete'};
        steps[currentStep + 1] = {...steps[currentStep + 1], status: 'current'}
        setSteps([...newSteps]);
        setCurrentStep(currentStep + 1);
    };

    return (
        <Page>
            <Page.Content>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-4 lg:gap-4">
                    <ServerSteps steps={steps} onSelectStep={onChangeState}/>
                    <Placeholder.Card
                        title={steps[currentStep].name} icon={steps[currentStep].icon}
                        className="col-span-3 flex flex-col lg:min-h-[80vh]"
                        bodyProps={{className: 'flex-grow flex flex-col'}}
                    >
                        <div className="flex-grow">
                            {steps[currentStep].component}
                        </div>
                        {currentStep !== steps.length - 1 ? (
                            <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5 pt-5">
                                <button
                                    onClick={prevStep}
                                    className="btn btn-secondary w-24">قبلی
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="flex w-24 ms-2 justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                >
                                    بعدی
                                </button>
                            </div>
                        ) : null}
                    </Placeholder.Card>
                </div>
            </Page.Content>
        </Page>
    );
};