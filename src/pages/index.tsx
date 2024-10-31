// pages/index.js
import Head from 'next/head';
import CalculatorForm from '../components/CalculatorForm';
import NavBar from '@/components/Navbar';
import AdvertisementBanner from '@/components/AdvertisementBanner';
import Script from 'next/script';

const CalculatorPage = () => {
    return (
        <>
            <Head>
                <title>Calculadora de Impostos - Descubra quanto você paga de impostos no Brasil</title>
                <meta
                    name="description"
                    content="Use nossa calculadora para descobrir quanto você paga de impostos no Brasil. Calcule impostos sobre renda, consumo, financiamento de carro e casa."
                />
                <meta
                    name="keywords"
                    content="Impostos no Brasil, Calculadora de Impostos, Quanto eu pago de imposto, Imposto de Renda, ICMS, PIS, COFINS, Tributação, Economia"
                />
                <meta name="author" content="Natan Tavares" />
                <meta name="author" content="Gabriel Max" />
                <meta property="og:title" content="Calculadora de Impostos - Saiba quanto você paga de impostos" />
                <meta
                    property="og:description"
                    content="Descubra o valor total de impostos que você paga no Brasil. Calcule impostos sobre sua renda e despesas mensais."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://impostonobrasil.com" />
                <meta property="og:image" content="https://impostonobrasil.com/images/og-image.jpg" />
                <meta property="og:locale" content="pt_BR" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Calculadora de Impostos - Saiba quanto você paga de impostos" />
                <meta
                    name="twitter:description"
                    content="Use nossa calculadora para descobrir o total de impostos que você paga no Brasil."
                />
                <meta name="twitter:image" content="https://impostonobrasil.com/images/og-image.jpg" />
                <link rel="canonical" href="https://impostonobrasil.com" />


            </Head>
            <Script
                src="https://alwingulla.com/88/tag.min.js"
                data-zone="111393"
                async
                data-cfasync="false"
                strategy="afterInteractive" // Loads the script after the page is interactive
            />
            <NavBar />
            <AdvertisementBanner startScreen />

            <main>
                <div className='topo'>
                    <h1>Calculadora de Imposto</h1>
                </div>
                <CalculatorForm />
            </main>
            <AdvertisementBanner />

        </>
    );
};

export default CalculatorPage;
