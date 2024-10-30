import Head from 'next/head';
import NavBar from '../components/Navbar';
import AdvertisementBanner from '../components/AdvertisementBanner';
import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';

interface RulesProps {
    content: string;
}

const Rules: React.FC<RulesProps> = ({ content }) => {
    return (
        <>
            <Head>
                <title>Regras de Cálculo - Entenda como os impostos são calculados</title>
                <meta
                    name="description"
                    content="Saiba como os impostos são calculados na nossa calculadora. Entenda as alíquotas de Imposto de Renda, INSS, FGTS, ICMS, PIS, COFINS e mais."
                />
                <meta
                    name="keywords"
                    content="Regras de Cálculo, Cálculo de Impostos, Impostos no Brasil, Alíquotas, Imposto de Renda, INSS, FGTS, ICMS, PIS, COFINS"
                />
                <meta name="author" content="Seu Nome ou Empresa" />
                <meta property="og:title" content="Regras de Cálculo - Entenda como os impostos são calculados" />
                <meta
                    property="og:description"
                    content="Descubra as regras e fórmulas usadas para calcular os impostos na nossa calculadora."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://impostonobrasil.com/rules" />
                <meta property="og:image" content="https://impostonobrasil.com/images/og-image-rules.jpg" />
                <meta property="og:locale" content="pt_BR" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Regras de Cálculo - Entenda como os impostos são calculados" />
                <meta
                    name="twitter:description"
                    content="Conheça as fórmulas e alíquotas utilizadas para calcular os impostos."
                />
                <meta name="twitter:image" content="https://impostonobrasil.com/images/og-image-rules.jpg" />
                <meta name="google-adsense-account" content="ca-pub-5123942943777130" />
                <link rel="canonical" href="https://impostonobrasil.com/rules" />
            </Head>
            <NavBar />
            <AdvertisementBanner startScreen />
            <main>
                <h1>Regras de Cálculo</h1>
                <article>
                    <ReactMarkdown>{content}</ReactMarkdown>
                </article>
            </main>
            <AdvertisementBanner />
        </>
    );
};

export default Rules;

export const getStaticProps: GetStaticProps = async () => {
    const filePath = path.join(process.cwd(), 'rules.md');
    const content = fs.readFileSync(filePath, 'utf-8');
    return {
        props: {
            content,
        },
    };
};
