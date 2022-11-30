/**
 *
 * Asynchronously loads the component for ContentLocker
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
