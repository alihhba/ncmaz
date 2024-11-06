import dataProvider from "@refinedev/simple-rest";
import defaultDataProvider   from "./default";

export default {
    default: defaultDataProvider,
    // default: dataProvider("https://console.novin.cloud/api"),
    project: dataProvider("https://console.novin.cloud/api/os/identity"),
    server: dataProvider("https://console.novin.cloud/api/os/compute/project/ef9b01bb2dd549acb53b474dd6ad3325"),
    serverD: dataProvider("https://console.novin.cloud/api/os/compute"),
    identity: dataProvider("https://console.novin.cloud/api/os/identity"),
    compute: dataProvider("https://console.novin.cloud/api/os/compute"),
    os: dataProvider("https://console.novin.cloud/api/os"),
}