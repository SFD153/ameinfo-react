/**
 *
 * Asynchronously loads the component for AdUnit
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
