import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./TermsAndConditions.css";

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      <div className="terms-container">
        
        {/* Header / Branding */}
        <div className="terms-header">
          <Link to="/" style={{ textDecoration: "none", display: "inline-block" }}>
            <img src="/images/logo.png" alt="CredAxis Logo" style={{ width: "60px", height: "auto", marginBottom: "15px", filter: "brightness(0) invert(1)" }} />
          </Link>
          <h1>terms and conditions</h1>
          <p>
              <span>Last Updated:</span> 29 June 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="terms-content">
          <div className="terms-card">
            <section>
              <h2>welcome to the CredAxis</h2>
              <p>
                welcome to the CredAxis! at CredAxis we are creating a system that strives to reward high trust and creditworthy individuals of india, inspiring others to be like them. please read the terms and conditions carefully before registering, accessing or using the CredAxis services offered through the mycredaxis website, credaxis app, or through applications or websites of credaxis group entities.
              </p>
            </section>

            <section>
              <h2>eligibility</h2>
              <p>by registering with credaxis and accessing the CredAxis services, you represent and agree to the following:</p>
              <ul className="terms-list">
                <li>a. you are capable of entering into a legally binding agreement.</li>
                <li>b. you are not barred or otherwise legally prohibited from accessing or using the credaxis app and credaxis services.</li>
                <li>c. you agree to seek your credit score from credit information companies using the credaxis app and disclose the said credit score to CredAxis. CredAxis may use the said credit score to determine your eligibility for access to various credaxis services. credaxis may at its sole discretion prevent users from accessing the credaxis app and the credaxis platforms in part or in whole if the credit score of a user is lower than a minimum entry threshold set by credaxis from time to time.</li>
                <li>d. if you onboarded on the credaxis app on or before september 30, 2023, you confirm that you were 18 years of age or older at the time of onboarding. if you onboarded on the credaxis app on or after october 1, 2023, you confirm that you were 21 years of age or older at the time of onboarding.</li>
                <li>e. if you allow anyone to use your account, including individuals under 21 years of age, you will still be responsible for ensuring that such individuals comply with these terms of use. you will be responsible for all actions these individuals take in and/or through your account. you also acknowledge that credaxis does not have the responsibility of ensuring that you meet the aforesaid eligibility requirements.</li>
              </ul>
            </section>

            <section>
              <h2>1. definitions</h2>
              <ul className="terms-list">
                <li><strong>“CredAxis”, “BisaniBrothers”, “We”, “Us”, “Our”</strong> means CredAxis and CredAxis group entities.</li>
                <li><strong>“You”, “Yours”, “Yourself”, “User”</strong> means any prospective user, or registered user of credaxis and credaxis group entities, including but not limited to customers and commercial partners.</li>
                <li><strong>“CredAxis App”</strong> means mobile application(s), hosted by credaxis and credaxis group entities for providing services to the users, and commercial partners.</li>
                <li><strong>“CredAxis Group Entities”</strong> means subsidiaries and affiliates of CredAxis.</li>
                <li><strong>“CredAxis Platform”</strong> means any platform owned/subscribed/used by credaxis or credaxis group entities including but not limited to the credaxis website, the credaxis app, other mobile applications, devices, urls/links, notifications, chatbots, credaxis’s social media channels or any other communication medium or mechanism used by credaxis or credaxis group entities to provide services to the users.</li>
                <li><strong>“CredAxis Website”</strong> means https://mycredaxis or any other website hosted or registered by credaxis or credaxis group entities.</li>
                <li><strong>“CredAxis Services”</strong> includes all services offered / to be offered by credaxis, and credaxis group entities either directly or through its commercial partners including but not limited to credaxis max services, credaxis cash services, credit card bill payment services, credaxis wallet services, credaxis money services, credaxis garage services, credaxis pay services, rewards and credaxis store services; and in relation to merchants, also includes payment aggregator services.</li>
                <li><strong>“Commercial Partner”</strong> means any individual or entity with whom credaxis or credaxis group entities have a contractual relationship and includes but is not limited to entities offering rewards on credaxis app, sellers, lenders, credaxis pay merchants etc.</li>
                <li><strong>“Sellers”</strong> means entities offering goods for sale to the users via credaxis store.</li>
                <li><strong>“Terms of use” / “Terms and Conditions”</strong> are interchangeably used and mean these terms of service including the supplemental terms.</li>
              </ul>
            </section>

            <section>
              <h2>2. your use of credaxis</h2>
              <ul className="terms-list">
                <li>a. unless otherwise permitted by credaxis in writing, you may only possess one account.</li>
                <li>b. your use of the app shall not violate any applicable law or regulation.</li>
                <li>c. your use of the credaxis app, and credaxis platforms shall be only for personal purposes.</li>
                <li>d. all registration information you submit is truthful, complete and accurate and you agree to maintain accurate, complete and up-to-date account information in your account.</li>
                <li>e. you are responsible for all activity that occurs under your account.</li>
                <li>f. you are responsible for maintaining the confidentiality of the access credentials of your account and are fully responsible for all activities that occur under your account. you agree to immediately notify credaxis of any unauthorized use of your passcode or account or any other breach of security.</li>
                <li>g. you agree that you are aware and responsible for all transactions taking place through your account. you shall continue to be responsible for the transactions in your account, if you knowingly or negligently (i) grant any other person access to your credaxis app, (ii) permit them to transact on your account, or (iii) transact on any other person’s behalf or directions; whether by sharing one-time passwords or in any other manner.</li>
                <li>h. you shall not indulge in decompiling, reverse engineering, disassembling content, removing any intellectual property right associated with the credaxis app, including our copyright, trademarks, trade secrets, designs, and patents, or other proprietary notices.</li>
                <li>i. you shall not access or use the credaxis app in any manner that (i) may be harmful to the operation of the credaxis app or its content; (ii) may be unlawful; (iii) may be harmful to credaxis or to any other user; (iv) may hinder the other user’s enjoyment of the credaxis app; or (v) to defraud other users, credaxis or any commercial partner.</li>
                <li>j. you shall not post, distribute, or otherwise transmit or make available any software or other computer files that contain a virus, other harmful component or malicious content, or otherwise impair or damage the credaxis app or any connected network, or otherwise interfere with any person or entity's use or enjoyment of the credaxis app.</li>
                <li>k. you shall not delete or modify any content of the credaxis app.</li>
                <li>l. your use of the credaxis app shall indicate that you have provided consent to automatically receive updates such as bug fixes, patches, enhanced functions, missing plug-ins and new versions (collectively, ‘updates’), for the purpose of effective delivery of the credaxis services. please note that your continued use of the credaxis app following such updates would mean deemed acceptance by you of the same.</li>
                <li>m. you understand and accept that not all products, services and rewards offered on the credaxis app are available in all geographic areas and you may not be eligible for all the products, services and rewards offered by credaxis on the credaxis app or other credaxis platforms. credaxis reserves the right to determine the availability and eligibility for any product, services and rewards offered on the credaxis app or any credaxis platform.</li>
                <li>n. you shall request credaxis, to block the account and change the passcode immediately for the account, if your device has been lost or stolen.</li>
                <li>o. you agree that if you purchase any insurance policies via the credaxis app, the nominee for such policy shall be your legal heirs (if stated therein, and if not stated, the same shall be read to mean that no nominees are listed), and you will contact the respective insurer who has issued you the policy to make any updates to the nominees. credaxis and the credaxis group entities shall not be responsible for any change required to be made in the list of nominees to your insurance policies.</li>
                <li>p. you understand that if you avail insurance on the credaxis app, our insurance partners may seek medical information from any doctor / hospital who / which at any time has attended to you, or from any past or present employer concerning anything which affects your physical / mental health, and seeking information from any other insurer to whom an application for insurance on you has been made for the purpose of underwriting the insurance proposal and / or claim settlement. you also authorise such insurance partners to share information pertaining to you, including your medical records, for the sole purpose of underwriting the insurance proposal and / or claim settlement and with any governmental and / or regulatory authority. the insurance partner may also contact you regarding any insurance you have availed / applied for, and for any servicing / claims settlement or other similar activities.</li>
              </ul>
            </section>

            <section>
              <h2>3. supplemental terms and delivery of services through credaxis group entities</h2>
              <p>
                you agree and acknowledge that several features including but not limited to credaxis wallet, credaxis money, credaxis garage, credaxis max, credaxis cash, credaxis pay, credit card bill payments and rewards, are subject to certain supplemental terms of use set out below (or where applicable, as set out in www.daspl.co.in). your usage of any features that have a set of supplemental terms of use is deemed to be acceptance of the said supplemental terms of use. you further agree that any credaxis services may be provided to you either directly by credaxis or by any credaxis group entity and in particular, any payment to you or made by you may be routed through Dreamplug PayTech Services Private Limited (“Payment Aggregator”) or Dreampurse Technologies Private Limited (“Dreampurse”).
              </p>
            </section>

            <section>
              <h2>4. violation of terms of use / suspicious activity</h2>
              <p>
                if we believe that you have violated any of the conditions as mentioned under these terms of use, our privacy policy, supplemental terms applicable to certain services or any agreements consented to via the credaxis app, we reserve the right to suspend your access to the credaxis app and/or delete your account without prior notice to you, and reverse any transaction undertaken by you. if we have reason to believe that there is suspicious or unusual activity being carried out through your account, we may temporarily or permanently suspend your access to the credaxis services, and reverse any transaction undertaken by you. if we suspect that any feature, offer or reward promotion is being availed by you in a manner (i) that is disingenuous (for example: placing orders without intending to take delivery or intending to subsequently cancel all or substantially all of them); (ii) that it is not intended to be availed; (iii) that purports to artificially increase (or decrease) your transaction volume or usage of the app (for example: paying rent or credit card bills by breaking them down into numerous smaller transactions); (iv) that is designed to deliberately side step fair use restrictions; (v) that may result in you gaining an undue, unfair or unethical advantage over other users or commercial partners; (vi) that is intended to cause losses or other harm to commercial partners, credaxis reserves the right to reverse the relevant transaction, suspend the account or restrict you from using the app in its entirety or any specific feature(s) thereof. credaxis may ask for additional information / documents if required from time to time including but not limited to your permanent account number (PAN), in connection with the above. in case you fail to provide such information / documents to credaxis’s satisfaction, credaxis may reverse any transactions undertaken by you, and may suspend your account or restrict you from using the app or any of its features.
              </p>
              <p>
                you may reach out to the credaxis support team to assist you with any query or question arising as a result of the aforementioned suspension/ deletion.
              </p>
            </section>

            <section>
              <h2>5. termination / deletion of your account</h2>
              <p>
                you may end your legal agreement with credaxis at any time by deactivating your account and discontinuing the use of the credaxis services. we provide all our users an option through which a user may request archive of a specific card stored on his/her account or deletion/deactivation of the complete account through the support section on the credaxis app.
              </p>
              <p>
                following a request for deletion, or termination of account by credaxis, we consider the agreement to be terminated and take appropriate steps. provided however, credaxis may continue to maintain transaction records for record keeping purposes and/or regulatory reasons. deletion of the account or termination also does not terminate your obligations undertaken prior to deletion or termination of the account including but not limited to the obligation to repay any loan availed by you. credaxis may continue to retain a record of your transactions made on the credaxis app for regulatory and archival purposes.
              </p>
            </section>

            <section>
              <h2>6. fees</h2>
              <p>
                you are responsible for any fees that may be applicable to certain transactions or use of the credaxis app; where you will be notified of such applicable fees, prior to the completion of any transaction. by clicking ‘proceed’ / ‘submit’ / ‘continue’ or any other similar button on the credaxis app, you shall be deemed to have consented to the fees displayed on the said page.
              </p>
            </section>

            <section>
              <h2>7. loyalty points</h2>
              <p>
                credaxis offers its users loyalty points in various forms for their regular and continuous use of the credaxis app. these loyalty points are provided for performing various actions on the credaxis app. each user who makes his/her credit card payments through the credaxis app earns loyalty points (“CredAxis Coins” or “Coins”), and the number of credaxis coins earned may vary per transaction. these loyalty points / credaxis coins are rewarded purely for the regular use of the credaxis app and the credaxis app does not permit any purchase or accrual of these loyalty points in any other way. these loyalty points may be redeemed by users to participate in various rewards/offers that are run by the credaxis app for all users from time to time.
              </p>
              <p>
                credaxis reserves the right, at its sole discretion, to change the mode of the accrual of one or any of these types of loyalty points, including the number of such loyalty points received in proportion to the user’s activities. further, credaxis reserves the right to disqualify any user, who does not meet the offer requirements or for any other reason including but not limited to any misuse of the offer or fraud or suspicious transaction/activity or under any legal requirement or applicable rules and regulations, from receiving any loyalty points. credaxis also reserves the right to discontinue or change or issue any new form of loyalty points offered at any time, at its sole discretion. credaxis may also at its discretion specify an expiry period for the credaxis coins.
              </p>
            </section>

            <section>
              <h2>8. benefit adjustment</h2>
              <ul className="terms-list">
                <li>a. in the event that credaxis processes any refund to you, credaxis reserves the right to adjust such refund amount against any benefits, rewards, or promotional incentives (including but not limited to cashbacks, discounts, credaxis coins, offer redemptions, or any other promotional offers) that were provided to you in connection with the original transaction against which such refund is being processed.</li>
                <li>b. by accepting and/or utilizing any benefits or promotional incentives offered by credaxis in connection with any transaction, you explicitly consent to this adjustment mechanism and acknowledge that the effective refund amount may be reduced by the value of such benefits already received or utilized by you.</li>
                <li>c. this adjustment mechanism applies to all transactions undertaken by you on the credaxis app, irrespective of the feature or credaxis service being availed.</li>
              </ul>
            </section>

            <section>
              <h2>9. privacy</h2>
              <p>
                we collect, hold, use and transfer your personal data in accordance with our privacy policy. by agreeing to the terms of use, you also hereby agree to our privacy policy, which may be updated and/or modified by us from time to time. you understand and agree that, to the extent permitted by applicable law, any data provided by you in connection with the credaxis services may be shared with our subsidiaries, affiliates or partners, and/ or used by us for enhancing the credaxis services, including but not limited to creating new products. please refer to the privacy policy for further clarity on the subject.
              </p>
            </section>

            <section>
              <h2>10. disclaimer</h2>
              <p>
                the credaxis services, including all content, software, functions, material, and information made available or accessible through the credaxis platform are provided “as is”. credaxis, credaxis group entities and their respective agents, co-branders or partners, make no representation and warranty of any kind for the content, software, functions, material, and information available/accessible through the services.
              </p>
              <p>
                credaxis does not warrant that the functions contained in content, information and materials on the credaxis app, including, without limitation any third-party sites or services linked to the credaxis app or any credaxis platform will be uninterrupted, timely or error-free, that the defects will be rectified, or that the credaxis app or the servers that make such content, information, and materials available are free of viruses or other harmful components.
              </p>
              <p>
                further, you understand that a payment transaction is solely between the user who uses the credaxis services to make his payment (“sender”) and the user who receives such payment from the sender (“recipient”) and that credaxis does not provide any guarantees or warranties to any user with respect any service, goods, or delivery level commitment provided by the recipient. credaxis cannot assure that commercial partners or other users are or will be complying with the foregoing terms of use or any other provisions mentioned here. you assume all risk of harm or injury resulting from any such lack of compliance by any other user or commercial partner. you should ensure that you have undertaken adequate due diligence prior to transferring payments using the credaxis app.
              </p>
            </section>

            <section>
              <h2>11. limitation of liability</h2>
              <p>
                in no event shall credaxis, credaxis group entities, their officers, shareholders, subsidiaries, associate companies, directors, employees and agents, partners, co-branders, licensors, licensees, consultants, or contractors be liable to you or any third party for any special, incidental, indirect, consequential or punitive damages or losses whatsoever, or damages for loss of data or profits, goodwill, and/ or other intangible loss, whether or not foreseeable and regardless of whether credaxis has been advised of the possibility of such damages, or based on any theory of liability, including breach of contract or warranty, negligence or other tortious action, or any other claim arising out of or in connection with your use of, or access to, the credaxis platforms, credaxis app or credaxis services.
              </p>
              <p>
                in no event shall credaxis and credaxis group entities’ total cumulative liability to you in connection with the credaxis services for all damages, losses and causes of action (whether arising under contract or otherwise), arising from or relating to your use of the credaxis app and credaxis platforms or arising from these terms of use exceed INR 10,000 (Indian Rupees ten thousand only).
              </p>
            </section>

            <section>
              <h2>12. indemnity</h2>
              <p>
                you agree to defend, indemnify and hold harmless credaxis, credaxis group entities, its officers, owners, directors, employees and agents, partners, co-branders, licensors, licensees, consultants, contractors and other applicable third parties (collectively ‘indemnified parties’) from and against any and all claims, demands, damages, obligations, losses, liabilities, cause of action, costs or debt, and expenses (including any legal fees) arising from:
              </p>
              <ul className="terms-list">
                <li>a. your use of and access to the credaxis app and the credaxis platforms;</li>
                <li>b. your violation / breach of any of these terms of use;</li>
                <li>c. your violation of any third party right, including any intellectual property right or privacy right;</li>
                <li>d. the committing of any of the prohibited activities as stated herein;</li>
                <li>e. your failure to be in compliance with applicable law, including tax laws and cyber security laws; or</li>
                <li>f. any claim that your use of the credaxis app caused damage to a third party.</li>
              </ul>
            </section>

            <section>
              <h2>13. disputes & arbitration</h2>
              <p>
                in consideration for credaxis granting you access to and use of the credaxis app, credaxis platforms and credaxis services, you agree that in case of any dispute between you and any commercial partner or other user or recipient of the funds transferred by you, credaxis shall not be a party to the same. while credaxis is not obligated to mediate or resolve disputes, credaxis will assist users in communicating with each other regarding a dispute. credaxis may at its own discretion however, without having any obligation to do so, assist in resolving the disputes between the users and the commercial partners.
              </p>
              <p>
                except as otherwise set forth in these terms of use, these terms of use shall be exclusively governed by and construed in accordance with the laws of India. any dispute, conflict, claim or controversy arising out of or broadly in connection with or relating to the credaxis services or these terms, including those relating to its validity, its construction or its enforceability, but excluding those provisions where it has been specified that credaxis’s decision shall be final, (any “dispute”) shall be, if initiated by the user, first raised by the user to credaxis customer support through the credaxis app and if not suitably resolved, the user may raise a grievance using the grievance redressal form. if such dispute has not been settled within sixty (60) days after the user reaches out to the aforementioned channels, such dispute can be referred to and shall be exclusively and finally resolved by arbitration under the Arbitration and Conciliation Act, 1996 (“Act”). provided however when credaxis raises any dispute, credaxis may directly initiate arbitration in accordance with this clause. the dispute shall be resolved by one (1) arbitrator to be appointed by CredAxis. the place of arbitration shall be Bangalore, India. the language of the arbitration shall be English. the existence and content of the arbitration proceedings, including documents and briefs submitted by the parties, and correspondence, orders and awards issued by the sole arbitrator, shall remain strictly confidential and shall not be disclosed to any third party without the express written consent from the other party unless: (i) the disclosure to the third party is reasonably required in the context of conducting arbitration proceedings; and (ii) the third party agrees unconditionally in writing to be bound by the confidentiality obligation stipulated herein.
              </p>
            </section>

            <section>
              <h2>14. use and protection of intellectual property rights</h2>
              <p>
                credaxis app, credaxis website, credaxis logos and the credaxis services are protected by copyright, trademarks, patents, trade secret and/or other intellectual property laws. no information, content or material from the credaxis app including, without limitation, all of the page headers, images, illustrations, graphics, audio clips, video clips or text, reports generated, trademarks, tradenames may be copied, reproduced, republished, uploaded, posted, transmitted or distributed in any way without our express written permission. you are hereby given a limited licence to use the credaxis app and the credaxis platforms, subject to your agreement of these terms of use.
              </p>
              <p>
                credaxis, credaxis group entities, and its licensors, if any, are the sole owners of the underlying software and source code associated with the credaxis app and credaxis platforms as well as any other intellectual property rights of any other nature associated with the credaxis app, credaxis platforms and their content.
              </p>
              <p>
                when you upload, submit, store, send or receive content that may include feedback to or through the credaxis app, you give credaxis and credaxis group entities a worldwide, perpetual licence to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display and distribute such content. this licence shall not expire even if it is not used by credaxis or credaxis group entities. the rights you grant in this licence are for the limited purpose of operating, promoting, and improving the credaxis services, and to develop new ones. this licence continues even if you stop using the credaxis services.
              </p>
            </section>

            <section>
              <h2>15. tax liability</h2>
              <p>
                you hereby agree to comply with any and all applicable tax laws in connection with your use of the credaxis services, including without limitation, the reporting and payment of any taxes arising in connection with payments made through the credaxis app, or funds/income received through the credaxis services. you hereby agree and acknowledge that if and when required by applicable law, credaxis, may deduct tax deducted at source from your winnings/ cashback (credited as credaxis balance or otherwise) and/or may require you to submit PAN details before providing you cashback or other winnings.
              </p>
            </section>

            <section>
              <h2>16. governing law and jurisdiction</h2>
              <p>
                the credaxis app, the credaxis services, all your transactions with the credaxis app, and our relationship shall be governed by the laws of India, without regard to conflict of law principles. you agree that subject to the disputes & arbitration clause above, all claims, differences and disputes which we may have shall be subject to the exclusive jurisdiction of the competent courts located in Bengaluru, Karnataka, India.
              </p>
            </section>

            <section>
              <h2>17. assignment</h2>
              <p>
                you shall not transfer or assign any of your rights and obligations arising from these terms of use.
              </p>
              <p>
                you agree and acknowledge that credaxis may assign or transfer its rights and obligations under these terms of use in whole or in part, to (i) any other credaxis group entity; (ii) an acquirer of credaxis or any credaxis group entity or their respective equity interest, business or assets; or (iii) a successor entity resulting from any corporate action including mergers or demergers.
              </p>
            </section>

            <section>
              <h2>18. general</h2>
              <p>
                no joint venture, partnership, employment or agency relationship exists between you, credaxis, credaxis group entities or any third party as a result of the contract contained in these terms of use. if any provision of these terms of use is held to be illegal, invalid or unenforceable, in whole or in part, under any law, such provision or part thereof shall to that extent be deemed not to form part of these terms of use but the legality, validity and enforceability of the other provisions in these terms of use shall not be affected. in that event, credaxis shall replace the illegal, invalid or unenforceable provision or part thereof with a provision or part thereof that is legal, valid and enforceable and that has, to the greatest extent possible, a similar effect as the illegal, invalid or unenforceable provision or part thereof, given the contents and purpose of these terms of use. these terms of use (together with any additional terms displayed in specific sections of the credaxis app or credaxis website) constitute the entire agreement and understanding of the parties with respect to its subject matter and replaces and supersedes all prior or contemporaneous agreements or undertakings regarding such subject matter.
              </p>
            </section>

            <section>
              <h2>19. updation</h2>
              <p>
                we may amend these terms of use at any time by posting an updated version on the credaxis website. the updated version of these terms of use shall supersede the previous version of the terms of use and take effect immediately upon posting. you have the right to opt-out of agreeing to these terms of use or any future updated version of the terms of use, by ceasing to use the credaxis app. however, please be aware that your continued use of the credaxis services from the launch of any updated terms of use would mean deemed acceptance of such updated terms of use including any modification thereof. we recommend you to keep checking the terms of use often to be familiar with any updates and changes.
              </p>
            </section>
          </div>
       

        </div>

      </div>
    </div>
  );
}

export default TermsAndConditions;