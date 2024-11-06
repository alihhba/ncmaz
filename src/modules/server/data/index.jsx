import {axiosInstance as httpClient} from "@refinedev/simple-rest";
import {stringify} from "query-string";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJPU1VzZXJJZCI6IjQ5MjkwYTkzYjkzNjQ5YjBhNDE5MDljOTc1OGRhMGI1IiwiT1NEb21haW5JZCI6ImFkYjc3OThhN2Y5YzQzYTViOWYzYWJkNDFlYTIzN2FiIiwicm9sZSI6IkNVU1RPTUVSIiwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpc01vYmlsZVBob25lVmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE2ODM5ODA5MTYsImV4cCI6MTY5OTUzMjkxNn0.3SCUFqTQkgxffVN4vf9WFRyO7Tx-XwYaDaxKnw7ZAnM";

export const getProjects = async () => {

    const requestMethod = 'get';
    const url = "https://console.novin.cloud/api/os/identity/projects";
    const requestHeaders = {
        "Access-Token": token,
    };


    const {data, headers} = await httpClient[requestMethod](
        url,
        {
            headers: requestHeaders,
        },
    );

    const {projects} = data || {};

    return projects;
};

const createServer = async () => {
    const requestMethod = 'get';
    const url = "https://console.novin.cloud/api/os/identity/projects";
    const requestHeaders = {
        "Access-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJPU1VzZXJJZCI6IjQ5MjkwYTkzYjkzNjQ5YjBhNDE5MDljOTc1OGRhMGI1IiwiT1NEb21haW5JZCI6ImFkYjc3OThhN2Y5YzQzYTViOWYzYWJkNDFlYTIzN2FiIiwicm9sZSI6IkNVU1RPTUVSIiwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpc01vYmlsZVBob25lVmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE2ODM5ODA5MTYsImV4cCI6MTY5OTUzMjkxNn0.3SCUFqTQkgxffVN4vf9WFRyO7Tx-XwYaDaxKnw7ZAnM"
    };

    const {data, headers} = await httpClient[requestMethod](
        url,
        {
            headers: requestHeaders,
        },
    );

    const {projects} = data || {};

    return projects;
};