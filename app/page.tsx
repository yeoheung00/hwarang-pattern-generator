import Image from 'next/image'
import styles from './page.module.css'
import Generator from './components/generator';

export default function Home() {
  const click1 = () => {
    console.log("rect");
  }
  return (
    <main className={styles.main}>
      <Generator/>
    </main>
  )
}
