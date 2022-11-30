/**
 *
 * Asynchronously loads the component for ImageBox
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
