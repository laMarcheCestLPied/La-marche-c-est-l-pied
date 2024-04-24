import React, { useEffect, useState } from 'react';

const Card = ({ data, datasPhoto }) => {
    const [limit, setLimit] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [finish, setFinish] = useState(false);

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
        let loadError = false;
    
        const loadImage = (imageSrc) => {
            return new Promise((resolve) => {
                const image = new Image();
                image.src = imageSrc;
                image.onload = () => {
                    const width = (image.naturalWidth * 250) / image.naturalHeight;
                    sumImageWidth += width;
    
                    if (!loadError && sumImageWidth < screenWidth - newLimit * 50) {
                        newLimit++;
                        if (datasPhoto.length === newLimit) {
                            newLimit++;
                            setLimit(newLimit);
                        }
                        resolve();
                    } else {
                        setLimit(newLimit);
                        setFinish(true);
                    }
                };
                image.onerror = () => {
                    loadError = true;
                    setFinish(true);
                    resolve(); // Resolve même en cas d'erreur pour ne pas bloquer l'exécution
                };
            });
        };
    
        const loadImagesSequentially = async () => {
            for (let i = 0; i < datasPhoto.length; i++) {
                await loadImage(datasPhoto[i]);
                if (finish) {
                    break;
                }
            }
        };
    
        loadImagesSequentially();
    
    }, [screenWidth, datasPhoto]);

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
                {datasPhoto.slice(0, limit).map((photo) => (
                    <img
                        className="me-3"
                        key={photo}
                        src={photo}
                        alt={photo}
                        height={250}
                    />
                ))}
            </figure>
        </>
    );
};

export default Card;
