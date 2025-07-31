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
            <a className={styles.link} href={""}>Home</a>
            <a className={styles.link} href={""}>How It Works</a>
            <a className={styles.link} href={""}>Calculator</a>
            <a className={styles.link} href={""}>FAQ</a>
            <a className={styles.link} href={""}>About us</a>
            <a className={styles.link} href={""}>Contacts</a>
        </div>
    </section>  
  )
}

export default Header