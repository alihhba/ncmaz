import {useEffect, useMemo, useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import FormItemSelect from "@/components/Form/Item/Select";
import {useList} from "@refinedev/core";
import requestHeaders from "@/utils/requestHeaders";
import useResourceAction from "@/hooks/useResourceAction";
import {ReactSVG} from "react-svg";
import {flushSync} from "react-dom";

// const items = [
//     {id: 1, title: 'Ubuntu', icon: 'image-ubuntu', versions: [
//             {id: 1, value: '22.04', label: 22.04},
//             {id: 2, value: '20.04', label: 20.04},
//             {id: 3, value: '18.4', label: 18.04},
//         ]},
//     {id: 2, title: 'Windows', icon: 'image-windows', versions: [
//             {id: 1, value: '2012R2', label: '2012R2'},
//             {id: 2, value: '2016', label: 2016},
//             {id: 3, value: '2019', label: 2019},
//             {id: 3, value: '2022', label: 2022},
//         ]},
//     {id: 3, title: 'CentOS', icon: 'image-centos', versions: [
//             {id: 1, value: '6', label: 6},
//             {id: 2, value: '7', label: 7},
//         ]},
//     {id: 4, title: 'Debian', icon: 'image-debian', versions: [
//             {id: 1, value: '10', label: 10},
//             {id: 2, value: '11', label: 11},
//         ]},
// ];


const ImageSelect = ({value, onChange: mainOnchange, title = "برای ساخت سرور، یک سیستم عامل را انتخاب نمایید."}) => {

    const {fetchList} = useResourceAction("images");

    const {items: unpreparedItems} = fetchList({
        filters: [
            {field: 'status', operator: 'eq', value: 'active'},
            {field: 'per_page', operator: 'eq', value: -1},
        ],
    });

    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     setItems([...unpreparedItems]);
    // }, [unpreparedItems]);

    const items = useMemo(() => ([
        ...(new Set(unpreparedItems.map(({name: imageName}) => imageName)))
    ].map(imageName => {
        const versions = unpreparedItems.filter(({name}) => imageName === name)
        return {
            ...(versions?.[0] || {}),
            name: imageName,
            versions: versions,
        }
        })
    ), [unpreparedItems]);

    // const {data: imagesMD} = useList({
    //     resource: 'images',
    //     dataProviderName: 'compute',
    //     meta: {
    //         headers: requestHeaders,
    //     },
    // });

    // const images = imagesMD?.data;

    // const items = [
    //     {id: 1, title: 'Ubuntu', icon: 'image-ubuntu', versions: [
    //             {id: 1, value: '22.04', label: 22.04},
    //             {id: 2, value: '20.04', label: 20.04},
    //             {id: 3, value: '18.4', label: 18.04},
    //         ]},
    // ];


    // const items = [];
    //
    // for (const key in images) {
    //     if (images.hasOwnProperty(key)) {
    //         if (typeof images[key] === "undefined") {
    //             continue;
    //         }
    //
    //         items.push({
    //             ...itemsFakeData,
    //             title: key,
    //             versions: (images[key] || []).map(({id: versionId, name: versionName}) => ({
    //                 id: versionId,
    //                 value: versionName,
    //                 label: versionName,
    //             }))
    //         });
    //     }
    // }


    const [selectedImage, setSelectedImage] = useState({});
    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {
        if (!selectedImage?.name && !selectedItem?.id && items.length) {
            setSelectedImage(items[0]);
            setSelectedItem(items[0]?.versions?.[0]);
        }
    }, [items]);

    useEffect(() => {
        console.log(value);
        console.log(selectedItem);
        if (value?.id === selectedItem?.id) {
            return;
        }

        const currentImage = value && value.id ? items.find(({name: imageName}) => value?.name === imageName) : items[0];

        if((!selectedImage?.name && currentImage) || (currentImage?.name !== selectedImage.name)){
            setSelectedImage(currentImage);
        }

        const currentItem = value && value.id && currentImage ? value : currentImage?.versions?.[0];
        if ((!selectedItem?.id && currentItem) || currentItem?.id !== selectedItem?.id) {
            setSelectedItem(currentItem);
            console.log(selectedItem);
            console.log(currentItem);
        }

        console.log(value);
    }, [items, value]);

    useEffect(() => {
        if (typeof mainOnchange === "function") {
            mainOnchange(selectedItem)
        }
    }, [selectedItem]);

    console.log(selectedItem);

    return (
        <RadioGroup value={selectedImage} onChange={setSelectedImage}>
            <RadioGroup.Label className="text-base font-medium text-gray-900">{title}</RadioGroup.Label>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 max-w-2xl mx-auto">
                {items.map((item) => (
                    <RadioGroup.Option
                        key={item.id}
                        value={item}
                        className={({checked, active}) =>
                            classNames(
                                checked ? 'border-transparent' : 'border-gray-300',
                                active ? 'border-primary-600 ring-2 ring-primary-600' : '',
                                'relative flex cursor-pointer rounded-lg border bg-white shadow-sm focus:outline-none'
                            )
                        }
                    >
                        {({checked, active}) => (
                            <>
                <span className="flex flex-1">
                    <div
                        className="p-6 aspect-square bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
                        <ReactSVG src={item.logo?.url} className="w-12 h-12"/>
                    </div>
                  <span className="flex flex-col justify-center p-5 w-full">
                    <RadioGroup.Label as="span" className="block text-md font-medium text-gray-900 mb-1">
                      {item.name}
                    </RadioGroup.Label>
                      <div onClick={() => {setSelectedImage({...item})}}>
                          <FormItemSelect
                              value={checked && selectedItem?.id && selectedImage.name === item.name && selectedImage?.versions?.find(({id: imageVersionId}) => selectedItem.id === imageVersionId) ? selectedItem.id : item.versions?.[0]?.id}
                              slug={`${item.id}-version`}
                              options={item.versions || []}
                              optionsMapping={{label: 'version', value: 'id'}}
                              // onChange={value => {checked && selectedItem?.id !== value?.id ? setSelectedItem(value) : null}}
                              // onChange={value => {checked && selectedItem?.id !== value?.id ? setSelectedItem(value) : null}}
                              onChange={returnedValue => {
                                  !selectedImage?.name || selectedImage?.versions?.find(({id: imageVersionId}) => returnedValue.id === imageVersionId) ? setSelectedItem(returnedValue) : null
                              }}
                              // onChange={value => {
                              //     console.log(value);
                              //     console.log(checked);
                              //     console.log(currentImage);
                              //     console.log(selectedItem);
                              // }}
                              fullSubmit
                          />
                      </div>
                  </span>
                </span>
                                {/*<div className="p-5">*/}
                                {/*    <Icon*/}
                                {/*        type="check-circle"*/}
                                {/*        className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-primary-600')}*/}
                                {/*        aria-hidden="true"*/}
                                {/*    />*/}
                                {/*</div>*/}
                                <span
                                    className={classNames(
                                        active ? 'border' : 'border-2',
                                        checked ? 'border-primary-600' : 'border-transparent',
                                        'pointer-events-none absolute -inset-px rounded-lg'
                                    )}
                                    aria-hidden="true"
                                />
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}

export default ImageSelect;