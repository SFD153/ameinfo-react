/**
 *
 * RedirectOldLinkToNewLink
 *
 */

import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RedirectOldLinkToNewLink() {
  return (
    <Switch>
      <Redirect
        from="/money/insurance/:postSlug"
        to="/industry/healthcare/:postSlug"
      />
      <Redirect
        from="/uncategorized/buildink-to-revolutionize-mena-construction-sector"
        to="/industry/real-estate/buildink-to-revolutionize-mena-construction-sector"
      />
      <Redirect
        from="/uncategorized/drilling-for-offshore-oil-soon-in-lebanon-will-this-save-the-country-from-economic-collapse"
        to="/industry/energy/drilling-for-offshore-oil-soon-in-lebanon-will-this-save-the-country-from-economic-collapse"
      />
      <Redirect
        from="/uncategorized/dubai-financial-market-index/"
        to="/industry/finance/dubai-financial-market-index"
      />
      <Redirect
        from="/uncategorized/is-the-greenfield-approach-digital-transformation-at-its-very-best"
        to="/industry/finance/is-the-greenfield-approach-digital-transformation-at-its-very-best"
      />
      <Redirect
        from="/uncategorized/lacal-brands-international-winners"
        to="/industry/retail/lacal-brands-international-winners"
      />
      <Redirect
        from="/uncategorized/menas-media-landscape-grows-smaller-osn-closes-movies-festival-channel/"
        to="/industry/media/menas-media-landscape-grows-smaller-osn-closes-movies-festival-channel"
      />
      <Redirect
        from="/uncategorized/mg-motor-introduces-new-gs-2019-to-the-middle-east/"
        to="/lifestyle/mg-motor-introduces-new-gs-2019-to-the-middle-east"
      />
      <Redirect
        from="/uncategorized/ramadan-spending-2"
        to="/industry/retail/ramadan-spending-2"
      />
      <Redirect
        from="/uncategorized/sheikh-mohammed-50-years"
        to="/industry/industry-government/sheikh-mohammed-50-years"
      />
      <Redirect
        from="/uncategorized/uncategorized/blockchain-and-energy-and-finding-synergy-and-aramco-invested-millions"
        to="/industry/energy/blockchain-and-energy-and-finding-synergy-and-aramco-invested-millions"
      />
      <Redirect
        from="/uncategorized/uncategorized/exclusive-interview-amazon-souq-uae"
        to="/industry/technology/exclusive-interview-amazon-souq-uae"
      />
      <Redirect
        from="/uncategorized/uncategorized/noorcoin"
        to="/industry/finance/noorcoin"
      />
      <Redirect
        from="/uncategorized/uncategorized/saudi-budget-2"
        to="/industry/finance/saudi-budget-2"
      />
      <Redirect
        from="/uncategorized/uncategorized/uber-ipo-may-10-2019-expectations-lyft"
        to="/industry/finance/tariff-china-saudi-and-uae"
      />
      <Redirect
        from="/uncategorized/uncategorized/tariff-china-saudi-and-uae"
        to="/industry/travel/uber-ipo-may-10-2019-expectations-lyft"
      />
      <Redirect
        from="/transport-and-tourism/logistics/arabsat-6a-satellite-spacex"
        to="/industry/technology/arabsat-6a-satellite-SpaceX"
      />
      <Redirect
        from="/money/banking-finance/billions-in-remittances-to-cross-through-aber-benefitting-inter-arab-trade"
        to="/industry/finance/remittances-aber-arab-trade"
      />
      <Redirect
        from="/money/banking-finance/banking-via-whatsapp-emirates-islamic-makes-it-a-reality/attachment/abdulla-qassem-group-chief-operating-officer-emirates-nbd"
        to="/industry/finance/whatsapp-banking-emirates-islamic"
      />
      <Redirect
        from="/money/markets/abu-dhabi-welcomes-over-10-million-international-visitors-in-2018"
        to="/industry/travel/abu-dhabi-visitors-2018"
      />
      <Redirect
        from="/money/other-money/3-trends-top-ceo-2019/"
        to="/industry/finance/top-ceo-2019-3-trends-shaping-the-ceo-landscape"
      />
      <Redirect
        from="/real-estate-and-construction/construction/will-3d-printing-disrupt-the-gcc-construction-sector"
        to="/industry/real-estate/3d-printing-construction-gcc-uae"
      />
      <Redirect
        from="/real-estate-and-construction/real-estate/property-market/how-chatbots-are-revolutionising-the-real-estate-industry"
        to="/industry/real-estate/chatbots-real-estate-industry"
      />
      <Redirect
        from="/real-estate-and-construction/real-estate/property-market/revealed-value-and-status-of-uae-construction-projects"
        to="/industry/real-estate/value-status-uae-construction-projects-status"
      />
      <Redirect
        from="/technology/telecom/etisalat-to-make-5g-dream-a-reality-in-the-uae"
        to="/industry/technology/etisalat-5g-uae-du-gcc"
      />
      <Redirect
        from="/technology/telecom/innovations-drive-5g-push-into-rural-networks"
        to="/industry/technology/5G-rural-networks"
      />
      <Redirect
        from="/2010/saudi-british-bank-appoints-david-dew-as-managing-director"
        to="/industry/finance/saudi-british-bank-appoints-david-dew-as-managing-director"
      />
      <Redirect
        from="/money/banking-finance/transformed-customer-experience-key-to-mena-e-commerce-growth"
        to="/industry/finance/customer-mena-e-commerce-growth"
      />
      <Redirect
        from="/money/economy/saudi-defence-budget-2019"
        to="/industry/industry-government/saudi-defence-budget-overview"
      />
      <Redirect from="/trending/:postSlug" to="/industry/media/:postSlug" />
      <Redirect
        from="/media/other-media/dubais-thriving-events-sector-big"
        to="/industry/media/dubais-thriving-events-sector-big"
      />
      <Redirect
        from="/media/digital/:postSlug"
        to="/industry/media/:postSlug"
      />
      <Redirect
        from="/media/broadcast/:postSlug"
        to="/industry/media/:postSlug"
      />
      <Redirect
        from="/technology/gadgets/xiaomi-mi-9-affordable-flagship"
        to="/industry/technology/xiaomi-mi-9-in-the-uae-an-affordable-flagship-is-here"
      />
      <Redirect
        from="/money/other-money/:postSlug"
        to="/industry/finance/:postSlug"
      />
      <Redirect
        from="/money/banking-finance/:postSlug"
        to="/industry/finance/:postSlug"
      />
      <Redirect
        from="/media/advertising-pr/:postSlug"
        to="/industry/media/:postSlug"
      />
      <Redirect from="/country/uae" to="/country/gcc" />
      <Redirect from="/country/ksa" to="/country/gcc" />
      <Redirect from="/country/kuwait" to="/country/gcc" />
      <Redirect from="/country/bahrein" to="/country/gcc" />
      <Redirect from="/country/oman" to="/country/gcc" />
      <Redirect from="/money/other-money" to="/industry/finance" />
      <Redirect
        from="/construction-real-estate/other-construction-real-estate/:postSlug"
        to="/country/gcc/:postSlug"
      />
      <Redirect
        from="/construction-real-estate/other-construction-real-estate"
        to="/country/gcc"
      />
      <Redirect
        from="/money/banking-finance/billions-in-remittances-to-cross-through-aber-benefitting-inter-arab-trade"
        to="/industry/finance/remittances-aber-arab-trade"
      />
      <Redirect
        from="/media-and-marketing/marketing/luxury-market-arabian-gulf"
        to="/industry/retail/luxury-market-arabian-gulf"
      />
      <Redirect
        from="/media-and-marketing/marketing/which-dubai-supermarket-wins-on-price-we-reveal-the-answer"
        to="/industry/retail/which-dubai-supermarket-wins-on-price-we-reveal-the-answer"
      />
      <Redirect from="/money/smes/:postSlug" to="/industry/finance/:postSlug" />
      <Redirect from="/money/smes" to="/industry/finance" />
      <Redirect
        from="/tag/tag-heuer-2018/:postSlug"
        to="/sectors/corporate/:postSlug"
      />
      <Redirect from="/tag/tag-heuer-2018" to="/sectors/corporate" />
      <Redirect from="/money/banking-finance" to="/industry/finance" />
      <Redirect
        from="/money/economy/:postSlug"
        to="/industry/finance/:postSlug"
      />
      <Redirect from="/money/economy" to="/industry/finance" />
      <Redirect
        from="/money/markets/:postSlug"
        to="/industry/finance/:postSlug"
      />
      <Redirect from="/money/markets" to="/industry/finance" />
      <Redirect from="/money" to="/industry/finance" />
      <Redirect from="/energy/oil-gas/:postSlug" to="/energy/:postSlug" />
      <Redirect from="/energy/oil-gas" to="/energy" />
      <Redirect from="/energy/:postSlug" to="/energy/:postSlug" />
      <Redirect from="/energy/power" to="/energy" />
      <Redirect from="/energy/green-living/:postSlug" to="/energy/:postSlug" />
      <Redirect from="/energy/green-living" to="/energy" />
      <Redirect from="/travel/:postSlug" to="/industry/travel/:postSlug" />
      <Redirect from="/travel" to="/industry/travel" />
      <Redirect
        from="/media-and-marketing/marketing/:postSlug"
        to="/industry/media/:postSlug"
      />
      <Redirect from="/media-and-marketing/marketing" to="/industry/media" />
      <Redirect
        from="/transport-and-tourism/tourism/:postSlug"
        to="/industry/travel/:postSlug"
      />
      <Redirect from="/transport-and-tourism/tourism" to="/industry/travel" />
      <Redirect
        from="/transportation/:postSlug"
        to="/industry/travel/:postSlug"
      />
      <Redirect from="/transportation" to="/industry/travel" />
      <Redirect
        from="/technology/*/:postSlug"
        to="/industry/technology/:postSlug"
      />
      <Redirect from="/technology" to="/industry/technology" />
      <Redirect from="/money/insurance" to="/industry/healthcare" />
      <Redirect
        from="/construction-real-estate/*/:postSlug"
        to="/industry/real-estate/:postSlug"
      />
      <Redirect from="/construction-real-estate" to="/industry/real-estate" />
      <Redirect
        from="/real-estate-and-construction/*/*/:postSlug"
        to="/industry/real-estate/:postSlug"
      />
      <Redirect
        from="/real-estate-and-construction/*/:postSlug"
        to="/industry/real-estate/:postSlug"
      />
      <Redirect
        from="/real-estate-and-construction"
        to="/industry/real-estate"
      />
      <Redirect from="/media/*/:postSlug" to="/media/:postSlug" />
      <Redirect from="/media" to="/industry/media" />
      <Redirect
        from="/luxury-lifestyle/*/:postSlug"
        to="/lifestyle/:postSlug"
      />
      <Redirect from="/old-lifestyle/*/:postSlug" to="/lifestyle/:postSlug" />
      <Redirect from="/old-lifestyle" to="/lifestyle" />
      <Redirect from="/luxury-lifestyle" to="/lifestyle" />
      <Redirect from="/energy" to="/industry/energy" />
      <Redirect from="/government" to="/sectors/government" />
      <Redirect from="/country/lebanon" to="/country/levant" />
      <Redirect from="/country/syria" to="/country/levant" />
      <Redirect from="/country/jordan" to="/country/levant" />
      <Redirect from="/country/palestine" to="/country/levant" />
    </Switch>
  );
}

RedirectOldLinkToNewLink.propTypes = {};

export default RedirectOldLinkToNewLink;
