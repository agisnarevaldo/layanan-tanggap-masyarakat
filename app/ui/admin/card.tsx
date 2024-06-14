import { Icon } from '@iconify/react';

export default function Card() {
    return (
        <div className="bg-green-900 w-64 h-44 p-4 rounded-3xl">

            <div className="flex justify-between items-center">
            <Icon icon="bxs:report"  className='text-white text-[50px]' />
            <h2 className='text-[70px] text-white font-medium'>04</h2>
            </div>
            <p className='text-white mt-4'>Data Laporan Masuk</p>

        </div>
    )
}


