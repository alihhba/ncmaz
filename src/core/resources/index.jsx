import customerResources from '@/panels/customer/resources.jsx';
import adminResources from '@/panels/admin/resources.jsx';
import accountingResources from '@/panels/accounting/resources.jsx';
import supportResources from '@/panels/support/resources.jsx';

const currentPanel = 'admin';

export const resources = {
    customer: customerResources,
    admin: adminResources,
    accounting: accountingResources,
    support: supportResources,
};

export default resources[currentPanel];