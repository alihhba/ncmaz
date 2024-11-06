import React from "react";
import classNames from "@/utils/classNames";
import {FormItemInput} from "@/components/Form/Item/Input";
import {FormItemLabel} from "@/components/Form/Item/Label";
import {FormItemContainer} from "@/components/Form/Item/Container";
import {FormItemFile} from "@/components/Form/Item/File";
import {FormItemTextarea} from "@/components/Form/Item/Textarea";
import FormItemSelect from "@/components/Form/Item/Select";
import FormItemCategory from "@/components/Form/Item/Category";
import {FormItemController} from "@/components/Form/Item/Controller";
import FormItemServer from "@/components/Form/Item/Server";
import FormItemProject from "@/components/Form/Item/Project";
import FormItemService from "@/components/Form/Item/Service";
import FormItemStaff from "@/components/Form/Item/Staff";
import FormItemCustomer from "@/components/Form/Item/Customer";
import {FormItemMobile} from "@/components/Form/Item/Mobile";
import FormItemQuota from "@/components/Form/Item/Quota";
import {FormItemRange} from "@/components/Form/Item/Range";
import {FormItemNationalCode} from "@/components/Form/Item/NationalCode";
import {FormItemEmail} from "@/components/Form/Item/Email";

export const FormItem = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};

FormItem.Container = FormItemContainer;
FormItem.Label = FormItemLabel;
FormItem.Controller = FormItemController;
FormItem.Input = FormItemInput;
FormItem.Select = FormItemSelect;
FormItem.File = FormItemFile;
FormItem.Textarea = FormItemTextarea;
FormItem.Range = FormItemRange;

FormItem.Mobile = FormItemMobile;
FormItem.NationalCode = FormItemNationalCode;
FormItem.Email = FormItemEmail;

FormItem.Category = FormItemCategory;

FormItem.Quota = FormItemQuota;
FormItem.Server = FormItemServer;
FormItem.Project = FormItemProject;
FormItem.Service = FormItemService;
FormItem.Customer = FormItemCustomer;
FormItem.Staff = FormItemStaff;

export default FormItem;