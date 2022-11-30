/**
 *
 * Asynchronously loads the component for Logo
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
