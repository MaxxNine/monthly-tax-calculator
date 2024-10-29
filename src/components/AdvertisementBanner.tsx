import styles from './AdvertisementBanner.module.css';

const AdvertisementBanner = ({ startScreen }: { startScreen?: boolean }) => {
    return (
        <div className={`${styles.wrapper} ${startScreen ? styles.marginTop : ''}`}>
            <div className={styles.banner}>
                {/* Placeholder for advertisement */}
                <p>Espaço para Anúncios</p>
            </div>
        </div>
    );
};

export default AdvertisementBanner;
