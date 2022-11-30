/**
 *
 * Asynchronously loads the component for FeaturedMedia
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
