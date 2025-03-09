import { minHeight } from "@mui/system";
import React from "react";

const PrivacyPolicy = () => {
  const styles = {
    container: {
      backgroundColor: "#1a202c",
    //   minHeight: "100vh",
      color: "#f7fafc",
      fontFamily: "'Poppins', sans-serif",
      padding: "1rem",
    },
    logo: {
      height: "50px",
      objectFit: "contain",
    },
    content: {
      backgroundColor: "#2d3748",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "1rem",
      minHeight:"calc(100vh - 2rem)"
    },
  };

  return (
    <div style={styles.container}>

      <div style={styles.content}>
        <h1 style={{textAlign:"center"}}>Terms and Conditions</h1>

        <h2>1 . Introduction</h2>
        <ul>
          <li>            Welcome to our platform! By accessing or using our website, you agree to
            be bound by these Terms and Conditions. If you do not agree with any
            part of these terms, you must not use our services.</li>
        </ul>

          <h2>2 . Virtual Coins</h2>
          <ul>
            <li>            When you buy any quantity (N) of a coin, you are required to pay an amount
            equal to <code>N * Current Coin Value</code>. Similarly, when you sell
            your coins, you will receive an amount equal to <code>N * Current Coin Value</code>
            at the time of the transaction.</li>
          </ul>

          <h2>3 . Eligibility</h2>
          <ul>
            <li>
            To use our services, you must be at least 18 years old and agree to provide
            accurate and complete information during the registration process.
            </li>
          </ul>

          <h2>4 . Prohibited Activities</h2>
          <ul>
            <li>
            You agree not to engage in any unlawful, fraudulent, or harmful activities
            on our platform, including but not limited to manipulating coin values or
            hacking the system.
            </li>
          </ul>

          <h2>5 . Changes to Terms</h2>
          <ul>
            <li>
            We reserve the right to modify these Terms and Conditions at any time.
            Changes will be effective immediately upon being posted on the website.
            </li>
          </ul>

          <h2>6 . Limitation of Liability</h2>
          <ul>
            <li>
            We are not responsible for any losses or damages arising from the use of
            our platform, including but not limited to fluctuations in coin values.
            </li>
          </ul>

          <h2>7 . Contact Us</h2>
          <ul>
          <li>
            If you have any questions about these Terms and Conditions, please
            contact us .
            </li>
          </ul>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
