import React, { useEffect } from "react";
import "./../smallcompo/css/footer.css";
import "./privacy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { MailToText, TextRed } from "../smallcompo/TextTheme";

const RefundPrivacy = () => {
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
      <h1 className="privacy_title">WellWork Refund Policy</h1>
      <h4 className="">
        Effective Date:{" "}
        <span style={{ fontWeight: "400" }}>23rd August, 2024</span>
      </h4>

      <div className="privacy_desc">
        At WellWork, we strive to provide exceptional coworking experiences for
        our members and guests. However, we understand that there may be
        occasions when you need to cancel or modify your booking. This Refund
        Policy outlines the conditions under which refunds will be granted for
        services purchased online through Razorpay, including meeting rooms,
        conference rooms, virtual offices, cabins, and hot desks.
      </div>

      <div className="privacy_title_2">1. General Conditions </div>

      <ul>
        <li className="privacy_desc">
          Refunds are <TextRed>solely</TextRed> available only for bookings made
          directly through WellWork’s online platform and paid via Razorpay.
        </li>
        <li className="privacy_desc">
          All refund requests must be submitted through the official channel by
          contacting <MailToText>support@wellwork.space</MailToText> within the
          specified timeframes.
        </li>
        <li className="privacy_desc">
          <TextRed>
            The booking is not officially cancelled until the member/guest
            receives a cancellation confirmation through E-mail/SMS/Notification
            from WellWork. In case confirmation of cancellation is not received
            by the User, it shall be the duty of member/guest to contact and
            inform WellWork about the same.
          </TextRed>
        </li>
      </ul>

      <div className="privacy_title_2">
        2. Meeting Rooms and Conference Rooms{" "}
      </div>
      <ul>
        <li className="privacy_desc">
          <b>Cancellation Policy :</b>
          <ul>
            <li style={{ listStyleType: "circle" }}>
              More than 24 hours before the booking time: Full refund.
            </li>
            <li style={{ listStyleType: "circle" }}>
              Between 12-24 hours before the booking time: 50% refund.
            </li>
            <li style={{ listStyleType: "circle" }}>
              Less than 12 hours before the booking time: No refund.{" "}
            </li>
          </ul>
        </li>
        <li className="privacy_desc">
          <b>Modification Policy :</b>
          <ul>
            <li style={{ listStyleType: "circle" }}>
              Modifications to bookings are allowed up to 24 hours before the
              scheduled time without any additional charge. Modifications made
              within 24 hours may incur a fee or be subject to availability{" "}
              {"   "}
              {/* may be rejected at WellWork’s discretion if accommodation is not
            possible. */}
              <TextRed>
                and may be rejected at WellWork’s discretion if accommodation is
                not possible.
              </TextRed>
            </li>
          </ul>
        </li>
      </ul>

      <div className="privacy_title_2">3. Virtual Offices</div>
      <ul>
        <li className="privacy_desc">
          <b>Cancellation Policy :</b>
          <ul style={{ listStyleType: "circle" }}>
            <li style={{ listStyleType: "circle" }}>
              Virtual office services are provided on a subscription basis.
            </li>
            <li style={{ listStyleType: "circle" }}>
              Cancellation before the subscription start date: Full refund.
            </li>
            <li style={{ listStyleType: "circle" }}>
              Cancellation after the subscription has started: No refund.
            </li>
          </ul>
        </li>
        <li className="privacy_desc">
          <b>Modification Policy :</b>
          <ul style={{ listStyleType: "circle" }}>
            <li style={{ listStyleType: "circle" }}>
              Changes to virtual office plans can be made at the end of the
              current billing cycle. No mid-cycle modifications are permitted.
            </li>
          </ul>
        </li>
      </ul>
      <div className="privacy_title_2">4. Cabins and Hot Desks </div>
      <ul>
        <li className="privacy_desc">
          <b>Cancellation Policy :</b>
          <ul style={{ listStyleType: "circle" }}>
            <li style={{ listStyleType: "circle" }}>
              More than 72 hours before the booking time: Full refund.
            </li>
            <li style={{ listStyleType: "circle" }}>
              24-72 hours before the booking time: 50% refund.{" "}
            </li>
            <li style={{ listStyleType: "circle" }}>
              Less than 24 hours before the booking time: No refund.
            </li>
          </ul>
        </li>
        <li className="privacy_desc">
          <b>Modification Policy :</b>
          <ul>
            <li style={{ listStyleType: "circle" }}>
              Modifications to cabin or hot desk bookings are allowed up to 24
              hours before the scheduled time without any additional charge.
              Modifications within 24 hours may not be accommodated{" "}
              <TextRed>
                and may be rejected at WellWork’s discretion if accommodation is
                not possible.
              </TextRed>
            </li>
          </ul>
        </li>
      </ul>

      <div className="privacy_title_2">5. Refund Process</div>
      <ul>
        <li className="privacy_desc">
          Once your refund request is approved, the refund will be processed
          within 7-10 business days through Razorpay. The refunded amount will
          be credited back to the original payment method used for the purchase.
        </li>
        <li className="privacy_desc">
          Please note that any transaction fees incurred during the payment
          process will not be refunded.
        </li>
      </ul>

      <div className="privacy_title_2">6. Non-Refundable Items </div>
      <ul>
        <li className="privacy_desc">
          Any additional services, add-ons, or consumables purchased alongside
          your booking are non-refundable.
        </li>
        <li className="privacy_desc">
          Promotional and discounted bookings are not eligible for refunds
          unless otherwise specified.
        </li>
        <li className="privacy_desc">
          <TextRed>
            Non-refundable items cannot be exchanged for other services,
            credits, or refunds.
          </TextRed>
        </li>
      </ul>

      <div className="privacy_title_2">7. Force Majeure </div>
      <ul>
        <li className="privacy_desc">
          In the event of cancellations due to{" "}
          <TextRed>force majeure events, including but not limited to </TextRed>{" "}
          natural disasters, <TextRed> pandemics, and</TextRed> government
          restrictions, etc.), WellWork reserves the right{" "}
          <TextRed>at its sole discretion, </TextRed>
          to offer refunds, credits, or reschedule bookings.
        </li>
      </ul>

      <div className="privacy_title_2">8. Disputes and Resolution</div>
      <ul>
        <li className="privacy_desc">
          If you have any concerns or disputes regarding your refund, please
          contact us at <MailToText>support@wellwork.space</MailToText>. We are
          committed to resolving any issues promptly and fairly.
        </li>
        <li className="privacy_desc">
          <TextRed>
            This Refund Policy is governed by the laws of India. Any disputes
            arising from this policy will be subject to the exclusive
            jurisdiction of the courts located in Hyderabad, Telangana.
          </TextRed>
        </li>
      </ul>

      <div className="privacy_title_2">9. Changes to the Refund Policy</div>
      <ul>
        <li className="privacy_desc">
          WellWork reserves the right to modify this Refund Policy at any time.
          Any changes will be communicated to customers via email or the
          website. The updated policy will apply to all bookings made after the
          effective date of the changes.
        </li>
      </ul>

      <div className="privacy_title_2">10. Contact Us</div>
      <ul>
        <li className="privacy_desc">
          For any questions or assistance regarding this Refund Policy, please
          reach out to us at <MailToText>support@wellwork.space</MailToText>.
        </li>
      </ul>

      <h3>
        Thank you for choosing WellWork. We appreciate your business and are
        committed to providing you with a seamless coworking experience.
      </h3>
    </div>
  );
};

export default RefundPrivacy;
