import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import Carousel from 'react-material-ui-carousel'

const ImagesModal = ({ post, setShowImagesModal }) => {
    const [imagesDisplayed, setImagesDisplayed] = useState(true);
    useEffect(() => {
        window.addEventListener('click', () => setShowImagesModal(false))
        return () => {
            window.removeEventListener('click', () => setShowImagesModal(false));
        };
    });
    return (
        <Modal>
            <div className="imagesContainer" onClick={(e) => {
                e.stopPropagation();
            }}>
                <img onClick={() => setShowImagesModal(false)} className="exitButton" src="https://img.icons8.com/fluent-systems-filled/48/000000/x.png" alt="x" />
                {post.video !== "" &&
                    <div className="imageOrVideo">
                        <button className={!imagesDisplayed ? 'buttonSelected' : ''} onClick={() => setImagesDisplayed(false)}>
                            <i className="far fa-play-circle"></i>
                            <span>וידאו</span>
                        </button>
                        <button className={imagesDisplayed ? 'buttonSelected' : ''} onClick={() => setImagesDisplayed(true)}>
                            <i className="far fa-image"></i>
                            <span>תמונות</span>
                        </button>
                    </div>}
                {
                    imagesDisplayed ?
                        <Carousel
                            autoPlay={false}>
                            {
                                post.photos.map((image) => (
                                    <img src={image} alt="" key={image} />
                                ))
                            }
                        </Carousel> :
                        <video className="videoDisplays" src={post.video} controls></video>
                }

            </div>
        </Modal>
    )
}

export default ImagesModal
