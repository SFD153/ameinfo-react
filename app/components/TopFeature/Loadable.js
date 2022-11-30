/**
 *
 * Asynchronously loads the component for TopFeature
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
