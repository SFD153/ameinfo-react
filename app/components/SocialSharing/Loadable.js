/**
 *
 * Asynchronously loads the component for SocialSharing
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
