import React, {FC} from 'react';
interface TagBadgeProps {
    tagTitle:string;
}
const TagBadge:FC<TagBadgeProps> = ({tagTitle}) => {
    return (
        <span
            className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            {tagTitle}
        </span>
    );
};

export default TagBadge;