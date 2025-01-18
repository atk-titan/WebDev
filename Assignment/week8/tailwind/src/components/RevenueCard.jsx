import React from 'react';

const RevenueCard = (props) => {
  return (
    <div className='bg-white rounded-md shadow-md px-8 py-4'>

        <div className='flex justify-start items-center gap-4 text-xl text-gray-700 mb-3'>

            <h3 className='text-gray-700'>{props.title}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>

        </div>

        {parseInt(props.order)?<div className='flex justify-between items-center text-xl'>
            <h1 className='text-2xl font-semibold'>{props.amount}</h1>

            <div className='flex justify-end items-center text-blue-400 underline cursor-pointer'>

                <h3 >{parseInt(props.order)} Orders</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </div>
        </div>:null}
    </div>
  );
}

export default RevenueCard;