/**
 *
 * Asynchronously loads the component for Gallery
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
