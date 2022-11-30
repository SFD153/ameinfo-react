/**
 *
 * Asynchronously loads the component for SpinLoader
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
