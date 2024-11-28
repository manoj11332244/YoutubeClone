import React from 'react'
import { Link } from 'react-router-dom'
import Time from '../loader/Time'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { abbreviateNumber } from 'js-abbreviation-number'

const SuggestedVideo = ({ video }) => {
  return (
    <div>
      <Link to={`video/${video?.videoId}`} >
        <div className='flex mb-3'>
          <div className='relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:min-w-[168px] rounded-xl hover:rounded-none duration-200'>
            <img className='h-full w-full rounded-lg' src={video?.thumbnails[0]?.url} />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>

          <div className='flex flex-col ml-3 overflow-hidden'>
            <span className=' flex items-center text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2'>
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className='text-[12px] lg:text-[10px] xl:text-[12px] ml-1' />
              )}
            </span>

            <div className='flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold  truncate overflow-hidden'>
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="flex text-[24px] leading-none font-bold  relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SuggestedVideo