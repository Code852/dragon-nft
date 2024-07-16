'use client'

import { useRef, useEffect, useState } from 'react';

interface BackgroundProps {
    background: string;
    teeth: string;
    skin: string;
    upper: string;
    lower: string;
    eye: string
}
const ImageCombiner: React.FC<BackgroundProps> = ({ background, eye, teeth, skin, upper, lower }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const resultImageRef = useRef<HTMLImageElement | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [combinedImage, setCombinedImage] = useState<string | null>(null);

    useEffect(() => {
        handleCombineImages();
    }, [background, teeth, skin, upper, lower, eye]);

    const handleCombineImages = () => {
        const canvas = canvasRef.current;

        if (!canvas) {
            console.error('Canvas element not found');
            return;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) {
            console.error('Failed to get canvas context');
            return;
        }

        const defaultBackground = teeth ? teeth : '/assets/base-trex.png'
        const defaultEye = '/assets/eye.png'

        const images: string[] = [
            background ? background : defaultEye,
            defaultBackground,
            skin ? skin : defaultEye,
            upper ? upper : defaultEye,
            lower ? lower : defaultEye,
            defaultEye
        ];

        Promise.all(images.map(src => loadImage(src))).then(loadedImages => {
            loadedImages.forEach(image => {
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            });
            const combinedImage = canvas.toDataURL('image/png');
            if (resultImageRef.current) {
                resultImageRef.current.src = combinedImage;
            }
        }).catch(error => {
            console.error('Error loading images:', error);
        });
    };

    const loadImage = (src: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div style={{ position: 'relative', width: '600px', height: '600px' }}>
                <canvas ref={canvasRef} width="600" height="600" style={{ display: 'none' }} />
                <img ref={resultImageRef} alt="Combined" style={{ width: '600px', height: '600px' }} />
            </div>

            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        position: 'relative',
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                    }}>
                        {combinedImage && (
                            <img src={combinedImage} alt="Combined" style={{ width: '600px', height: '600px' }} />
                        )}
                        <button onClick={closeModal} style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'transparent',
                            border: 'none',
                            fontSize: '16px',
                            cursor: 'pointer'
                        }}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageCombiner;