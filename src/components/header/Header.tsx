'use client'
import Link from "next/link"
import logoTT from "../../../public/images/logo_TT.png"
import styles from "./header.module.scss"
import Image from "next/image"

const Header = () => {
  return (
    <section className={styles.header}>
        <Image className={styles.logo} alt="logo" width={344} height={73} src={logoTT}/>
        <div className={styles.links}>
            <Link className={styles.link} href={""}>Home</Link>
            <Link className={styles.link} href={""}>How It Works</Link>
            <Link className={styles.link} href={""}>Calculator</Link>
            <Link className={styles.link} href={""}>FAQ</Link>
            <Link className={styles.link} href={""}>About us</Link>
            <Link className={styles.link} href={""}>Contacts</Link>
        </div>
    </section>  
  )
}

export default Header