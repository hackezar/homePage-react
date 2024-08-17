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
                <div className={styles.activeTitle}><a target="_blank" rel="noopener noreferrer" href={galleryData[activeIndex].link}>{galleryData[activeIndex].name}</a></div>
                <a className={styles.activeSlideLink} target="_blank" rel="noopener noreferrer" href={galleryData[activeIndex].link}><button>Visit Website</button></a>
            </header>
            <Swiper 
            className={styles.projectGallery}
            modules={[Navigation, Scrollbar, Pagination, Keyboard, EffectCoverflow]}
            slidesPerView={3}
            space-between={10}
            centeredSlides={true}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            keyboard
            onSlideChangeTransitionEnd={(swiperCore) => {
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