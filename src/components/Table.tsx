import React from 'react'

export interface TableRow {
    key: string,
    value: string
}

interface Props {
    data: Array<TableRow>
}

export default function Table({ data }: Props) {
    return (
        <div className="w-full max-h-80 overflow-y-auto my-3"> 
            <div className="divide-y ">
                {data.map((row, index) =>
                    <div key={ index } className="flex py-2 items-center">
                        <div className="w-1/2 text-gray-600">{row.key}</div>
                        <div className="w-1/2 sm:text-left text-right">{row.value}</div>
                    </div>
                )}
            </div>
        </div>
    )
}
