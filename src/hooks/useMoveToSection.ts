import { SECTION_TYPE } from '@/enum';

/**
 * @description 섹션으로 이동하기 위한 hook
 * @returns {{ handleMove: (sectionId: string) => void }}
 */
export const useMoveToSection = (): { handleMove: (sectionId: SECTION_TYPE) => void } => {
  const handleMove = (sectionId: SECTION_TYPE) => {
    const sectionElement = document.getElementById(sectionId);
    const sectionTop = sectionElement?.getBoundingClientRect().top as number;

    window.scrollTo({
      top: window.scrollY + sectionTop,
      behavior: 'smooth',
    });
  };

  return { handleMove };
};
