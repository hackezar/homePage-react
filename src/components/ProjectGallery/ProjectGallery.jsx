 import { Swiper, SwiperSlide} from 'swiper/react';
 import { Navigation, Scrollbar, Pagination } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/scrollbar';
 import 'swiper/css/pagination';
 import './swiper.css';
 import styles from './ProjectGallery.module.css';

 //Website Pics
 import BusinessWebsite from '../../assets/WebPageImages/business-website.png'
 import AdminDashboard from '../../assets/WebPageImages/admin-dashboard.png';
 import Battleship from '../../assets/WebPageImages/battleship.png';
 import Calculator from '../../assets/WebPageImages/calculator.png';
 import EShop from '../../assets/WebPageImages/e-shop.png';
 import MemoryGame from '../../assets/WebPageImages/memoryGame.png';
 import ResumeBuilder from '../../assets/WebPageImages/resumeBuilder.png';
 import RockPaperScissors from '../../assets/WebPageImages/rock-paper-scissors.png';
 import TicTacToe from '../../assets/WebPageImages/tic-tac-toe.png';
 import ToDoList from '../../assets/WebPageImages/to-do-list.png';

 const ProjectGallery = () => {
    return (
        <>
        <main className={styles.projectGallerySection}>
            <div>
                Website Name
            </div>
            <Swiper 
            className={styles.projectGallery}
            modules={[Navigation, Scrollbar, Pagination]}
            slidesPerView={3}
            space-between={10}
            centeredSlides={true}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img className={styles.websitePic} src={EShop} />
                </SwiperSlide>
                <SwiperSlide>
                    <img  className={styles.websitePic} src={BusinessWebsite} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={styles.websitePic} src={AdminDashboard} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={styles.websitePic} src={Battleship} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={styles.websitePic} src={Calculator} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={styles.websitePic} src={MemoryGame} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={styles.websitePic} src={ResumeBuilder} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={styles.websitePic} src={RockPaperScissors} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={styles.websitePic} src={TicTacToe} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={styles.websitePic} src={ToDoList} />
                </SwiperSlide>
            </Swiper>
        </main>
        </>
    )
}

export default ProjectGallery