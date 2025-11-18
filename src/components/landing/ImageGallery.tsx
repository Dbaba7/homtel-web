import LightGallery from 'lightgallery/react';
import { LightGallery as ILightGallery } from 'lightgallery/lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useRef } from 'react';

interface ImageGalleryProps {
  images: { src: string; thumb: string; subHtml: string }[];
  children: React.ReactNode;
}

export function ImageGallery({ images, children }: ImageGalleryProps) {
  const lightboxRef = useRef<ILightGallery | null>(null);

  return (
    <div onClick={() => {
      if (lightboxRef.current) {
        lightboxRef.current.openGallery();
      }
    }}>
      {children}
      <LightGallery
        onInit={(ref) => {
          if (ref) {
            lightboxRef.current = ref.instance;
          }
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        dynamic
        dynamicEl={images}
      />
    </div>
  );
}
