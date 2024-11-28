import React from 'react'

const Listitem = () => {
    const categroies = ['All', 'Music', 'React router', 'Computer Programming', 'Reverberation', 'Music musicals', 'India national cricket team',
        'News', 'Indian soap opera', 'Cricket', 'Mixes'
    ]
    return (
            <div className='flex px-3 overflow-x-scroll hide-scroll-bar'>
            <div className='flex space-x-4 flex-nowrap'>
                {categroies.map((item) => {
                    return (
                        <div key={item} className='mb-4 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer'>{item}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Listitem