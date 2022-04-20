import Head from 'next/head'
import Nav from '../src/components/navbar/Nav'
import Info from '../src/components/Info'
import Services from '../src/components/Services'
import Earn from '../src/components/Earn'
import Video from '../src/components/Video'
import Ecosystem from '../src/components/Ecosystem'
import Audited from '../src/components/Audited'
import FarmBoxes from '../src/components/FarmBoxes'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Harvest: Earn Passive Yield on Your Crypto</title>
          <meta name="description" content="The #1 place in DeFi to put your idle crypto assets to work in 'set and forget' fashion!" />
        </Head>
        <Nav/>
        <main>
          <Info/>
          <Services/>
          <Earn/>
          <Video/>
          <Ecosystem/>
          <Audited/>
          <FarmBoxes/>
        </main>
      </div>
      <Footer/>
    </>
  )
}
