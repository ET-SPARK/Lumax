import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Privacy.css";

function Privacy() {
  return (
    <div>
      <Header />
      <div className="section__background_overlay" />
      <div>
        <h1 className="section__heading_about">Privacy Policy</h1>
        <div className="section_theme_lightest section__sub">
          <div className="section__subheading">Commitment to your privacy</div>
          <div className="section__paragraph">Welcome to our Website</div>
          <div className="section__paragraph">
            Our Organisation is committed to protecting the privacy of the user
            of the Website. The Organisation values the trust of its subscribers
            and all others who work with it, and the Organisation recognises
            that maintaining your trust requires transparency and accountability
            in how the Organisation handles your Personal Information. Our
            privacy policy is incorporated into and is subject to the
            Organisation’s standard terms and conditions and the general terms
            relating to the use of the Website. In performing the Organisation’s
            services in the ordinary course of business, the Organisation may
            collect, use and disclose Personal Information. Anyone from whom the
            Organisation collects such information can expect that it will be
            appropriately and lawfully protected and that any use of or other
            dealing with this information is subject to consent, where this is
            required by law. This is in line with the general privacy practices
            of the Organisation. This Policy sets out how the Organisation
            collects, uses, discloses, and safeguards the Personal Information
            it processes in the course of its business.
          </div>
          <div className="section__subheading">
            What personal information does the organisation collect and why?
          </div>
          <div className="section__paragraph">
            The Organisation may collect Personal Information in conducting its
            ordinary business operations, including through the use of its
            Website. In processing such Personal Information, the Organisation
            at all times ensures that (i) it complies with the provisions of
            POPIA, and (ii) such Personal Information is used for legitimate
            business purposes. The Organisation does not, except where otherwise
            permitted by law, collect, use or disclose your Personal Information
            without your consent. The Organisation operates its Website, and
            conducts its business in general, in accordance with South African
            legislation. The Organisation considers it imperative to protect the
            privacy interests of data subjects. In the event that the
            Organisation sends Personal Information outside of South Africa
            (including if such information is hosted offshore), the Organisation
            will ensure that it takes all reasonable steps to ensure that it
            complies with all applicable laws in this regard, including POPIA.
          </div>
          <div className="section__subheading">Security</div>
          <div className="section__paragraph">
            The Organisation has adopted a security model to protect your
            Personal Information that complies with generally accepted
            information security practices and procedures. As part of the
            Organisation’s security systems, the Organisation has implemented
            fire-wall technology, password controls, encryption processes and
            antivirus software. This is in addition to the physical security
            measures adopted by the Organisation to ensure that it takes all
            appropriate, reasonable technical and organisational measures to
            prevent (i) loss of, damage to, or unauthorised destruction of
            Personal Information, and (ii) unlawful access to or processing of
            Personal Information. The Organisation has a stringent security
            policy in place that every officer, employer and supplier of the
            Organisation must adhere to.
          </div>
          <div className="section__paragraph">
            The Organisation confirms that it takes all reasonable measures to:
          </div>
          <div className="section__paragraph">
            <ul className="section__paragraph_li">
              <li>
                identify all reasonably foreseeable internal and external risks
                to any Personal Information in its possession or under its
                control;
              </li>
              <li>
                establish and maintain appropriate safeguards against any risks
                that are identified by the Organisation;
              </li>
              <li>
                regularly verify that these safeguards are effectively
                implemented by or on behalf of the Organisation; and
              </li>
              <li>
                ensure that such safeguards are continually updated in response
                to new risks or deficiencies in previously implemented
                safeguards.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
