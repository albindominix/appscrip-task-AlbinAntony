'use client';
import React from 'react';
import Image from 'next/image';
import styles from './component.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.sub}>
          <div className={styles.footerSubCol}>
            <h4>Be the first to know</h4>
            <p>Sign up for updates from mettā muse.</p>
            <div className={styles.subscription}>
              <input type="email" placeholder="Enter your Email..." />
              <button type="button">SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.footerSubCol}>
            <h4>CONTACT US</h4>
            <ul>
              <li><a href="#">+44 221 133 5360</a></li>
              <li><a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a></li>
            </ul>
            <h4>Currency</h4>
            <ul>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/image/flag.png" alt="Flag" width={50} height={30} />
                <span style={{ marginLeft: '10px' }}>USD</span>
              </li>

              <li><p>Transactions will be completed in Euros and a currency reference is available on hover.</p></li>
            </ul>
          </div>
          <hr style={{ width: '100%', backgroundColor: '#ccc' }} />
        </div>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>mettā muse</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliance Docs</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>FOLLOW US</h4>
            <div className={styles.socialLinks}>
              <span>w</span>
              <span>q</span>
            </div>
            <h4>mettā muse ACCEPTS</h4>
            <div className={styles.paymentOptions}>
              <Image src="/image/google.png" alt="Google Pay" width={50} height={30} />
              <Image src="/image/master.png" alt="MasterCard" width={50} height={30} />
              <Image src="/image/paypal.png" alt="PayPal" width={50} height={30} />
              <Image src="/image/amex.png" alt="Amex" width={50} height={30} />
              <Image src="/image/applepay.png" alt="Apple Pay" width={50} height={30} />
              <Image src="/image/pay.png" alt="Pay" width={50} height={30} />
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;