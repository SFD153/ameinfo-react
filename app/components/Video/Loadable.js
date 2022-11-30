/**
 *
 * Asynchronously loads the component for Video
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
