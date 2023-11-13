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
          <div className="section__paragraph intro">Welcome to our Website</div>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
