/**
 *
 * Asynchronously loads the component for Audio
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
