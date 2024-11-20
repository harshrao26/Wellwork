import React, { useEffect } from "react";
import "./../smallcompo/css/footer.css";
import "./privacy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Privacy = () => {
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
      <h1 className="privacy_title">PRIVACY POLICY – WellWork</h1>

      <div className="privacy_desc">
        MPM IT Solutions Private Limited, operating under the brand WellWork
        (hereinafter referred to as 'WellWork'), offers workspace rental
        services to individuals seeking accommodation (collectively, the
        "Services"), accessible at workatatlis.com. This Privacy Policy outlines
        how WellWork collects and utilizes your personal information when you
        use our website (hereinafter referred to as the 'site' or 'website')
        www.workatatlis.com. By using the Site, you agree to abide by and be
        legally bound by the terms and conditions of these Terms of Service
        ("Terms"). These Terms govern your access to and use of the Site and
        Services, including all Collective Content, and your participation in
        the Program, constituting a binding legal agreement between you and
        WellWork. If you do not agree to these Terms, you have no right to
        access information or continue using the Site or Application. Failure to
        adhere to these Terms may result in civil and criminal penalties.
      </div>
      <div className="privacy_desc">
        We highly value the trust you place in us, which is why we maintain the
        highest standards for secure transactions and customer information
        privacy. Please carefully read the following statement to understand our
        information collection and sharing practices. This privacy policy also
        details the choices you have regarding the use of your personal
        information and how you can access and update it. By using, accessing,
        or participating in the Service, you consent to the terms of this
        Privacy Policy.
      </div>
      <div className="privacy_desc">
        We reserve the right to modify our Privacy Policy at any time without
        prior notice. To stay informed about any changes, please periodically
        review this policy. By visiting this Website, you agree to be bound by
        the terms and conditions outlined in this Privacy Policy. If you
        disagree, please refrain from using or accessing our Website.
      </div>

      <div className="privacy_desc">
        By using the Website, you expressly grant us permission to access and
        disclose your personal information in accordance with this Privacy
        Policy. This Privacy Policy is incorporated into and subject to the
        Terms of Use.
      </div>
      <div className="privacy_desc">
        This Policy does not extend to information submitted by you to, or
        collected by, any third party such as brokers, payment platforms, etc.,
        that you may engage in connection with the use of Work @ WellWork Services.
        Kindly refer directly to the privacy policy of such third parties for
        relevant information. We will serve as the data controller for your
        Personal Information, managing the data you share with us and processing
        it to enhance, provide, and extend our services to you. Consequently,
        your Personal Information may be disclosed to our affiliates and third
        parties, potentially located outside the jurisdiction of India, to
        facilitate the services subscribed to by you or your Company. Any
        Personal Information gathered and shared with us will be governed by the
        Work @ WellWork Privacy Policy, subject to periodic amendments, and in
        compliance with all applicable data protection laws.
      </div>
      <div className="privacy_title_2">1. INTRODUCTION</div>

      <div className="privacy_desc">
        a. <b style={{ color: "#5b5050" }}>Personal Information:</b> "Personal
        Information" refers to data related to you, either individually or
        combined with other information, identifying you as an individual. It
        does not include aggregated or anonymized data.
      </div>
      <div className="privacy_desc">
        b. <b style={{ color: "#5b5050" }}>Our Services:</b> The term "Services"
        mentioned in this Policy pertains to the services offered by Work @
        WellWork.
      </div>
      <div className="privacy_desc">
        c. <b style={{ color: "#5b5050" }}>References to "you":</b> In this
        Policy, "you" refers to anyone utilizing our Website Services.
      </div>
      <div className="privacy_title_2">
        2. COLLECTION OF PERSONALLY IDENTIFIABLE INFORMATION AND OTHER
        INFORMATION
      </div>
      <div className="privacy_desc">
        When you use our Website, we collect and store the personal information
        you provide from time to time. Our primary objective is to offer you a
        safe, efficient, smooth, and customized experience. This enables us to
        provide services and features that are most likely to meet your needs
        and tailor our Website to enhance your experience. Importantly, we
        collect personal information that we deem necessary to achieve this
        purpose.
      </div>
      <div className="privacy_desc">
        We may gather information from the following categories, depending on
        the Services you utilize:
      </div>
      <div className="privacy_desc">
        a){" "}
        <b style={{ color: "#5b5050" }}>Contact Information and Identifiers:</b>{" "}
        This includes your name, mailing address, phone number, email address,
        and other details that facilitate communication.
      </div>
      <div className="privacy_desc">
        b) <b style={{ color: "#5b5050" }}>KYC Verification Information:</b>{" "}
        This involves your personal photograph, photo ID, government-issued
        identification, and date of birth for Know Your Customer verification.
      </div>
      <div className="privacy_desc">
        c){" "}
        <b style={{ color: "#5b5050" }}>
          Professional and Employment-Related Information:
        </b>{" "}
        Details such as your company name, title, role, team, and other
        professional information.
      </div>
      <div className="privacy_desc">
        d) <b style={{ color: "#5b5050" }}>Payment Information:</b> This
        encompasses your credit or debit card details, bank account information,
        and relevant payment details for transactions.
      </div>
      <div className="privacy_desc">
        e) <b style={{ color: "#5b5050" }}>Email Calendar Information:</b> When
        integrated with your corporate email calendar, we collect data about the
        conference rooms you book.
      </div>
      <div className="privacy_desc">
        f) <b style={{ color: "#5b5050" }}>Office Preferences:</b> Your
        preferences for temperature, fan speed, desk and chair height, desk
        location, phone booth, beverage, snack, and other preferences related to
        the Services.
      </div>
      <div className="privacy_desc">
        g) <b style={{ color: "#5b5050" }}>Utilization Information:</b> Details
        about your frequency of visits, duration of stay, and the types of
        Services used during visits, including printer or Wi-Fi usage and desk
        or conference room bookings.
      </div>
      <div className="privacy_desc">
        h) <b style={{ color: "#5b5050" }}>Communications:</b> Information
        intentionally shared, sent, or received using the Services, including
        email, SMS, Slack, feedback platforms, chatbots, voice assistants,
        calendar invitations, photos, videos, blog entries, interests, hobbies,
        lifestyle choices, and affiliated groups.
      </div>
      <div className="privacy_desc">
        i) <b style={{ color: "#5b5050" }}>Device and Usage Information:</b>{" "}
        Information about your device and electronic network activity, including
        device identifiers such as IP address, WIFI MAC address, and Bluetooth
        address.
      </div>
      <div className="privacy_desc">
        j) <b style={{ color: "#5b5050" }}>Geolocation Information:</b> Data
        obtained through your mobile device's GPS signal or WIFI signal, and
        information about your contacts based on device settings.
      </div>
      <div className="privacy_desc">
        k){" "}
        <b style={{ color: "#5b5050" }}>
          Information about Online and Offline Activity:
        </b>{" "}
        This includes data collected through Internet technologies like cookies,
        pixels, web beacons, logs, and offline activity details, such as events
        attended at WellWork locations.
      </div>
      <div className="privacy_desc">
        l) <b style={{ color: "#5b5050" }}>Sensor Data:</b> Information
        collected by sensors, such as Spatial and People Analytics Sensors (SPA
        Sensors), in various spaces, including desk occupancy sensors,
        environmental sensors, Wi-Fi network hubs, and optical camera-powered
        sensors.
      </div>
      <div className="privacy_desc">
        m) <b style={{ color: "#5b5050" }}>Other Personal Information:</b>{" "}
        Additional details like instant messenger and social media screen names,
        usernames, emergency point of contact relationship, vehicle
        identification, visit details, photos, and data or files input,
        uploaded, or stored with the Services, such as search queries and
        uploaded documents. Processing of Personal Information is also
        applicable to content and information added to your member network or
        community profile.
      </div>

      <div className="privacy_title_2">
        3. PERSONAL AND SENSITIVE INFORMATION
      </div>
      <div className="privacy_desc">
        Personal Information includes any data that can be linked to a specific
        individual or used to identify any individual, such as name, address,
        mailing address, telephone number, email address, credit card number,
        cardholder name, expiration date, booking information, and any other
        details requested during customer visits or use of the website.
      </div>
      <div className="privacy_desc">
        If you have provided consent for WellWork to use "sensitive" Personal
        Information, which uniquely identifies you under the Information
        Technology (Reasonable security practices and procedures and sensitive
        personal data or information) Rules, 2011 ("Sensitive Personal
        Information"), you can withdraw that consent at any time. WellWork
        will seek explicit consent (opt-in) before disclosing Sensitive Personal
        Information to a third party or processing it for purposes other than
        the original or subsequently authorized ones. Where required by law or
        contract, WellWork will comply with such legal or contractual
        obligations.
      </div>
      <div className="privacy_desc">
        Upon entering the Site, we collect your browser type and IP address.
        This information is collected from all visitors to WellWork.
        Additionally, we employ "cookies" to store specific information from
        your browser. Cookies and tracking technology are used depending on the
        features offered. "Cookies" are small files placed on your hard drive to
        assist in providing our services. Some features are accessible only
        through the use of a "cookie."
      </div>
      <div className="privacy_desc">
        Cookies can also reduce the frequency of password entry during a session
        and help provide information tailored to your interests. Most cookies
        are "session cookies," automatically deleted from your hard drive at the
        end of a session. You can decline our cookies if your browser permits,
        though this may limit certain features on the Website and require more
        frequent password entry during a session.
      </div>
      <div className="privacy_desc">
        You may encounter "cookies" or similar devices on certain pages of the
        Website placed by third parties. We have no control over the use of
        cookies by third parties.
      </div>
      <div className="privacy_desc">
        We can assure you that no personally identifiable information ("PII")
        like your name, address, etc., is collected or stored in the cookies
        placed by the Website. Consequently, no PII can be shared with third
        parties.
      </div>
      <div className="privacy_desc">
        Our advertising server may also place a cookie, solely for tracking the
        effectiveness of advertising displayed on our Website. No PII is
        gathered through these cookies, nor is this information shared with
        third parties. Similarly, third-party advertising companies or providers
        may place cookies. These companies may use aggregated statistics about
        your website visits to provide ads for workspace-related goods and
        services or other products and services of potential interest to you.
        This information does not include your PII.
      </div>
      <div className="privacy_desc">
        These third-party advertising companies may employ technology to gauge
        ad effectiveness. Such information is anonymous, and it is used to
        provide ads about goods and services of potential interest to you. This
        process does not collect PII; the information is anonymous and does not
        link online actions to an identifiable person.
      </div>
      <div className="privacy_desc">
        Most web browsers accept cookies automatically, but you can control
        cookie acceptance and handling through your browser settings. You can
        block cookies from specific websites while permitting cookies from
        trusted websites, such as WellWork' Website.
      </div>

      <div className="privacy_title_2">4. OTHER</div>

      <div className="privacy_desc">
        From time to time, we may introduce or enhance services available on the
        Website. To the extent that these services are used by you, we will use
        the information you provide to facilitate the requested service. For
        instance, if you email us with a question, we will use your email
        address, name, and the nature of the question to respond. We may also
        retain such information to improve the Website's usability.
      </div>
      <div className="privacy_desc">
        During the registration process, you may provide us with your name,
        company affiliation, email address, telephone number, physical address,
        and other requested information. If you wish to create an account
        requiring payment, a valid credit card number or other payment
        information may be necessary. By submitting payment information, you
        authorize WellWork to access and use this information for Service
        provision and payment acceptance.
      </div>
      <div className="privacy_desc">
        When you use the Service, you may submit information and content to your
        Profile, send messages, conduct searches, submit reviews, and transmit
        information to other Users. We store this information and registration
        data to provide you with the Service and offer personalized features.
      </div>
      <div className="privacy_desc">
        We are not responsible for circumventing privacy settings or security
        measures on the Site. After removal, copies of User Content may remain
        viewable in cached and archived pages or if other Users have copied or
        stored your User Content.
      </div>
      <div className="privacy_desc">
        If you use the Mobile Software, your location may be tracked on the
        mobile device where the Mobile Software is installed. WellWork will
        not collect, transmit, or use this information without your permission.
        We use location data to provide relevant search results for spaces in
        your area. When you download and use our Mobile Software, we collect
        device type, operating system version, and device identifier
        automatically.
      </div>
      <div className="privacy_desc">
        In general, you can browse the Website without revealing your identity
        or personal information. Once you provide your personal information, you
        are no longer anonymous to us. We indicate which fields are required and
        optional. You can choose not to provide information by avoiding specific
        services or features on the Website. We automatically track certain
        information about you based on your behaviour on our Website to perform
        internal demographic, interest, and behavioural research. This data is
        aggregated and analysed. It may include the URL from which you came, the
        next URL you visit, your computer browser information, and your IP
        address.
      </div>
      <div className="privacy_desc">
        When you transact with us, we collect additional information like
        billing address, credit/debit card details, and tracking information
        from checks or money orders. If you post messages on our message boards,
        chat rooms, or other public areas or leave feedback, we collect the
        information you provide to us. We retain this information to resolve
        disputes, offer customer support, and troubleshoot issues as allowed by
        law.
      </div>
      <div className="privacy_title_2">
        5. INFORMATION SHARING WITH THIRD PARTIES
      </div>

      <div className="privacy_desc">
        When you use the Service, you may submit information and content to your
        Profile, send messages, perform searches, submit reviews, and otherwise
        transmit information to other Users. We store this information and
        registration data to provide you with the Service and offer personalized
        features. Your location may be tracked on the mobile device if you use
        the Mobile Software, but WellWork will not use this information
        without your permission. We use location data to provide relevant search
        results for spaces in your area. As a Member, you can control when Venue
        Owners or other Members can see your location through your privacy
        settings. To opt out of location tracking, please change your settings
        at the device level.
      </div>
      <div className="privacy_desc">
        We collaborate with third parties for features, functionality,
        advertisements, and content on our Services. Such third parties have
        separate privacy statements and terms, and we are not responsible for
        their practices.
      </div>
      <div className="privacy_desc">
        When you download and use our Mobile Software, we automatically collect
        device information, such as device type, operating system version, and
        device identifier.
      </div>
      <div className="privacy_title_2">
        6. USE OF INFORMATION OBTAINED BY WellWork
      </div>

      <div className="privacy_desc">
        Upon registering with WellWork, you can create your Profile. Your
        Profile information, along with your contact details, is displayed to
        other Users. Occasionally, we may use your contact information to send
        you notifications about new services offered by WellWork and its
        partners that we believe you may find valuable. WellWork may also send
        you service-related announcements through the general operation of the
        Service. You can generally opt out of such emails by using the
        unsubscribe option included in each email. However, WellWork reserves
        the right to send you notices about your account, even if you opt out of
        all voluntary email notifications.
      </div>
      <div className="privacy_desc">
        Profile information and your reservation activity are primarily used by
        WellWork for your presentation and editing when accessing the Service.
        In some cases, other Users may supplement your Profile or contribute
        information about your Venue (if you are a Venue Owner) by submitting
        comments and reviews. You consent to WellWork making this information
        available to other Users and the public. You can adjust the privacy
        settings of your profile through your account portal. Information from
        your Profile may be available to our third-party service provider for
        search engines to help potential users find you.
      </div>
      <div className="privacy_title_2">
        7. SHARING YOUR INFORMATION WITH THIRD PARTIES
      </div>
      <div className="privacy_desc">
        You may choose to provide information about yourself, your company, or
        organization, or, if you are a Venue Owner, your Venue to other Users
        and the public by posting such information on public areas of the Site
        ("Public Information"). Public Information includes information posted
        by you in areas of the Site accessible by other Users and/or the public,
        such as Venue descriptions. Public information does not include
        information you submit to us but do not post on areas of the Site
        accessible by other Users and/or the public, such as billing and payment
        information ("Non-Public Information").
      </div>
      <div className="privacy_desc">
        We share your personal information with third parties only in the ways
        described in this privacy policy. We do not sell your personal
        information to third parties. We share your Non-Public Information with
        third parties only in limited circumstances where we believe such
        sharing is reasonably necessary to offer the Service, legally required,
        or permitted by you. For example:
      </div>
      <ul>
        <li>
          Personal Information may be shared within our member communities,
          forums, networks, and other features. We may also share such
          information with primary members or organizations that purchased
          memberships, landlords and building management for effective building
          operation, for research purposes via surveys on a voluntary basis and
          with third parties with your consent for special offers and
          promotions.
        </li>
        <li>
          We may utilise CCTV devices and systems in and around the premises. In
          connection with the same, we reserve the right to gather, acquire,
          utilize, reveal, transfer, and conduct any necessary actions,
          including but not limited to recording, maintaining, adapting,
          adjusting, altering, modifying, erasing, removing, retrieving,
          merging, duplicating, transmitting, preserving, extracting, revising,
          supplementing, concerning your CCTV Data and other Personal Data
          related to you, for the purposes of "CCTV Monitoring". These actions
          will be carried out on legal grounds such as legitimate interests,
          vital interest, compliance with the law, public interest, consent, or
          any other permissible basis according to relevant laws (provided that
          these interests do not supersede the rights and interests of
          individuals), as applicable.
        </li>
        <li>
          We will install CCTV devices at strategic points within our premises,
          buildings and facilities, except certain areas such as changing rooms,
          toilets, and shower rooms. Our CCTV devices are in operation 24 hours
          a day and they will be monitored by our security staff, except in case
          of device/system failure and/or maintenance. We will place appropriate
          signage in the monitored areas that the CCTV is in use.
        </li>
        <li>
          We may provide Non-Public Information to service providers who help us
          deliver the services we offer, such as hosting the service at a
          co-location facility, sending email updates about WellWork, removing
          repetitive information from our User lists, processing payments, or
          providing search results or links. In connection with these offerings
          and business operations, our service providers may have access to your
          Non-Public Information for a limited time to carry out these business
          activities. When we use third parties for processing any of your
          Non-Public Information, we implement reasonable contractual safeguards
          limiting the use of that Non-Public Information to providing services
          to WellWork.
        </li>
        <li>
          Additionally, WellWork may disclose website member information if
          required by law, court order, government or law enforcement authority
          request, or in good faith belief that disclosure is necessary to
          protect the rights or properties of WellWork, its affiliates,
          associates, employees, directors, or officers, or if disclosure is
          necessary to identify, contact, or take legal action against someone
          causing interference with our rights or properties, whether
          intentional or otherwise. In case of acquisition of WellWork or its
          assets, customer information will likely be transferred as part of the
          acquisition.
        </li>
        <li>
          WellWork and its affiliates may share some or all of your personal
          information with another business entity in case of a merger,
          acquisition, reorganization, or restructuring of the business. In such
          a transaction, the other business entity (or the new combined entity)
          will be required to adhere to this privacy policy regarding your
          personal information.
        </li>
      </ul>
      <div className="privacy_title_2">
        8. USE OF DEMOGRAPHIC/PROFILE DATA/YOUR INFORMATION
      </div>
      <div className="privacy_desc">
        We use personal information to provide the services you request. If we
        use your personal information for marketing purposes, we will provide
        you the option to opt out of such uses. We also use your personal
        information to resolve disputes, troubleshoot issues, maintain a secure
        service, collect payments, gauge consumer interest in our products and
        services, inform you about online and offline offers, products,
        services, and updates, customize your experience, detect and protect
        against errors, fraud, and other criminal activity, enforce our terms
        and conditions, and as otherwise described to you at the time of
        collection.
      </div>
      <div className="privacy_desc">
        To continually improve our product and service offerings, we collect and
        analyse demographic and profile data about our users' activity on our
        Website.
      </div>
      <div className="privacy_desc">
        We identify and use your IP address to help diagnose server problems and
        administer our Website. Your IP address helps identify you and gather
        broad demographic information.
      </div>
      <div className="privacy_desc">
        We may occasionally ask you to complete optional online surveys. These
        surveys may ask for contact and demographic information (like age or
        income level). We use this data to tailor your experience on our
        Website, providing content we believe you might find interesting and
        displaying content based on your preferences.
      </div>
      <div className="privacy_title_2">9. LINKS TO OTHER SITES</div>
      <div className="privacy_desc">
        Our website may contain links to other websites that collect personally
        identifiable information about you. Please note that when you click on
        one of these links, you are entering another website for which
        WellWork has no responsibility. We encourage you to read the privacy
        statement of these sites, as their policies may differ significantly
        from our privacy policy. You are solely responsible for maintaining the
        confidentiality of your password and website membership account
        information. Exercise caution and responsibility, especially when
        online. WellWork is not responsible for the privacy practices or
        content of linked websites.
      </div>
      <div className="privacy_title_2">10. SINGLE SIGN-ON</div>
      <div className="privacy_desc">
        You can log in to our site using sign-in services like an Open ID
        provider. These services authenticate your identity and may share
        certain personal information with us, such as your name and email
        address, to pre-populate our sign-up form. Services like LinkedIn's Open
        ID provider may offer the option to post information about your
        activities on this website to your profile page to share with others in
        your network.
      </div>
      <div className="privacy_title_2">11. SOCIAL MEDIA WIDGETS</div>
      <div className="privacy_desc">
        Our website includes social media features, such as the Facebook Like
        button and widgets like the Share This button or interactive
        mini-programs that run on our site. These features may collect your IP
        address, the page you are visiting on our site, and may set a cookie to
        enable proper functioning. Social media features and widgets are either
        hosted by a third party or directly on our site. Your interactions with
        these features are governed by the privacy policy of the providing
        company.
      </div>
      <div className="privacy_title_2">12. ONLINE SURVEYS</div>
      <div className="privacy_desc">
        WellWork values your opinions and comments, so we regularly conduct
        online surveys. Participation in these surveys is optional. Typically,
        the information is aggregated and used to enhance the Website, its
        services, and develop appealing content, features, and promotions for
        Website members. Survey participants remain anonymous unless otherwise
        stated in the survey.
      </div>
      <div className="privacy_title_2">13. SECURITY PRECAUTIONS</div>
      <div className="privacy_desc">
        Our Website implements stringent security measures to protect
        information under our control from loss, misuse, and alteration. When
        you change or access your account information, we use a secure server.
        Once we have your information, we adhere to strict security guidelines
        to protect it from unauthorized access. However, no method of
        transmission over the internet or electronic storage is 100% secure, so
        we cannot guarantee absolute security. If you have questions about
        security, please contact us.
      </div>
      <div className="privacy_title_2">
        14. RIGHTS IN YOUR INFORMATION: ACCESS, RECTIFICATION, ERASURE AND
        RESTRICTION
      </div>
      <div className="privacy_desc">
        In accordance with applicable law, you may have the right to:
      </div>
      <div className="privacy_desc">
        a) Request confirmation of stored, used, or shared Personal Information.
      </div>
      <div className="privacy_desc">
        b) Obtain access to or a copy of your Personal Information.
      </div>
      <div className="privacy_desc">
        c) Receive an electronic copy of Personal Information or request its
        transfer.
      </div>
      <div className="privacy_desc">
        d) Restrict uses of Personal Information, object to uses, or restrict
        sharing.
      </div>
      <div className="privacy_desc">
        e) Seek correction of inaccurate or incomplete Personal Information.
      </div>
      <div className="privacy_desc">
        f) Request erasure, anonymization, or blocking of Personal Information.
      </div>
      <div className="privacy_desc">
        g) Withdraw consent to processing; certain features may be unavailable.
      </div>
      <div className="privacy_desc">
        h) Object to automated decisions; request human intervention if
        necessary.
      </div>
      <div className="privacy_desc">i) Cancel your online account.</div>
      <div className="privacy_title_2">15. CHOICE/OPT-OUT</div>
      <div className="privacy_desc">
        We offer all users the option to opt out of receiving non-essential
        (promotional, marketing-related) communications from us on behalf of our
        partners or from us in general after setting up an account.
      </div>
      <ul>
        <li>
          You may withdraw consent for Work@ WellWork's use of "sensitive" Personal
          Information. We will seek explicit consent (opt-in) before processing
          such information.
        </li>
        <li>
          Opting Out of Marketing Communications: Unsubscribe from marketing
          emails; transaction-related emails may continue. Certain operational
          communications cannot be opted out.
        </li>
        <li>
          Collaboration: We do not sell Personal Information for direct
          marketing. Information provided for events or programs may be shared
          with partnering organizations.
        </li>
        <li>
          Text Messages: Opt-out of SMS text messages related to our Services at
          any time by replying STOP.
        </li>
      </ul>
      <div className="privacy_title_2">16. ADVERTISEMENTS ON WellWork</div>
      <div className="privacy_desc">
        We use third-party advertising companies to serve ads when you visit our
        Website. These companies may use information (excluding your name,
        address, email address, or telephone number) about your visits to this
        and other websites to provide advertisements about goods and services of
        interest to you.
      </div>
      <div className="privacy_title_2">17. AUTOMATED PROCESSING</div>
      <div className="privacy_desc">
        Automated processes may determine eligibility for new services or
        business opportunities. Safeguards, including an opportunity for human
        intervention, will be implemented where applicable and required by law.
      </div>
      <div className="privacy_title_2">18. YOUR CONSENT</div>
      <div className="privacy_desc">
        By using the Website and/or providing your information, you consent to
        the collection and use of the information you disclose on the Website in
        accordance with this Privacy Policy, including but not limited to your
        consent for sharing your information as per this privacy policy.
      </div>
      <div className="privacy_desc">
        If you have any questions about this Privacy Policy or WellWork'
        privacy practices, please contact us as provided below. You may also
        contact us to request a copy of your Non-Public Information within our
        control, to correct any inaccurate information, to stop receiving
        certain types of communications, or to request the deletion of your
        Non-Public Information that is no longer required for the purpose for
        which it was collected. We will respond to your request to access
        non-public information within 30 days.
      </div>
      <div className="privacy_title_2">19. USE, RETENTION, AND DISPOSAL</div>
      <div className="privacy_desc">
        Personal information shall be retained as long as necessary for business
        purposes identified in the notice/SoW/contract agreements at the time of
        collection or subsequently authorized by the data subjects. WellWork
        shall not retain personal information longer than necessary to fulfil
        the purposes for which it was collected and to maintain reasonable
        business records.
      </div>
      <div className="privacy_title_2">20. SECURITY</div>
      <div className="privacy_desc">
        Information security policies and procedures shall be documented and
        implemented to ensure reasonable security for personal information
        collected, stored, used, transferred, and disposed of by WellWork.
        WellWork shall ensure at all times that such Sensitive Personal
        Information remains secure within the meaning of this Privacy Policy.
      </div>
      <ul>
        <li>
          Information asset labelling and handling guidelines shall include
          controls specific to the storage, retention, and transfer of personal
          information.
        </li>
        <li>
          Management shall establish procedures that maintain the logical and
          physical security of personal information.
        </li>
        <li>
          Management shall establish procedures for the identification of
          security events and for the management and mitigation of security
          incidents related to personal information.
        </li>
        <li>
          WellWork will notify data subjects and other parties of breaches of
          security and shall investigate and report breaches as required by law.
        </li>
        <li>
          WellWork will ensure the proper disposal of personal information and
          implement controls to ensure that it cannot be reconstructed.
        </li>
      </ul>
      <div className="privacy_title_2">21. DATA TRANSFERS</div>
      <div className="privacy_desc">
        WellWork shall ensure that the transfer of personal information to a
        third party is covered by a contractual agreement between WellWork and
        the third party, requiring the third party to provide at least the same
        level of privacy protection as is required by the applicable data
        protection law.
      </div>
      <div className="privacy_title_2">22. CHILDREN'S PRIVACY</div>
      <div className="privacy_desc">
        We do not knowingly collect or solicit personal information from
        children under 18. If you are a child under 18, please do not attempt to
        register or send any personal information about yourself to us. If we
        learn that we have collected personal information from a child under 18,
        we will delete that information as quickly as possible. If you believe
        that a child under 18 may have provided us with personal information,
        please contact us.
      </div>
      <div className="privacy_title_2">23. GOVERNING LAW</div>
      <div className="privacy_desc">
        This Privacy Policy and any disputes arising under or in connection with
        this Privacy Policy, the Website, or any related services shall be
        governed by, and construed in accordance with, the laws of the Republic
        of India. Any disputes, actions, claims, or causes of action arising out
        of or in connection with this Privacy Policy, the Website, or any
        related services shall be subject to the exclusive jurisdiction of the
        courts at the applicable location.
      </div>
      <div className="privacy_title_2">24. MISCELLANEOUS</div>
      <div className="privacy_desc">
        This Privacy Policy is incorporated into and forms part of the Terms of
        Service. Each party to this Privacy Policy shall act in compliance with
        all applicable data protection laws.
      </div>
      <div className="privacy_title_2">
        25. MODIFICATIONS TO THIS AGREEMENT IN THE FUTURE
      </div>
      <div className="privacy_desc">
        Our commitment to safeguarding your information is a priority. We retain
        the right to amend, alter, append, or delete sections of this Agreement
        at our sole discretion. In the event of substantial modifications, we
        will apprise you of these changes by posting them on the Services or
        through alternative means such as email, adhering to applicable laws.{" "}
      </div>
      <div className="privacy_desc">
        The "Last Updated" date will reflect the initiation of such changes. We
        recommend reviews of this Agreement from time to time to stay abreast of
        how your information is utilized and protected. All alterations to this
        Agreement become effective promptly upon posting or notification by
        WellWork.
      </div>
      <div className="privacy_title_2">26. GRIEVANCE REDRESSAL</div>
      <div className="privacy_desc">
        If you have any grievances regarding our Privacy Policy, please contact
        us at the following email address: 
      </div>
      <div className="privacy_desc">Privacy Email: 
      <a href="mailto:info@wellwork.space">info@wellwork.space</a>
      </div>
      <div className="privacy_desc">
        WellWork will address your concerns and attempt to resolve any privacy
        issues in a timely manner.
      </div>
      <div className="privacy_title_2">27. CONTACT US</div>
      <div className="privacy_desc">
        If you have any questions or concerns regarding this Privacy Policy,
        please contact us at:
      </div>
      <div className="privacy_desc">
        <b style={{ color: "#5b5050" }}>
          Postal Address : WellWork, MPM Corporate Office, Plot No.44, 5th Floor, Jayabheri Pine Valley Colony, Gachibowli, Hyderabad – 500032, Telangana.
        </b>{" "}
        <FontAwesomeIcon
            icon={faEnvelope}
            color="#5B5050"
            style={{
              cursor: "pointer",
              margin: "0 10px",
            }}
          /><a href="mailto:info@wellwork.space">info@wellwork.space</a>
      </div>
      <div className="privacy_desc">
        <b style={{ color: "#5b5050" }}>GRIEVANCE OFFICER:</b> [Name] [Contact
        Information] [Email Address]
      </div>
      <div className="privacy_title_2">CONCLUSION</div>

      <div className="privacy_desc">
        WellWork is committed to protecting the privacy of your personal information. 
        We recommend that you check this page regularly to keep up to date. 
        This Policy was last updated on 9th May, 2024.
      </div>
    </div>
  );
};

export default Privacy;
