'use client';

import Button from '@/components/Common/Button';

interface TagsProps {
  tags: string[];
}
/**
 * @description 태그 모음 컴포넌트
 * @param {string} tags 태그들
 * @returns {JSX.Element}
 */
const Tags = ({ tags }: TagsProps): JSX.Element => {
  return (
    <div className="flex flex-row gap-4 overflow-x-scroll pt-6">
      {tags.map((tag, index) => (
        <Button key={`tag-${tag}-${index}`} text={tag} onClick={() => console.log('Hello')} />
      ))}
    </div>
  );
};

Tags.displayName = 'Tags';
export default Tags;
