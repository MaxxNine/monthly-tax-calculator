// pages/index.js
import Head from 'next/head';
import CalculatorForm from '../components/CalculatorForm';

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
                <meta name="author" content="Seu Nome ou Empresa" />
                <meta property="og:title" content="Calculadora de Impostos - Saiba quanto você paga de impostos" />
                <meta
                    property="og:description"
                    content="Descubra o valor total de impostos que você paga no Brasil. Calcule impostos sobre sua renda e despesas mensais."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://seu-dominio.com" />
                <meta property="og:image" content="https://seu-dominio.com/images/og-image.jpg" />
                <meta property="og:locale" content="pt_BR" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Calculadora de Impostos - Saiba quanto você paga de impostos" />
                <meta
                    name="twitter:description"
                    content="Use nossa calculadora para descobrir o total de impostos que você paga no Brasil."
                />
                <meta name="twitter:image" content="https://seu-dominio.com/images/og-image.jpg" />
                <link rel="canonical" href="https://seu-dominio.com" />
            </Head>
            <main>
                <h1>Calculadora de Imposto</h1>
                <CalculatorForm />
            </main>
        </>
    );
};

export default CalculatorPage;
