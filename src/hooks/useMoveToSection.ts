/**
 * @description 섹션으로 이동하기 위한 hook
 * @returns {{ handleMove: (sectionId: string) => void }}
 */
export const useMoveToSection = (): { handleMove: (sectionId: string) => void } => {
  const handleMove = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const sectionTop = sectionElement?.getBoundingClientRect().top as number;

    window.scrollTo({
      top: window.scrollY + sectionTop,
      behavior: 'smooth',
    });
  };

  return { handleMove };
};
