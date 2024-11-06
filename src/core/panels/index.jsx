import guestResources from "@/panels/guest/resources";
import guestRoutes from "@/panels/guest/routes";

import customerResources from "@/panels/customer/resources.jsx";
import customerRoutes from "@/panels/customer/routes";

import accountingResources from "@/panels/accounting/resources.jsx";
import accountingRoutes from "@/panels/accounting/routes";

import supportResources from "@/panels/support/resources.jsx";
import supportRoutes from "@/panels/support/routes";

import managerResources from "@/panels/manager/resources.jsx";
import managerRoutes from "@/panels/manager/routes";

export const panels = {
  guest: {
    resources: guestResources,
    routes: guestRoutes,
  },
  customer: {
    resources: customerResources,
    routes: customerRoutes,
  },
  billing: {
    resources: accountingResources,
    routes: accountingRoutes,
  },
  support: {
    resources: supportResources,
    routes: supportRoutes,
  },
  manager: {
    resources: managerResources,
    routes: managerRoutes,
  },
};

export default panels;
