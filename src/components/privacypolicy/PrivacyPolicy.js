import React from 'react'

export default function PrivacyPolicy() {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <p>Privacy Policy</p>

            <span>
                At AskResidenci PowerHouse, we respect your privacy and are committed to protecting it through compliance
                with this policy. This Privacy Policy describes the types of information we may collect from you
                and how we use it.
            </span>

            <section>

                <h5 id="information-we-collect">1. Information We Collect</h5>

                <span>
                    We collect personal data such as name, email, phone number, RERA number, location (city and
                    locality), and information related to your use of our CRM services. We may also collect
                    geolocation data through employee attendance tracking.
                </span>

                <h5 id="how-we-use-your-information">2. How We Use Your Information</h5>

                <span style={{ marginBottom: "15px" }} >
                    The data we collect is used to:
                </span>
                <ul>
                    <li>Manage your account and CRM-related services.</li>
                    <li>Track employee attendance with live location and selfies.</li>
                    <li>Provide real-time dashboards for performance monitoring.</li>
                    <li>Improve our app and services based on user behavior.</li>
                </ul>

                <h5 id="data-sharing">3. Data Sharing</h5>

                <span>
                    We do not share personal information with third parties except when necessary to operate our
                    services or when required by law. We may share data with trusted service providers for hosting
                    or analytics purposes.
                </span>

                <h5 id="cookies-and-tracking-technologies">4. Cookies and Tracking Technologies</h5>

                <span>
                    We may use cookies, web beacons, and other tracking technologies to collect information about
                    your browsing activities to improve user experience and monitor the performance of our app.
                </span>

                <h5 id="data-retention">5. Data Retention</h5>

                <span>
                    We retain personal information as long as necessary to provide our services and fulfill our
                    legal obligations. Once the data is no longer required, we securely delete or anonymize it.
                </span>

                <h5 id="your-rights">6. Your Rights</h5>

                <span>
                    You have the right to access, correct, or delete your personal data. You can exercise these
                    rights by contacting us at powerhousesocial@askresidenci.com.
                </span>

                <h5 id="changes-to-this-policy">7. Changes to This Policy</h5>

                <span>
                    We may update this Privacy Policy periodically. Please check this page for any changes. Your
                    continued use of our app after any changes signifies acceptance of those changes.
                </span>

                <h5 id="contact">8. Contact Us</h5>

                <span>
                If you have any questions about our Privacy Policy, please contact us at powerhousesocial@askresidenci.com.
                </span>

            </section>
        </div>
    )
}
