/**
 *
 * Asynchronously loads the component for Thumbnail
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
