import React from 'react';
import { LuArrowRightCircle } from 'react-icons/lu';

const Card = ({
    title,
    content,
    author,
    publishedAt,
    url,
    urlToImage,
    altImage
}) => {
    const truncateTitle = (title) => {
        const noTitle = "No title for this news";
        if (!title) {
            return noTitle;
        }
        const words = title.split(" ");
        if (words.length > 20) {
            return words.slice(0, 20).join(" ") + " ...";
        }
        return title;
    }
    const truncateContent = (content) => {
        const noContent = "Visit website to read full article";
        if (!content) {
            return noContent;
        }
        const words = content.split(" ");
        if (words.length > 20) {
            return words.slice(0, 20).join(" ") + " ...";
        }
        return content;
    }
    const truncateAuthor = (author) => {
        const noAuthor = "Anonymous";
        if (!author) {
            return noAuthor;
        }
        const words = author.split(" ");
        if (author.length > 2) {
            return words.slice(0, 2).join(" ") + " ...";
        }
        return author;
    }
    const truncateTime = (time) => {
        const timestamp = time;
        const truncateDate = timestamp.substring(0, 10);
        return truncateDate;
    }
    return (
        <div className="max-w-lg mx-auto bg-gray-200 m-6 rounded-xl shadow-xl overflow-hidden md:max-w-5xl border border-gray-600">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-full shadow-lg w-full object-cover md:w-48" src={urlToImage ? urlToImage : altImage} alt="poster not found" />
                </div>
                <div className="p-8">
                    <p className="block mt-1 text-lg leading-tight font-medium text-black">{truncateTitle(title)}</p>
                    <p className="mt-2 text-gray-500">{truncateContent(content)}</p>
                    <div className="mt-4 flex items-center">
                        <p className="text-sm text-gray-600">{truncateAuthor(author)}</p>
                        <a href={url} className="ml-4 text-[#279371] hover:underline flex items-center">
                            Read more
                            <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                    <p className="mt-2 text-gray-400 text-sm">
                        PUBLISHED AT: <span className="text-gray-600">{truncateTime(publishedAt)}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
