/**
 *
 * Asynchronously loads the component for Breadcrumb
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
