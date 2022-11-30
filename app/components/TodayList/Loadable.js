/**
 *
 * Asynchronously loads the component for TodayList
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
