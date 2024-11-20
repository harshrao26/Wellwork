import React, { useEffect } from "react";
import "./terms.css";

const Terms = () => {
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
    <div className="terms-container">
      <div className="terms_title">T&C – Work @ WellWork</div>

      <div className="terms_desc">
        MPM IT Solutions Private Limited, operating under the WellWork label
        (hereinafter referred to as 'WellWork'), offers workspace rental
        solutions catering to individuals in need of accommodation (referred to
        collectively as the "Services") through the website workatatlis.com.
        This document delineates the policies governing how WellWork gathers
        and manages your personal information when you engage with our website
        (referred to herein as the 'site' or 'website'), www.workatatlis.com. By
        accessing the Site, you implicitly agree to uphold and be legally bound
        by the stipulations articulated within these Terms of Service ("Terms").
        These Terms regulate your usage of the Site and Services, including all
        Collective Content, as well as your involvement in any related Program.
        They establish a legally binding agreement between you and WellWork.
        Failure to comply with these Terms may incur civil and criminal
        consequences.
      </div>
      <div className="terms_desc">
        These Terms and Conditions (the “Terms”) delineate the rights and
        responsibilities of an unregistered website user or visitor (“user” or
        “you”) regarding your use of the Site. By accessing or using the Site,
        including as an unregistered website visitor, you agree to comply with
        these Terms and our Privacy Policy, accessible on the Site. These Terms
        solely apply to your use of the Site and the content available on or
        through the Site as an unregistered website user or visitor. If you use
        or access any of our physical spaces, restricted-access web-based
        services (requiring a login), broker or referral programs, or other
        services, your usage is subject to the terms and conditions provided or
        accepted during your sign-up. Additionally, if you book or avail any
        products or services through our partners or other service providers,
        you are subject to their respective terms and conditions. We may
        periodically make modifications, deletions, or additions to the Site or
        these Terms, and your continued use of the Site constitutes acceptance
        of such changes.
      </div>
      <div className="terms_desc">
        We reserve the right to modify our Terms and Conditions at any time
        without prior notice. To stay informed about any changes, please
        periodically review this policy. By visiting this Website, you agree to
        be bound by these terms and conditions. If you disagree, please refrain
        from using or accessing our Website.# Terms and Conditions
      </div>

      <div className="terms_title_2">1. Ownership and Use of Site Contents</div>

      <div className="terms_title_3">a. Site Contents</div>
      <div className="terms_desc">
        All materials, including but not limited to images, details, data,
        illustrations, designs, icons, photographs, video clips, text, software,
        graphics, scripts, logos, and other materials (collectively, the
        "Contents") displayed on this site are exclusively owned (either
        directly or indirectly) by WellWork and/or its content providers. The
        Contents are protected by copyrights, trademarks, service marks, trade
        dress, and other intellectual or ownership rights owned by the Company.
        Any rights not expressly granted in these Terms and Conditions are
        reserved for the Company.
      </div>

      <div className="terms_title_3">b. Use of Site and Restrictions</div>
      <div className="terms_desc">
        The site and its Contents are intended for your personal, non-commercial
        use only. Any other use, including modification, removal, deletion,
        transmission, publication, distribution, proxy cashing, uploading,
        posting, redistribution, re-licensing, selling, duplicating,
        republication, or any other dissemination without the express written
        permission of the Company is strictly prohibited.
      </div>

      <div className="terms_title_3">c. Online Conduct</div>
      <div className="terms_desc">
        You agree to use the site for lawful purposes only. Prohibited
        activities include posting or transmitting unlawful, harmful,
        threatening, abusive, harassing, defamatory, vulgar, obscene, profane,
        or hateful material.
      </div>

      <div className="terms_title_3">d. Accuracy of Information</div>
      <div className="terms_desc">
        While the Company makes reasonable efforts to provide accurate and
        up-to-date information, it does not guarantee the accuracy,
        completeness, reliability, or error-free nature of the site. Users use
        the information at their own risk, and the Company is not liable for any
        loss or damages resulting from such use.
      </div>

      <div className="terms_title_3">e. Links to Third-Party Sites</div>
      <div className="terms_desc">
        Links on this site may lead to services or sites not controlled or
        operated by the Company. The Company assumes no responsibility or
        liability for other sites or services. Any use of any linked site or
        service is at your own risk.
      </div>

      <div className="terms_title_3">
        f. Disclaimer of Warranties and Limitations of Liability
      </div>
      <div className="terms_desc">
        The site and its Contents are provided "as is" and "as available"
        without any representation or warranty. The Company disclaims all
        express and implied warranties and shall not be liable for any damages
        of any kind whatsoever.
      </div>

      <div className="terms_title_3">g. Indemnification</div>
      <div className="terms_desc">
        You agree to indemnify and hold harmless the Company from any
        third-party claim, action, demand, loss, or damages arising out of or
        relating to your violation of these Terms and Conditions or your use of
        the site.
      </div>

      <div className="terms_title_2">2. Eligibility and Content</div>
      <div className="terms_title_3">a. Eligibility</div>
      <div className="terms_desc">
        The site and its services are available only to individuals who are at
        least 16 years old, unless specified otherwise. No one under this age
        may access or use the site or provide any personal information through
        the site.
      </div>

      <div className="terms_title_3">b. Content</div>
      <div className="terms_desc">
        All content on the site, including text, images, videos, audio clips,
        software, and other materials ("Content"), is protected by U.S. and
        international copyright laws. Users are granted a non-exclusive license
        to use the Content solely for viewing, browsing, and using the site's
        functionality.
      </div>

      <div className="terms_title_3">c. No Refunds</div>
      <div className="terms_desc">
        All payments under this Agreement are irrevocable, non-refundable, and
        non-creditable. Services will not be provided until completion of the
        Know Your Customer (KYC) process and verification of the customer's
        identity.
      </div>

      <div className="terms_title_2">3. Miscellaneous</div>
      <div className="terms_title_3">a. Governing Law</div>
      <div className="terms_desc">
        These Terms and Conditions are governed by the laws of [Your
        Jurisdiction], excluding its conflicts of law rules.
      </div>

      <div className="terms_title_3">b. Entire Agreement</div>
      <div className="terms_desc">
        These Terms and Conditions constitute the entire agreement between the
        user and the Company, superseding any prior proposals, understandings,
        and contemporaneous communications.
      </div>

      <div className="terms_title_3">c. Waiver</div>
      <div className="terms_desc">
        Any waiver of compliance with these Terms and Conditions by the Company
        must be provided in writing to be binding.
      </div>

      <div className="terms_title_3">d. Severability</div>
      <div className="terms_desc">
        If any provision of these Terms and Conditions is held to be invalid or
        unenforceable, that provision shall be limited or eliminated to the
        minimum extent necessary, and the remaining provisions shall remain in
        full force and effect.
      </div>

      <div className="terms_title_3">e. Dispute Resolution</div>
      <div className="terms_desc">
        Any claim or controversy related to these Terms and Conditions will be
        settled by arbitration, subject to applicable laws. The decision of the
        arbitrator will be binding.
      </div>

      <div className="terms_title_2">4. Contact us</div>
      <div className="terms_desc">
        If you have any questions, complaints or concerns with respect to the
        Terms and Conditions, please contact us at [your contact information].
      </div>

      <div className="terms_desc">
        By using the site, you agree to these Terms and Conditions.
      </div>
    </div>
  );
};

export default Terms;
