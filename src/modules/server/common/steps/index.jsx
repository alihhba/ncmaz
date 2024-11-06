import { Transition } from '@headlessui/react'
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import StepComplete from "@/modules/server/common/steps/partials/complete";

const Steps = ({items=[], current = 0, onSelect, className, ...restProps}) => {
    return (
        <nav aria-label="Progress">
            <ol role="list" className="overflow-hidden">
                {items.map((step, stepIdx) => (

                    <li key={step.name} className={classNames(stepIdx !== items.length - 1 ? 'pb-10' : '', 'relative')}>
                        {step.status === 'complete' ? (
                            <StepComplete
                                title={step.name}
                                icon={step.icon}
                                isLast={stepIdx === items.length - 1}
                                selectable
                                onSelect={() => {}}
                            >
                                {step.description}
                            </StepComplete>
                        ) : null}

                        {step.status === 'current' ? (
                            <>
                                {stepIdx !== items.length - 1 ? (
                                    <div className="absolute top-10 start-5 -ms-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                                ) : null}
                                <a href={step.href} className="group relative flex items-start" aria-current="step">
                  <span className="flex h-10 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-600 bg-white">
                      {/*<span className="h-2.5 w-2.5 rounded-full bg-primary-600" />*/}
                        <Icon type={step.icon} className="h-5 w-5 text-primary-600" aria-hidden="true"/>
                    </span>
                  </span>
                                    <span className="ms-4 flex min-w-0 flex-col">
                    <span className="text-md font-bold text-primary-600 mt-2.5">{step.name}</span>
                    <span className="text-sm text-gray-500 mt-1 text-justify leading-6">{step.description}</span>
                  </span>
                                </a>
                            </>
                        ) : null}


                        {step.status === 'upcoming' ? (
                            <>
                                {stepIdx !== items.length - 1 ? (
                                    <div className="absolute top-10 start-5 -ms-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                                ) : null}
                                <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-10 items-center" aria-hidden="true">

                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                      {/*<span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />*/}
                        <Icon type={step.icon} className="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true"/>
                    </span>
                  </span>
                                    <span className="ms-4 flex min-w-0 flex-col">
                    <span className="text-md font-medium text-gray-500 mt-2.5">{step.name}</span>
                    <span className="text-md text-gray-500 hidden">{step.description}</span>
                  </span>
                                </a>
                            </>

                        ) : null}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Steps;
