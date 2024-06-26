import React from 'react'

function CardOnboarding({
                            img,
                            product,
                            selected,
                            setSelectedProduct
                        }) {

    const handleClick = () => {
        setSelectedProduct(product.id);
    };

    return <button onClick={handleClick}>
        {
            selected ? <>
                <div className='border-2 border-[#F9E900] w-32 h-auto bg-[#0E0025] rounded-xl pt-8 pb-8'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={img} alt="img" className='w-9 h-9 mb-8 rounded-full'/>
                        <h1 className='text-white text-[15px] font-bold'>{product.title}</h1>
                        <p className='text-white text-[10px]'>#{product.slug}</p>
                    </div>
                </div>
            </> : <>
                <div className='border border-[#411A83] w-32 h-auto bg-[#0E0025] rounded-xl pt-8 pb-8'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={img} alt="img" className='w-9 h-9 mb-8 rounded-full'/>
                        <h1 className='text-white text-[15px] font-bold'>{product.title}</h1>
                        <p className='text-white text-[10px]'>#{product.slug}</p>
                    </div>
                </div>
            </>
        }
    </button>
}

export default CardOnboarding