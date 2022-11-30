/**
 *
 * Asynchronously loads the component for MobileMenu
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
