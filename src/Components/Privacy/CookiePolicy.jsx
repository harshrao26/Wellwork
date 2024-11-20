import React, { useEffect } from "react";
import "./privacy.css";

const CookiePolicy = () => {
  useEffect(() => {
    const scrollToNavDiv = async () => {
      const navDiv = document.getElementById("main_contact_nav_div");
      if (navDiv) {
        await navDiv.scrollIntoView({ behavior: "instant" });
      }
    };

    scrollToNavDiv();
  }, []);
  return (
    <div className="privacy-container">
      <h1 className="privacy_title">Cookies Policy</h1>
      {/* <div className="privacy_desc">Effective Date: [Date]</div> */}
      <div className="privacy_title_2">1. Introduction</div>
      <div className="privacy_desc">
        MPM IT Solutions Private Limited, operating under the brand WellWork
        (hereinafter referred to as 'WellWork', ‘us’, ‘we’ or ‘our’), offers
        workspace rental services to individuals seeking accommodation
        (collectively, the "Services"), accessible at workatatlis.com. This
        Cookie Policy explains how we use cookies and similar technologies when
        you visit our website, www.wellwork.space or use our services. This
        policy provides detailed information about the types of cookies we use,
        their purposes, and your options for managing cookie preferences.
      </div>
      <div className="privacy_title_2">2. What Are Cookies?</div>
      <div className="privacy_desc">
        Cookies are small text files that are placed on your device when you
        visit a website. They are widely used to make websites work more
        efficiently, provide a better user experience, and help website owners
        understand how users interact with their sites.
      </div>
      <div className="privacy_title_2">3. Types of Cookies We Use</div>
      <div className="privacy_title_2">a. Essential Cookies</div>
      <div className="privacy_desc">
        These cookies are necessary for the proper functioning of our website
        and services. They enable you to navigate our site and use essential
        features. These include Authentication cookies and session cookies.
      </div>

      <div className="privacy_title_2">b. Analytical/Performance Cookie</div>
      <div className="privacy_desc">
        We use these cookies to collect information about how visitors use our
        website. This helps us improve the performance of our site and
        understand which pages are most and least popular. We employ Google
        Analytics, a web analytics service offered by Google Inc. (Google),
        utilizing cookies to analyse website usage for the enhancement of your
        experience within our systems.
      </div>
      <div className="privacy_desc">
        A "User ID" is utilized on this site, serving as your identifier in
        Google Analytics. Your online interactions and the User ID are linked to
        create a profile. Google Analytics monitors your activities across
        various devices (such as tablets, PCs, smartphones) on an anonymized
        basis.
      </div>
      <div className="privacy_title_2">c. Functionality Cookies</div>
      <div className="privacy_desc">
        These cookies allow our website to remember choices you make (such as
        your username, language, or region) and provide enhanced, more
        personalized features. These include user preference cookies and
        location cookies.
      </div>
      <div className="privacy_title_2">d. Advertising Cookies</div>
      <div className="privacy_desc">
        We and our advertising partners may use these cookies to deliver
        advertisements that are more relevant to you and your interests.
      </div>
      <div className="privacy_title_2">4. Consent to Cookies</div>
      <div className="privacy_desc">
        By using our website, you consent to the use of cookies as described in
        this Cookie Policy. You can change your cookie preferences at any time
        by adjusting your browser settings.
      </div>
      <div className="privacy_title_2">5. Managing Cookies</div>
      <div className="privacy_desc">
        Most web browsers allow you to control cookies through your browser
        settings. If you prefer not to receive cookies, you have the option to
        adjust your browser settings to receive notifications when they are sent
        or decline cookies entirely. Additionally, you can delete any cookies
        that may have already been stored.
      </div>
      <div className="privacy_title_2">6. Third-Party Cookie</div>
      <div className="privacy_desc">
        We may also use third-party cookies to enhance your experience. These
        cookies are placed by third-party service providers and are subject to
        their respective privacy policies.
      </div>
      <div className="privacy_title_2">7. Cookies Retention Period</div>
      <div className="privacy_desc">
        Cookies may be retained for different periods, including:
      </div>
      <ul>
        <li>
          Session cookies: Temporary and deleted when you close your browser.
        </li>
        <li>
          Persistent cookies: Remain on your device for a set period or until
          manually deleted.
        </li>
      </ul>
      <div className="privacy_title_2">8. Changes to This Policy</div>
      <div className="privacy_desc">
        We may update this Cookie Policy from time to time. Any changes will be
        posted on this page with the effective date, so please review it
        regularly.
      </div>
      <div className="privacy_title_2">9. Contact Us</div>
      <div className="privacy_desc">
        If you have any questions about our Cookie Policy, please contact us at
        [Contact Person], [Contact Email], [Contact Address].
      </div>
      <div className="privacy_title_2">10. User Agreement</div>
      <div className="privacy_desc">
        By proceeding to utilize our website, you consent to the installation of
        cookies on your device. Opting not to accept our cookies may impact the
        fullness of your experience on the site, and we cannot guarantee the
        same level of satisfaction.
      </div>
    </div>
  );
};

export default CookiePolicy;
