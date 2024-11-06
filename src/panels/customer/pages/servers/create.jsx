import React, {useEffect, useState} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import ServerSteps from "@/modules/server/components/steps";
import ServerSpecification from "@/modules/server/components/specifications/sections";
import {useCreate, useCustom, useGetToPath, useGo, useList, useParsed} from "@refinedev/core";
import {data} from "autoprefixer";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

export const ServerCreate = () => {

    const [searchParams] = useSearchParams();

    useEffect(() => {
        setProjectId(searchParams.get("project_id") || null);
    }, [searchParams]);

    const [projectId, setProjectId] = useState(null);
    const [image, setImage] = useState({});
    const [flavor, setFlavor] = useState({});

    // const projects = getProjects();

    // const requestMethod = 'post';
    // const url = "https://console.novin.cloud/api/os/server";
    // const requestHeaders = {
    //     "Access-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJPU1VzZXJJZCI6IjQ5MjkwYTkzYjkzNjQ5YjBhNDE5MDljOTc1OGRhMGI1IiwiT1NEb21haW5JZCI6ImFkYjc3OThhN2Y5YzQzYTViOWYzYWJkNDFlYTIzN2FiIiwicm9sZSI6IkNVU1RPTUVSIiwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpc01vYmlsZVBob25lVmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE2ODM5ODA5MTYsImV4cCI6MTY5OTUzMjkxNn0.3SCUFqTQkgxffVN4vf9WFRyO7Tx-XwYaDaxKnw7ZAnM"
    // };



    // const {mutate} = useCreate();

    // const {data: regionMD} = useList({
    //     resource: 'regions',
    //     dataProviderName: 'identity',
    //     meta: {
    //         headers: requestHeaders,
    //     },
    // });

    // const regions = regionMD?.data;

    const onChangeImage = values => {
        setImage(values)
    };

    const onChangeFlavor = values => {
        setFlavor(values);
    };

    // const finalSubmit = () => {
    //     const preData = {
    //         "region": "RegionOne",
    //         "project_id": "ef9b01bb2dd549acb53b474dd6ad3325",
    //         "isMicrosoft": false,
    //         "count": 1,
    //         "volume": "local",
    //         "flavorPrice": 0.1,
    //         "vat": 0.020000000000000004,
    //         "sum": 0.12000000000000001,
    //     };
    //
    //     const formData = {
    //         "name": "T102",
    //         "flavorRef": "c1",
    //         "imageRef": "c66e9dc3-db91-4322-a5bd-1c51954cfb30",
    //     };
    //     mutate({
    //         resource: 'server',
    //         dataProviderName: 'os',
    //         method: requestMethod,
    //         meta: {
    //             headers: requestHeaders,
    //         },
    //         values: {
    //             ...preData,
    //             ...formData,
    //             name: "S ". Math.random() * 100
    //         },
    //         onSuccess: () => {},
    //     });
    // }

    const [finalData, setFinalData] = useState({});

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

    const {mutate: createServer} = useCreate();

    const navigate = useNavigate();

    const finalSubmit = ({name}) => {
        const {datacenter = {}, image = {}, flavor = {}, access = {}} = finalData || {};
        createServer({
            resource: "servers",
            values: {
                name,
                datacenter: datacenter.title,
                image_id: image.id,
                flavor_id: flavor.id,
                access: access.title,
                project_id: projectId || null,
            }
        }, {
            onSuccess: () => {
                navigate(projectId ? `/projects/${projectId}` : "/servers");
            }
        });
    }

    const nextStep = (currentStepData = {}) => {
        if (currentStep === steps.length - 1) {
            finalSubmit(currentStepData);

            return;
        }

        let newSteps = steps;
        steps[currentStep] = {...steps[currentStep], status: 'complete'};
        steps[currentStep + 1] = {...steps[currentStep + 1], status: 'current'}
        setSteps([...newSteps]);
        setCurrentStep(currentStep + 1);
    };


    console.log(finalData);

    const [steps, setSteps] = useState([
            {
                id: 'datacenter',
                name: 'انتخاب دیتاسنتر',
                description: 'توضیحات این مرحله از ساخت سرور',
                href: '#',
                status: 'current',
                icon: 'datacenter',
                component: ServerSpecification.Datacenter,
            },
            {
                id: 'image',
                name: 'انتخاب سیستم عامل',
                description: 'توضیحات این مرحله از ساخت سرور توضیحات این مرحله از ساخت سرور توضیحات این مرحله از ساخت سرور',
                href: '#',
                status: 'upcoming',
                icon: 'image',
                component: ServerSpecification.Image,
            },
            {
                id: 'flavor',
                name: 'منابع سرور',
                description: 'توضیحات این مرحله از ساخت سرور',
                href: '#',
                status: 'upcoming',
                icon: 'flavor',
                component: ServerSpecification.Flavor
            },
            {
                id: 'access-control',
                name: 'دسترسی به سرور',
                description: 'توضیحات این مرحله از ساخت سرور',
                href: '#',
                status: 'upcoming',
                icon: 'key',
                component: ServerSpecification.AccessControl,
            },
            {
                id: 'submit',
                name: 'تایید نهایی',
                description: 'توضیحات این مرحله از ساخت سرور',
                href: '#',
                status: 'upcoming',
                icon: 'upload-cloud',
                component: ServerSpecification.Submit,
            },
        ]
    );

    const [currentStep, setCurrentStep] = useState(0);

    const onChangeState = () => {

    };

    const StepComponent = steps[currentStep].component;

    return (
        <Page>
            <Page.Content>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-4 lg:gap-4">
                    <div>
                        <ServerSteps steps={steps} onSelectStep={onChangeState}/>
                    </div>
                    <Placeholder.Card
                        title={steps[currentStep].name} icon={steps[currentStep].icon}
                        className="col-span-3 flex flex-col lg:min-h-[80vh]"
                        bodyProps={{className: 'flex-grow flex flex-col'}}
                    >
                        <StepComponent onPrevStep={prevStep} onNextStep={nextStep} data={finalData} setData={setFinalData} />
                        {/*<div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5 pt-5">*/}
                        {/*    <button*/}
                        {/*        onClick={prevStep}*/}
                        {/*        className="btn btn-secondary w-24">قبلی*/}
                        {/*    </button>*/}
                        {/*    <button*/}
                        {/*        onClick={currentStep === steps.length - 1 ? finalSubmit : nextStep}*/}
                        {/*        className="flex w-24 ms-2 justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"*/}
                        {/*    >*/}
                        {/*        {currentStep === steps.length - 1 ? 'ایجاد' : 'بعدی'}*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </Placeholder.Card>
                </div>
            </Page.Content>
        </Page>
    );
};