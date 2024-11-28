import React from 'react'
import Sidebar from './Sidebar'
import Video from './Video'
import { useAuth } from '../context/AuthProvider.jsx'
import Listitem from './Listitem.jsx'

const Home = () => {
  const { data, loading } = useAuth();
  return (
    <div className='flex mt-20'>
      <Sidebar />
      <div>
        <Listitem />
        <div className='h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5'>
            {
             !loading && data.map((item,id) => {
                if (item.type !== "video") return false;
                return <Video key={id} video={item?.video} />
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home