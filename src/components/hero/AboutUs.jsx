<<<<<<< HEAD
﻿import React from 'react'
import styles from '../../style'
import bgImage from "../../assets/bgImage.jpg"
import { textContent } from '../../constants'

const AboutUsText = () => (
    <div className='relative w-full h-[235px] md:h-[262px] lg:h-[348px]'>
        <img src={bgImage} alt="bg-image" className=' w-full h-full object-cover' />
        <div className='absolute inset-0 flex items-center justify-center'>
            <article className={`${styles.boxWidth}${styles.paddingX} ${styles.paddingY} text-[12px] md:text-base lg:text-2xl text-center leading-[1.6]`}>{textContent}</article>
        </div>
    </div>
)

export default AboutUsText
=======
﻿import styles from '../../style';
import { Suspense } from 'react';
import bgImage from "../../assets/bgImage.jpg";
import { useTranslation } from 'react-i18next';

function AboutUsText() {
    const { t, i18n } = useTranslation();

    return (
        <Suspense fallback="loading">
            <div className='relative w-full h-[235px] md:h-[262px] lg:h-[348px]'>
                <img src={bgImage} alt="bg-image" className='w-full h-full object-cover' />
                <div className='absolute inset-0 flex items-center justify-center'>
                    <article className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} text-[12px] md:text-base lg:text-2xl text-center leading-[1.6]`}>
                        {t('main.hero')}
                    </article>
                </div>
            </div>
        </Suspense>

    );
}

export default AboutUsText;
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
