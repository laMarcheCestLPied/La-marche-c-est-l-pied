import React, { useEffect, useState } from 'react';

const Card = ({ data }) => {
    const [limit, setLimit] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  
    useEffect(() => {
        let sumImageWidth = 0;
        let newLimit = 0;

        const loadImage = (imageSrc) => {
            const image = new Image();
            image.src = `${process.env.PUBLIC_URL}/assets/img/${imageSrc}`;
            image.onload = () => {
                const width = (image.naturalWidth * 250) / image.naturalHeight;
                sumImageWidth += width;

                if (sumImageWidth < screenWidth - newLimit*50) {
                    newLimit++;
                    if (data.photos.length === 1) {
                        newLimit++;
                        setLimit(newLimit);
                    }
                } else {
                    setLimit(newLimit);
                    return;
                }
            };
        };

        for (let i = 0; i < 10; i++) {
            loadImage(data.photos[i]);
        }

        setLimit(newLimit);
    }, [data.photos, screenWidth]);

    function changeFormateDate(oldDate) {
        return oldDate.toString().split('-').reverse().join('/');
    }

    return (
        <>
            <div className="d-flex justify-content-between mx-5">
                <h5>Lieu : {data.lieu}</h5>
                <h5>Le {changeFormateDate(data.date)}</h5>
            </div>
            <p className="mx-5">{data.description}</p>
            <figure className="d-flex justify-content-evenly">
                {data.photos.slice(0, limit - 1).map((photo) => (
                    <img
                        className="me-3"
                        key={photo}
                        src={`${process.env.PUBLIC_URL}/assets/img/${photo}`}
                        alt={photo}
                        height={250}
                    />
                ))}
            </figure>
        </>
    );
};

export default Card;
