/**
 *
 * Asynchronously loads the component for Page
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
