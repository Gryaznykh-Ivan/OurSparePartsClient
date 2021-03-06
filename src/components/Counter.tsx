import React from 'react'

interface Props {
    value: number,
    onIncrease: () => void
    onDecrease: () => void
}

export default function Counter({ value, onIncrease, onDecrease }: Props) {
    return (
        <div className="bg-gray-100 rounded-xl h-8 flex items-center">
            <button className="h-full flex-1 flex justify-center items-center" onClick={ () => onDecrease() }>
                <svg className="" width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="12" height="2" rx="1" fill="#676767" />
                </svg>
            </button>
            <div className="flex-1">{ value }</div>
            <button className="h-full flex-1 flex justify-center items-center" onClick={ () => onIncrease() }>
                <svg className="" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="5" width="12" height="2" rx="1" fill="#676767" />
                    <rect x="5" y="12" width="12" height="2" rx="1" transform="rotate(-90 5 12)" fill="#676767" />
                </svg>
            </button>
        </div>
    )
}
