import dataProvider, {axiosInstance as httpClient} from "@refinedev/simple-rest";

// export const apiUrl = "https://api.novincloud-tamin.deploy.nabn.ir/api";
export const apiUrl = "http://127.0.0.1:4176/api";
const simpleRestProvider = dataProvider(apiUrl, httpClient);

export const axiosInstance = httpClient;

const myDataProvider = {
    ...simpleRestProvider,
    update: async ({ resource, id, variables, meta }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { headers, method, spoof = true } = meta ?? {};
        const requestMethod = method ?? "patch";

        if (spoof) {
            if (variables instanceof FormData) {
                variables.append('_method', requestMethod);
            }else{
                variables['_method'] = requestMethod;
            }
        }



        const { data } = await httpClient[spoof ? "post" : requestMethod](url, variables, {
            headers,
        });

        return {
            data,
        };
    },
};

export default myDataProvider;