import { MouseEvent, useMemo, useState } from 'react';
import { IconX } from '@tabler/icons-react';
import Modal, { ModalProps } from '../modal/Modal.tsx';
import PillButton from '../button/PillButton.tsx';
import Tabs, { Tab } from '../tab/Tabs.tsx';
import Image from '../../model/Image.ts';
import styles from './ImageViewModal.module.scss';

interface ImageViewModalProps extends ModalProps {
  images: Image[],
}

export default function ImageViewModal({ images, ...props }: ImageViewModalProps) {
  // `tabs` will contain nothing if `images` contains nothing
  const tabs = useMemo<Tab<Image>[]>(() => images.map(image => (
    {
      text: image.alt,
      hideText: true,
      graphic: <img src={image.src} alt={image.alt}/>,
      data: image,
    }
  )), [images]);
  const [ tab, setTab ] = useState<Tab<Image>>(tabs[0]);

  const onClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      props.requestClose();
    }
  };

  return (
    <Modal {...props} className={styles.dialog} onClick={onClick}>
      <div className={styles.alt}>
        <p><span>ALT</span>{tab?.data?.alt}</p>
      </div>
      <PillButton Icon={IconX} className={styles.close} onClick={props.requestClose} title='Close Image'/>
      <div className={styles.surface}>
        <div className={styles.main_image_container}>
          <img className={styles.main_image} src={tab?.data?.src} alt={tab?.data?.alt}/>
        </div>
        <Tabs className={styles.image_selection}
              tabClassName={styles.image_tab}
              selectorClassName={styles.image_selector}
              onTabChange={tab => setTab(tab)}
              tabs={tabs}
              selectedTab={tab} />
      </div>
    </Modal>
  );
}