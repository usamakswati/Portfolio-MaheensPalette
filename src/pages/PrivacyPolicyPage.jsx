import React from 'react';
import './LegalPage.css';

export default function PrivacyPolicyPage() {
    return (
        <section className="legal-section page-section">
            <div className="container">
                <div className="legal-header">
                    <span className="legal-tag">LEGAL</span>
                    <h1 className="legal-title">PRIVACY<span className="accent">.</span><br />POLICY</h1>
                    <p className="legal-effective">Effective Date: February 23, 2026 &nbsp;·&nbsp; Last Updated: February 23, 2026</p>
                </div>

                <div className="legal-body">
                    <p className="legal-intro">
                        Maheen's Palette ("we", "our", or "us") is committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your
                        information when you visit this portfolio website. Please read this policy carefully.
                    </p>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">01 &mdash; Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <ul className="legal-list">
                            <li><strong>Personal Identification Information:</strong> Name, email address, or any other information you voluntarily provide via contact forms or direct email.</li>
                            <li><strong>Usage Data:</strong> Browser type, pages visited, time spent on pages, referring URLs, and other diagnostic data collected automatically when you visit the site.</li>
                            <li><strong>Device Information:</strong> IP address, operating system, device identifiers, and browser version.</li>
                            <li><strong>Cookies &amp; Tracking Technologies:</strong> Small data files placed on your device to enhance browsing experience and analyse site traffic.</li>
                        </ul>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">02 &mdash; How We Use Your Information</h2>
                        <ul className="legal-list">
                            <li>To respond to enquiries and provide requested information about collaborations or commissions.</li>
                            <li>To improve, personalise, and optimise the website experience.</li>
                            <li>To analyse usage patterns and monitor traffic for security and performance purposes.</li>
                            <li>To comply with legal obligations and enforce our terms.</li>
                            <li>We do <strong>not</strong> sell, trade, or rent your personal information to third parties.</li>
                        </ul>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">03 &mdash; Cookies</h2>
                        <p>
                            This website may use cookies and similar tracking technologies to enhance your experience.
                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                            Disabling cookies may affect certain functionality of the site.
                        </p>
                        <ul className="legal-list">
                            <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the site (e.g., Google Analytics).</li>
                            <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
                        </ul>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">04 &mdash; Third-Party Services</h2>
                        <p>
                            We may use third-party services such as Google Analytics, social media embedding (Instagram, LinkedIn),
                            and hosting providers. These services have their own privacy policies governing the use of your information.
                            We encourage you to review those policies independently.
                        </p>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">05 &mdash; Data Security</h2>
                        <p>
                            We implement appropriate technical and organisational security measures to protect your personal
                            information against unauthorised access, alteration, disclosure, or destruction.
                            However, no method of transmission over the Internet is 100% secure, and we cannot
                            guarantee absolute security.
                        </p>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">06 &mdash; Your Rights</h2>
                        <p>Depending on your jurisdiction, you may have the following rights:</p>
                        <ul className="legal-list">
                            <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
                            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                            <li><strong>Right to Erasure:</strong> Request deletion of your personal data.</li>
                            <li><strong>Right to Restriction:</strong> Request we limit the processing of your data.</li>
                            <li><strong>Right to Object:</strong> Object to our processing of your personal data.</li>
                            <li><strong>Right to Data Portability:</strong> Request transfer of your data to another party.</li>
                        </ul>
                        <p>To exercise any of these rights, please contact us at <a href="mailto:imaheenwrites@gmail.com" className="legal-link">imaheenwrites@gmail.com</a>.</p>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">07 &mdash; Children's Privacy</h2>
                        <p>
                            This website is not directed to individuals under the age of 13. We do not knowingly
                            collect personal information from children. If you believe we have inadvertently collected
                            information from a minor, please contact us immediately.
                        </p>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">08 &mdash; Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page
                            with an updated effective date. Your continued use of the website after such changes constitutes
                            your acceptance of the new policy.
                        </p>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">09 &mdash; Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please reach out:</p>
                        <div className="legal-contact-card">
                            <p><strong>Maheen Nouman</strong></p>
                            <p>Email: <a href="mailto:imaheenwrites@gmail.com" className="legal-link">imaheenwrites@gmail.com</a></p>
                            <p>Instagram: <a href="https://www.instagram.com/maheens_notepad" className="legal-link" target="_blank" rel="noopener noreferrer">@maheens_notepad</a></p>
                        </div>
                    </div>
                </div>

                <div className="legal-footer-nav">
                    <a href="/terms" className="legal-nav-link">VIEW TERMS OF SERVICE →</a>
                </div>
            </div>
        </section>
    );
}
