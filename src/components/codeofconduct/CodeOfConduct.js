import React from 'react'

export default function CodeOfConduct() {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <p>Code of Conduct</p>

            <span>
                All users of AskResidenci PowerHouse are expected to adhere to the following guidelines to ensure a
                professional and respectful environment.
            </span>

            <section>

                <h5 id="professionalism">1. Professionalism</h5>

                <span>
                    Users must conduct themselves in a professional manner. This includes treating other users,
                    clients, and employees with respect and courtesy at all times.
                </span>

                <h5 id="fair-use-of-data">2. Fair Use of Data</h5>

                <span>
                    Users must ensure that the data they access and manage through the CRM app is used responsibly
                    and in compliance with legal and ethical guidelines. Misuse of client data will result in
                    immediate action.
                </span>

                <h5 id="compliance-with-local-laws">3. Compliance with Local Laws</h5>

                <span>
                    All users are required to comply with local, national, and international laws when using the
                    AskResidenci PowerHouse app. Violations will be reported to the appropriate authorities.
                </span>

                <h5 id="data-security">4. Data Security</h5>

                <span>
                    Users are responsible for ensuring the security and confidentiality of any sensitive data
                    accessed through the app. Breaches of security will be treated seriously.
                </span>

                <h5 id="disciplinary-actions">5. Disciplinary Actions</h5>

                <span>
                    Violations of this Code of Conduct may result in warnings, account suspension, or termination,
                    depending on the severity of the offense.
                </span>

                <h5 id="contact">6. Contact Us</h5>

                <span>
                    For any questions or concerns regarding this Code of Conduct, please contact us at powerhousesocial@askresidenci.com.
                </span>

            </section>
        </div>
    )
}
