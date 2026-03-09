import React from 'react';
import './LegalPage.css';

export default function TermsOfServicePage() {
    return (
        <section className="legal-section page-section">
            <div className="container">
                <div className="legal-header">
                    <span className="legal-tag">LEGAL</span>
                    <h1 className="legal-title">TERMS OF<span className="accent">.</span><br />SERVICE</h1>
                    <p className="legal-effective">Effective Date: February 23, 2026 &nbsp;·&nbsp; Last Updated: February 23, 2026</p>
                </div>

                <div className="legal-body">
                    <p className="legal-intro">
                        Welcome to Maheen's Palette. By accessing or using this portfolio website, you agree
                        to be bound by these Terms of Service. If you do not agree to all the terms and
                        conditions herein, please do not use this website.
                    </p>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">01 &mdash; Acceptance of Terms</h2>
                        <p>
                            By accessing this website at any URL or domain on which Maheen's Palette is hosted,
                            you confirm that you are at least 13 years of age, have read and understood these Terms,
                            and agree to be bound by them. These Terms apply to all visitors, users, and others
                            who access or use the website.
                        </p>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">02 &mdash; Intellectual Property</h2>
                        <p>
                            All content displayed on this website — including but not limited to designs, illustrations,
                            fashion sketches, graphic design work, photographs, text, logos, and branding — is the
                            exclusive intellectual property of <strong>Maheen Nouman</strong> unless otherwise stated.
                        </p>
                        <ul className="legal-list">
                            <li>You may <strong>not</strong> reproduce, distribute, modify, adapt, publish, or create derivative works from any content on this site without prior written permission.</li>
                            <li>You may <strong>not</strong> use any portfolio work for commercial purposes without an explicit licensing agreement.</li>
                            <li>You may share links to this website for personal, non-commercial, educational, or reference purposes with appropriate credit.</li>
                            <li>Unauthorised use of any content may constitute an infringement of copyright and other applicable laws.</li>
                        </ul>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">03 &mdash; Portfolio Work &amp; Commissions</h2>
                        <ul className="legal-list">
                            <li>All portfolio works shown are original creations by Maheen Nouman unless explicitly credited otherwise.</li>
                            <li>Viewing portfolio work does not constitute any grant of rights or licence to use the work.</li>
                            <li>Commission or collaboration inquiries must be made via official contact channels. Any agreement for commissioned work will be governed by a separate written contract.</li>
                            <li>Maheen Nouman reserves the right to decline any commission or project without providing a reason.</li>
                        </ul>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">04 &mdash; Permitted Use</h2>
                        <p>You agree to use this website only for lawful purposes. You must not:</p>
                        <ul className="legal-list">
                            <li>Use the site in any way that violates applicable local, national, or international laws or regulations.</li>
                            <li>Transmit any unsolicited or unauthorised advertising or promotional material (spam).</li>
                            <li>Attempt to gain unauthorised access to any part of the website, its server, or any associated system.</li>
                            <li>Interfere with or disrupt the integrity or performance of the website.</li>
                            <li>Use any automated tool, scraper, bot, or spider to extract data from this website.</li>
                            <li>Impersonate Maheen Nouman or misrepresent your affiliation with any person or entity.</li>
                        </ul>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">05 &mdash; Third-Party Links</h2>
                        <p>
                            This website may contain links to third-party websites (e.g., Instagram, LinkedIn, Behance).
                            These links are provided for your convenience only. We have no control over the content,
                            privacy practices, or policies of those sites and accept no responsibility for them.
                            Visiting any linked website is entirely at your own risk.
                        </p>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">06 &mdash; Disclaimer of Warranties</h2>
                        <p>
                            This website and its content are provided on an <strong>"as is" and "as available"</strong> basis
                            without any warranties, express or implied. We do not warrant that the website will be
                            uninterrupted, error-free, or free of viruses or other harmful components.
                            We expressly disclaim all warranties including but not limited to implied warranties of
                            merchantability, fitness for a particular purpose, and non-infringement.
                        </p>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">07 &mdash; Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, Maheen Nouman shall not be liable for any indirect,
                            incidental, special, consequential, or punitive damages arising out of your access to or
                            use of (or inability to use) this website or its content, even if advised of the
                            possibility of such damages.
                        </p>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">08 &mdash; Privacy</h2>
                        <p>
                            Your use of this website is also governed by our{' '}
                            <a href="/privacy" className="legal-link">Privacy Policy</a>,
                            which is incorporated into these Terms by reference. Please review it to understand
                            our data collection and usage practices.
                        </p>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">09 &mdash; Modifications to Terms</h2>
                        <p>
                            We reserve the right to modify or replace these Terms at any time at our sole discretion.
                            Changes will be effective immediately upon posting to the website. Your continued use
                            of the site following the posting of revised Terms means you accept and agree to the changes.
                        </p>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">10 &mdash; Governing Law</h2>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of
                            <strong> Pakistan</strong>, without regard to its conflict of law provisions.
                            Any disputes arising under these Terms shall be subject to the exclusive jurisdiction
                            of the courts located in Pakistan.
                        </p>
                    </div>

                    <div className="legal-block">
                        <h2 className="legal-section-heading">11 &mdash; Contact</h2>
                        <p>If you have any questions about these Terms, please contact:</p>
                        <div className="legal-contact-card">
                            <p><strong>Maheen Nouman</strong></p>
                            <p>Email: <a href="mailto:imaheenwrites@gmail.com" className="legal-link">imaheenwrites@gmail.com</a></p>
                            <p>Instagram: <a href="https://www.instagram.com/maheens_notepad" className="legal-link" target="_blank" rel="noopener noreferrer">@maheens_notepad</a></p>
                        </div>
                    </div>
                </div>

                <div className="legal-footer-nav">
                    <a href="/privacy" className="legal-nav-link">VIEW PRIVACY POLICY →</a>
                </div>
            </div>
        </section>
    );
}
