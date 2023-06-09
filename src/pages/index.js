import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/signup.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={styles.section}>
        <div>
          <div>
            <h1 className={styles.heading}>Create account</h1>
            <p className={styles.description}>
              For business, band or celebrity.
            </p>
          </div>
          <form className={styles.form}>
            <div className={styles.formDiv}>
              <label htmlFor="firstName">
                First name
                <input type="text" id="firstName" />
              </label>
              <label htmlFor="lastName">
                Last name
                <input type="text" id="lastName" />
              </label>
            </div>

            <div className={styles.formDiv}>
              <label htmlFor="email">
                Email or Phone number
                <input type="text" id="email" />
              </label>
              <label htmlFor="date">
                <div style={{ display: "flex", gap: "3px" }}>
                  Date of birth<span>(MM/DD/YY)</span>
                </div>
                <input type="date" />
              </label>
            </div>

            <div className={styles.formDiv}>
              <label htmlFor="password">
                password
                <input type="password" id="password" />
              </label>
              <label htmlFor="confirmPassword">
                Confirm password
                <input type="password" id="confirmPassword" />
              </label>
            </div>
          </form>
          <div className={styles.rem}>
            <div>
              {" "}
              <input type="checkbox" />
              <span>Remember me</span>
            </div>

            <Link href="/forget" legacyBehavior>
              <a>Forgot password?</a>
            </Link>
          </div>
          <div className={styles.terms}>
            <input type="checkbox" />{" "}
            <p>
              I agree to all{" "}
              <Link href="/terms" legacyBehavior>
                <a>Terms</a>
              </Link>{" "}
              and{" "}
              <Link href="/privacy" legacyBehavior>
                <a>Privacy policy</a>
              </Link>
            </p>
          </div>
          <div className={styles.button}>
            <button className={styles.createButton}>Create account</button>
            <button className={styles.googleButton}>Sign in with google</button>
          </div>
          <div className={styles.reference}>
            Don't have an account?
            <Link href="/login" legacyBehavior>
              <a>Log in</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
