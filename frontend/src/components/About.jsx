import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./About.css";

function About() {
  return (
    <div>
      <Header />
      <div className="section__background_overlay" />
      <div>
        <h1 className="section__heading_about ">About Huurkor</h1>
      </div>
      <div className="section_theme_lightest">
        <div className="section__sub">
          <span className="section__paragraph_heading">Who is Huurkor?</span>
          <span className="section__paragraph">
            Huurkor is comprised of a dedicated team of real estate
            professionals working diligently to raise the standards of
            excellence of the property industry in Pretoria. We work with
            investors, landlords, tenants and consumers who want to trade in the
            property industry with confidence. In 1976, we commenced sectional
            title administration as part of our service offering, and we
            continually assess our services to ensure that our agency remains in
            tandem with the pulse of the real estate sector.
          </span>
        </div>
        <div className="section__sub">
          <span className="section__paragraph_heading">
            What Do We Specialise In?
          </span>
          <span className="section__paragraph">
            Our services are updated continually. We keep our finger on the
            economic pulse of the real estate sector to ensure that our clients
            enjoy the best services and solutions available. We can tailor our
            services and solutions to meet your specific property and real
            estate requirements. Our expertise extends to the following segments
            of the real estate sector:
          </span>
          <span>
            <ul className="section__paragraph_li">
              <li>Letting of factories</li>
              <li>Letting of commercial buildings</li>
              <li>Letting of single unit flats and blocks of flats</li>
              <li>Letting of houses and sectional title properties and</li>
              <li>The sales of all the above fixed properties.</li>
            </ul>
          </span>
        </div>
        <div className="section__sub">
          <span className="section__paragraph_heading">
            What Areas Do We Service?
          </span>
          <span className="section__paragraph">
            We operate in the greater Gauteng area, as well as other provinces
            throughout South Africa. As part of our expansion strategy, we are
            always looking at breaking into new regional and national markets.
            At present, Huurkor has a footprint in the following provinces:
          </span>
          <span>
            <ul className="section__paragraph_li">
              <li>
                <b>Gauteng:</b> Akasia, Centurion, Cullinan, Johannesburg,
                Midrand, Pretoria and Rosslyn;
              </li>
              <li>
                <b>Gauteng:</b> Akasia, Centurion, Cullinan, Johannesburg,
                Midrand, Pretoria and Rosslyn;
              </li>
              <li>
                <b>Gauteng:</b> Akasia, Centurion, Cullinan, Johannesburg,
                Midrand, Pretoria and Rosslyn;
              </li>
            </ul>
          </span>
        </div>
        <div className="section__sub">
          <span className="section__paragraph_heading">
            Why Do Tenants and Buyers Choose Us?
          </span>
          <span className="section__paragraph">
            We bring decades of experience to the property rentals and sales
            sectors. Throughout the years, we have succeeded in becoming the
            leading sectional title administrators in Pretoria, which is only
            further proof of our service excellence. With an extensive network
            of real estate investors, buyers, sellers and tenants, we are able
            to meet the ever-changing needs of our valued clients timeously and
            in a professional manner. Choose Huurkor for the best property
            related services in Pretoria and Gauteng, and trade in the industry
            with confidence.
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
