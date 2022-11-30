/**
 *
 * Asynchronously loads the component for Box
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
