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
        <div>
            <Head>
                <title>Regras de Cálculo - Calculadora de Impostos Mensais</title>
                <meta
                    name="description"
                    content="Saiba como os cálculos de impostos são realizados na Calculadora de Impostos Mensais."
                />
            </Head>
            <NavBar />
            <AdvertisementBanner />
            <main>
                <h1>Regras de Cálculo</h1>
                <article>
                    <ReactMarkdown>{content}</ReactMarkdown>
                </article>
            </main>
            <AdvertisementBanner />
        </div>
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
