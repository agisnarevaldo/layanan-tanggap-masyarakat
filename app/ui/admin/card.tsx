interface CardProps {
    children: React.ReactNode;
    classname?: string;
    count: number;
    title: string;
}

export default function Card({children, classname, count, title}: CardProps) {
    return (
        <div className={`w-64 h-44 p-4 rounded-3xl ${classname} `}>

            <div className='flex justify-between items-center'>

            {/* <Icon icon="bxs:report"  className='text-white text-[50px]' /> */}
            {children}
            <h2 className='text-[70px] font-medium'>{count}</h2>
            </div>
            <p className='mt-4'>{title}</p>

        </div>
    )
}


