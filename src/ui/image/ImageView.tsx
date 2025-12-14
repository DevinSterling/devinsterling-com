import { ImgHTMLAttributes, useState } from 'react';
import { IconMaximize } from '@tabler/icons-react';
import ModalAware from '../modal/ModalAware.ts';
import CustomButton from '../button/CustomButton.tsx';
import ImageViewModal from './ImageViewModal.tsx';
import Image from '../../model/Image.ts';
import styles from './ImageView.module.scss';

interface ImageProps extends ModalAware, ImgHTMLAttributes<HTMLImageElement> {
  images: Image[],
  image?: Image,
}

export default function ImageView({
  images,
  image = images[0],
  className = '',
  onModalShow,
  onModalClose,
  ...props
}: ImageProps) {
  const [ showImageView, setShowImageView ] = useState<boolean>(false);
  const img_props = { src: image?.src, alt: image?.alt}

  return (
    <>
      <ImageViewModal images={images}
                      show={showImageView}
                      onModalShow={onModalShow}
                      onModalClose={onModalClose}
                      requestClose={() => setShowImageView(false)}/>
      <div {...props} className={`${styles.container} ${className}`}>
        <CustomButton {...img_props}
                      as='img'
                      onClick={() => setShowImageView(true)}
                      className={styles.image}
                      role='button'
                      tabIndex={0}/>
        <IconMaximize className={styles.enlarge} />
      </div>
    </>
  );
}