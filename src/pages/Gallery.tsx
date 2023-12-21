import { useState } from "react";
import { Gallery, Image } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images, CustomImage } from "./gallery-images";
import "../components/CSS/ImageGallery.css";
import { useTranslation } from 'react-i18next';
export interface CustomizedImage extends Image {
  original: string;
  caption: string; // Ensure this is typed as string
  tags?: { value: string; title: string }[]; // Ensure tags are typed as strings
}

export default function ImageGallery() {
  const [index, setIndex] = useState(-1);
  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;
  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);
  const { t } = useTranslation();

  // Translate captions and tags
  const translatedImages = images.map((image) => ({
    ...image,
    caption: typeof image.caption === 'string' ? t(image.caption) : '',
    tags: image.tags?.map((tag) => ({
      ...tag,
      value: typeof tag.value === 'string' ? t(tag.value) : '',
      title: typeof tag.title === 'string' ? t(tag.title) : ''
    }))
  }));

  return (
    <div className="gallery-container">
      <h1>
        Gallery
      </h1>
      <Gallery
        images={translatedImages}
        onClick={handleClick}
        enableImageSelection={false}
        tagStyle={{
          color: 'white',
          backgroundColor: 'black', 
          fontSize: '0.7em', 
          fontWeight: 'bold', 
          padding: '0.1em 0.3em 0.3em 0.3em', 
          borderRadius: '3px', 
          margin: '0.1em 0.3em 0.3em 0em' 
        }}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
}