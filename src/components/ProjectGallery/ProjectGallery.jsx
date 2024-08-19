import { useState } from 'react';
 
 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Navigation, Scrollbar, Pagination, Keyboard, EffectCoverflow } from 'swiper/modules';

 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/scrollbar';
 import 'swiper/css/pagination';
 import 'swiper/css/effect-coverflow';
 import './swiper.css';
 import styles from './ProjectGallery.module.css';

// Gallery Data
import galleryData from './projectGalleryData';

 const ProjectGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
        <main className={styles.projectGallerySection} id="gallerySection">
            <header className={styles.activeSlideInfoDiv}>
                <a className={styles.activeTitle} target="_blank" rel="noopener noreferrer" href={galleryData[activeIndex].link}>{galleryData[activeIndex].name}</a>
                <a className={styles.activeSlideLink} target="_blank" rel="noopener noreferrer" href={galleryData[activeIndex].link}><button>Visit Website</button></a>
                <p className={styles.tutorial}>{'(Swipe on image)'}</p>
            </header>
            <Swiper 
            className={styles.projectGallery}
            modules={[Navigation, Scrollbar, Pagination, Keyboard, EffectCoverflow]}
            slidesPerView={1}
            navigation={{
                enabled: false,
            }}
            // responsive breakpoints
            breakpoints={{
                // when window width is >= 500px
                600: {
                    slidesPerView: 3,
                    navigation: {
                        enabled: true,
                    },
                }
            }}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true }}
            keyboard
            onSlideChange={(swiperCore) => {
                setActiveIndex(swiperCore.realIndex);
            }}
            effect={'coverflow'}
            coverflowEffect={{
                rotate: 50,
                slideShadows: false,
            }}

            >

                {galleryData.map((website, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img className={styles.websitePic} src={website.imgSrc} />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </main>
        </>
    )
}

export default ProjectGallery