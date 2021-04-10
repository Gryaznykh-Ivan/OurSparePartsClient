import React from 'react'

interface Props {
    className?: string,
    count: number
}

export default function Skeleton({ className, count }: Props) {
    let content = [];
    for (let i = 0; i < count; i++) {
        content.push(<div key={ i } className={ `${ className } animate-pulse min-h-4 bg-gray-200 rounded-lg` } ></div>);
    }

    return (
        <div className={`flex flex-col space-y-2 mb-2 w-full`}>
            { content.map(div => div) }
        </div>
    )
}
