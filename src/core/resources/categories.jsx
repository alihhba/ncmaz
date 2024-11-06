import {CategoryCreate, CategoryList} from "@/pages/categories";

export default {
    name: "categories",
    icon: "category",
    options: {label: "دسته بندی"},
    list: CategoryList,
    create: CategoryCreate,
    edit: CategoryCreate,
};