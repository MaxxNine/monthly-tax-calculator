import Head from 'next/head';
import NavBar from '../components/Navbar';
import AdvertisementBanner from '../components/AdvertisementBanner';
import CalculatorForm from '../components/CalculatorForm';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Calculadora de Impostos Mensais</title>
                <meta
                    name="description"
                    content="Calcule quanto de impostos você paga mensalmente com base em suas despesas."
                />
                <meta
                    name="keywords"
                    content="calculadora de impostos, impostos mensais, cálculo de despesas"
                />
            </Head>
            <NavBar />
            <AdvertisementBanner />
            <main>
                <h1>Calculadora de Impostos Mensais</h1>
                <CalculatorForm />
            </main>
            <AdvertisementBanner />
        </div>
    );
};

export default Home;
