/**
 *
 * GoogleTagManager
 *
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export class GoogleTagManager extends React.PureComponent {
  render = () => (
    <noscript>
      <iframe
        title="GoogleTagManager"
        src="https://www.googletagmanager.com/ns.html?id=GTM-PHLN6QP"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

export default GoogleTagManager;
