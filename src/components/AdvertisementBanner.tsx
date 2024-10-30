import styles from './AdvertisementBanner.module.css';

const AdvertisementBanner = ({ startScreen }: { startScreen?: boolean }) => {
    return (
        <div className={`${styles.wrapper} ${startScreen ? styles.marginTop : ''}`}>

        </div>
    );
};

export default AdvertisementBanner;
