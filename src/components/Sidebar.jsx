import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { FiFlag } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";

const Sidebar = () => {
  const sidebaritems=[
    {
      id:1,
      name:'Home',
      icons: <GoHome />
    },

    {
      id:2,
      name:'Shorts',
      icons: <SiYoutubeshorts />
    },

    {
      id:3,
      name:'Subscriptions',
      icons: <MdOutlineSubscriptions />
    }
  ]
   
  const sidebaritems2=[
    {
      id:1,
      name:'Your channel',
      icons: <GoHome />
    },

    {
      id:2,
      name:'History',
      icons: <MdHistory />
    },

    {
      id:3,
      name:'Playlists',
      icons: <MdOutlineSubscriptions />
    },
    {
      id:4,
      name:'Your videos',
      icons: <BiVideo />
    },
    {
      id:5,
      name:'Watch later',
      icons: <MdOutlineWatchLater />
    },
    {
      id:6,
      name:"Likes videos",
      icons:<GiLinkedRings />
    }
  ]

  const sidebaritems3=[
    {
      id:1,
      name:'Trending',
      icons: <SiTrendmicro />
    },

    {
      id:2,
      name:'Shopping',
      icons: <HiOutlineShoppingBag />
    },

    {
      id:3,
      name:'Music',
      icons: <SiYoutubemusic />
    },
    {
      id:4,
      name:'Films',
      icons: <PiFilmSlateLight />
    },
    {
      id:5,
      name:'Live',
      icons: <MdOutlineWatchLater />
    },
    {
      id:6,
      name:"Gaming",
      icons:<SiYoutubegaming />
    },
    {
      id:7,
      name:'News',
      icons: <FaRegNewspaper/>
    },
    {
      id:8,
      name:'Sports',
      icons:<TfiCup/>
    },
    {
      id:9,
      name:'Courses',
      icons:<SiStylelint />
    },
    {
      id:10,
      name: ' Fashion & beauty',
      icons: <PiLightbulbLight/>
    },
    {
      id:11,
      name: 'Popcasts',
      icons: <MdPodcasts />
    }
  ]

  const sidebaritems4=[
    {
      id:1,
      name:'Youtube Premium',
      icons: <FaYoutube />
    },

    {
      id:2,
      name:'Youtube Studio',
      icons: <SiYoutubestudio />
    },

    {
      id:3,
      name:'Youtube Music',
      icons: <SiYoutubemusic />
    },
    {
      id:4,
      name:'Youtube Kids',
      icons:<SiYoutubekids/>
    }
  ]

  const sidebaritems5=[
    {
      id:1,
      name:'Settings',
      icons: <CiSettings />
    },

    {
      id:2,
      name:'Report history',
      icons: <FiFlag />
    },

    {
      id:3,
      name:'Help',
      icons: <IoIosHelpCircleOutline />
    },
    {
      id:4,
      name:'Send feedback',
      icons: <RiFeedbackLine/>
    }
  ]

  return (
    <div className="px-6 w-[17%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
      {/* Home list */}
      <div className="space-y-3 items-center">
        {
          sidebaritems.map((items)=>{
            return(
              <div key ={items.id} className=" flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                <div className="text-xl cursor-pointer"> {items.icons}</div> 
                <span className="cursor-pointer">{items.name}</span>
              </div>
            )
          })
        }

        {/* <div className=" flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
          <SiYoutubeshorts className="text-xl cursor-pointer" /> 
          <span className="cursor-pointer">Shorts</span>
        </div>

        <div key ={item.id} className=" flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
          <MdOutlineSubscriptions className="text-xl cursor-pointer" /> 
          <span className="cursor-pointer">Subscriptions</span>
        </div> */}
      </div>
      <br />
      <hr />
      {/* You */}
      <div className="mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2">
          <h1>You</h1>
          <FaChevronRight/>
        </div>
        {
          sidebaritems2.map((items)=>{
            return(
              <div key={items.id} className=" flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                <div className="text-xl cursor-pointer"> {items.icons}</div> 
                <span className="cursor-pointer">{items.name}</span>
              </div>
            )
          })
        }
      </div>
      <br />
      <hr />
      {/* Explore  */}
      <div className="space-y-3 items-center">
        <div className="mt-6">
          <h1 className="font-semibold">Explore</h1>
        </div>
        {
          sidebaritems3.map((items)=>{
            return(
              <div key={items.id} className=" flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                <div className="text-xl cursor-pointer"> {items.icons}</div> 
                <span className="cursor-pointer">{items.name}</span>
              </div>
            )
          })
        }
      </div>
      <br />
      <hr />
      {/* More Section */}

      <div className="space-y-3 items-center">
        <div className="space-x-2 items-center mt-6">
          <h1 className="font-semibold">More from Youtube</h1>
        </div>
        {
          sidebaritems4.map((items)=>{
            return(
              <div key={items.id} className=" flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                <div className="text-xl cursor-pointer text-red-600"> {items.icons}</div> 
                <span className="cursor-pointer">{items.name}</span>
              </div>
            )
          })
        }
      </div>
      <br />
      <hr />
      {/* Setting */}
      <div className="space-y-3 items-center">
        <div className="mt-6"></div>
        {
          sidebaritems5.map((items)=>{
            return(
              <div key={items.id} className=" flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                <div className="text-xl cursor-pointer"> {items.icons}</div> 
                <span className="cursor-pointer">{items.name}</span>
              </div>
            )
          })
        }
      </div>
      <br />
      <hr />
      {/* About */}
      <br />
      <span className="text-xs font-semibold text-gray-500">About Press Copyright<br />Contact us Creators<br />AdvertiseDevelopers<br />
        <br />
       <p>Term Privacy Policy & Safety <br />How Youtube works<br />Test new Features.</p>
      </span>
      <br />
      <p className="text-xs text-gray-800 mt-1"> © 2024 Copyright by Manoj</p>
    </div>
  )
}

export default Sidebar