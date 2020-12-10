import { useState } from 'react'
import { Image, Modal } from 'semantic-ui-react';
import Slider from 'react-slick';
import { map } from 'lodash';

const settings = {
    className: "carousel-screenshots",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlider: true,
};
export default function CarouselScreenshots({ screenshots, title }) {
    const [showModal, setShowModal] = useState(false);
    const [urlImage, setUrlImage] = useState(null);

    const openImage = (url) => {
        setUrlImage(url);
        setShowModal(true);
    }

    return (
        <>
            <Slider {...settings} >
                {map(screenshots, (screenshot) => (
                    <Image
                        key={screenshot.id}
                        src={screenshot.url}
                        alt={title}
                        onClick={() => openImage(screenshot.url)}
                    />
                ))}
            </Slider>
            <Modal open={showModal} onClose={() => setShowModal(false)} size="small">
                <Image src={urlImage} alt={title} />
            </Modal>
        </>
    );
}
