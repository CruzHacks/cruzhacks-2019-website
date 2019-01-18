/* eslint-disable */

import React, {Component} from 'react';
import AmazonGiga from 'assets/sponsors/Amazon-GIGA/Amazon-GIGA.png';
import UCSCGradDivGiga from 'assets/sponsors/UCSC Grad Division - GIGA/GRADDIVLOGO.png'
import BSOEKilo from 'assets/sponsors/BSOE - KILO/baskin-logo-stacked-wht.png';
import LookerKilo from 'assets/sponsors/Looker - KILO/Web_Looker_Logo_Charcoal (1).png';
import PlantronicsKilo from 'assets/sponsors/Plantronics-KILO/PLT_Lava-box_Logo_2-in_15SEP15.png';
import ProductOpsKilo from 'assets/sponsors/ProductOps-KILO/grey and white versions/vertical_white.svg';
import SouthSwellKilo from 'assets/sponsors/South Swell Ventures-KILO/SouthSwellVentures_logo-2.png'
import ChooseSCCenti from 'assets/sponsors/Choose Santa Cruz-CENTI/ChooseSantaCruz-Diamond Artwork.png'
import MLHPartner from 'assets/sponsors/MLH - PARTNER/mlh-logo-white.svg'
import ChallengeRocketPartner from 'assets/sponsors/Challenge Rocket - PARTNER/challengerocket_logo_color_rgb.png'
import UCSCArtsKilo from 'assets/sponsors/UCSC Arts Division - KILO/artsdivision-logo.png'
import SCTBPartner from 'assets/sponsors/Santa Cruz Tech Beat - PARTNER/SCTB-logo.png'
import StickerMulePartner from 'assets/sponsors/Sticker Mule - PARTNER/sticker-mule-logo-light-bg.svg'
import YerbaMatePartner from 'assets/sponsors/Yerba Mate - PARTNER/Guayaki-Partner-Logo-Web.png'
import CrowdForgePartner from 'assets/sponsors/CrowdForge - PARTNER/crowdforgelogox2.png'
import EMSSlugsPartner from 'assets/sponsors/EMS Slugs - PARTNER/logo.png'
import CITRISGiga from 'assets/sponsors/CITRIS - GIGA/logo.png'
import CPSRCPartner from 'assets/sponsors/CPSRC - PARTNER/CPSRCLogo_v2-CircularLogo-600dpi.png'
import OmniscienceCenti from 'assets/sponsors/Omniscience - CENTI/Omniscience Invert Vertical w-Website.jpg'
import HederaKilo from 'assets/sponsors/Hedera - KILO/Hedera-alternate-logo2.png'
import JumpstartPartner from 'assets/sponsors/Jumpstart - PARTNER/jumpstart logo.png'
import SellHoundPartner from 'assets/sponsors/SellHound - PARTNER/Final Logo.png'
import SCNTPartner from 'assets/sponsors/SCNT - PARTNER/SCNT MeetUp logo lowRes.png'
import GCPKilo from 'assets/sponsors/GCP - KILO/GCP logo, transparent.png'
import MicrosoftKilo from 'assets/sponsors/Microsoft - KILO/logo.png'
import iDTechPartner from 'assets/sponsors/iD Tech - PARTNER/iD-Tech-Company-Logo-Tagline.png'
import EarthHacksPartner from 'assets/sponsors/Earth Hacks - PARTNER/EarthHacks_logoTransparentLines.png'
import InboardPartner from 'assets/sponsors/Inboard - PARTNER/1.png'

class Sponsors extends Component {
  render() {
    return (
     <div className="sponsors__container"> 
      <h2 className="sponsors__title">Thank You to Our Wonderful Sponsors</h2>
      <div className="sponsors__logos gigas">
        <a href="https://aws.amazon.com/education/awseducate/" target = "_blank">
        <div className="sponsors__giga">
            <img src={AmazonGiga} alt="Amazon" height="150px" width="375px"/>
        </div>
        </a>
        <a href="https://citris-uc.org/campus/uc-santa-cruz/" target = "_blank">
        <div className="sponsors__giga">
          <img src={CITRISGiga} alt="CITRIS" height="150px" width="375px"/>
        </div>
        </a>
        <a href="https://graddiv.ucsc.edu" target = "_blank">
        <div className="sponsors__giga">
          <img src={UCSCGradDivGiga} alt="UCSC Graduate Division" height="150px" width="375"/>
        </div>
        </a>
      </div>          
      <div className="sponsors__logos kilos">
        <a href="https://www.bsoe.ucsc.edu" target = "_blank">
        <div className="sponsors__kilo">
          <img src={BSOEKilo} alt="Baskin School of Engineering" height="100px" width="225px"/>
        </div>
        </a>
        <a href="http://arts.ucsc.edu" target = "_blank">
        <div className="sponsors__kilo">
          <img src={UCSCArtsKilo} alt="UCSC Arts" height="100px" width="225px"/>
        </div>
        </a>
        <a href="https://looker.com/" target = "_blank">
        <div className="sponsors__kilo">
          <img src={LookerKilo} alt="Looker" height="100px" width="225px"/>
        </div>
        </a>
        <a href="https://www.productops.com/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__kilo">
          <img src={ProductOpsKilo}  alt="ProductOps" height="100px" width="225px"/>
        </div>
        </a>
        <a href="https://www.plantronics.com" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__kilo">
          <img src={PlantronicsKilo}  alt="Plantronics" height="100px" width="225px"/>
        </div>
        </a>
        <a href="https://www.santacruzworks.org/members/south-swell-ventures" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__kilo">
          <img src={SouthSwellKilo}  alt="South Swell Ventures" height="100px" width="225px"/>
        </div>
        </a>
        <a href="https://hedera.com" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__kilo">
          <img src={HederaKilo}  alt="Hedera" height="100px" width="225px"/>
        </div>
        </a>
        <a href="https://cloud.google.com/edu/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__kilo">
          <img src={GCPKilo}  alt="Google Cloud Platform" height="100px" width="225px"/>
        </div>
        </a>
        <a href="https://www.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__kilo">
          <img src={MicrosoftKilo}  alt="Microsoft" height="100px" width="225px"/>
        </div>
        </a>
      </div>
      <div className="sponsors__logos centis">
        <a href="https://choosesantacruz.com/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__centi">
          <img src={ChooseSCCenti}  alt="Choose Santa Cruz" height="90px" width="90px"/>
        </div>
        </a>
        <a href="https://www.omni.sc/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__centi">
          <img src={OmniscienceCenti}  alt="Omniscience" height="90px" width="90px"/>
        </div>
        </a>
      </div>
      <h2 className="sponsors__title">and Our Great Partners</h2>
      <div className="sponsors__logos partners">
        <a>
        <div className="sponsors__partner" id="EMSSlugs">
          <img src={EMSSlugsPartner}  alt="EMS Slugs" width="225px" height="110px"/>
        </div>
        </a>
        <a href="https://mlh.io/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__partner">
          <img src={MLHPartner}  alt="Major League Hacking" width="225px" height="110px"/>
        </div>
        </a>
        <a href="http://bit.ly/2VHqCIe" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__partner">
          <img src={ChallengeRocketPartner}  alt="Challenge Rocket" width="225px" height="110px"/>  
        </div>
        </a>
        <a href="http://santacruztechbeat.com/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__partner">
          <img src={SCTBPartner}  alt="Santa Cruz Tech Beat" width="225px" height="110px"/>  
        </div>
        </a>
        <a href="https://hackp.ac/mlh-stickermule-hackathons" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__partner">
          <img src={StickerMulePartner}  alt="Sticker Mule" width="225px" height="110px"/>
        </div>
        </a>
        <a href="https://guayaki.com/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__partner">
          <img src={YerbaMatePartner}  alt="Yerba Mate" width="225px" height="110px"/>
        </div>
        </a>
        <a href="https://crowdforge.io/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__partner">
          <img src={CrowdForgePartner}  alt="CrowdForge" width="225px" height="110px"/>
        </div>
        </a>
        <a href="https://cps.soe.ucsc.edu/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__partner">
          <img src={CPSRCPartner}  alt="CPSRC" width="225px" height="110px"/>
        </div>
        </a>
        <a href="https://jumpstart.me/r/Cruzhacks" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__partner">
          <img src={JumpstartPartner}  alt="Jumpstart" width="225px" height="110px"/>
        </div>
        </a>
        <a href="https://www.sellhound.com/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__partner">
          <img src={SellHoundPartner}  alt="SellHound" width="225px" height="110px"/>
        </div>
        </a>
        <a href="https://www.meetup.com/santacruznewtech/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__partner">
          <img src={SCNTPartner}  alt="Santa Cruz New Tech Meetup" width="225px" height="110px"/>
        </div>
        </a>
        <a href="https://earthhacks.vcu.edu/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__partner">
          <img src={EarthHacksPartner}  alt="Earth Hacks" width="225px" height="110px"/>
        </div>
        </a>
        <a href="https://www.idtech.com/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__partner">
          <img src={iDTechPartner}  alt="iD Tech" width="225px" height="110px"/>
        </div>
        </a>
        <a href="https://www.inboardtechnology.com/" target="_blank" rel="noopener noreferrer">
        <div className="sponsors__partner">
          <img src={InboardPartner}  alt="Inboard" width="225px" height="110px"/>
        </div>
        </a>
      </div>
    </div>
    );
  }
}

export default Sponsors;
