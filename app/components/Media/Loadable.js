/**
 *
 * Asynchronously loads the component for Media
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
