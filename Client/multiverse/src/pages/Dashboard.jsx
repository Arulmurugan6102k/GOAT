import { NavLink } from "react-router-dom"
export default function Regster() {
    return (
      <>
      
        {/* <div className="flex min-h-full flex-1 flex-row justify-center mt-[125px] px-6 py-12 lg:px-8"> */}

        {/* <div className="m-11 relative w-[150px] h-[150px] rounded-[30px] transition-shadow duration-300 shadow-[0px_0px_30px_rgba(209,38,197,0.5)] hover:shadow-[0px_0px_30px_rgba(209,38,197,1)]">
        <div className="absolute inset-1 bg-[white] rounded-[28px] z-1 transition-all duration-300">
        <div class="h-[150px] flex justify-center items-center ">
        <img className="h-[120px]" src="/src/images/music-player.png" alt="m" />
        </div>
        </div>
        </div>
        <div className=" m-11 relative w-[150px] h-[150px]  rounded-[30px] transition-shadow duration-300 shadow-[0px_0px_30px_rgba(209,38,197,0.5)] hover:shadow-[0px_0px_30px_rgba(209,38,197,1)]">
        <div className="absolute inset-1 bg-[white] rounded-[28px] z-1 transition-all duration-300">
        <div class="h-[150px] flex justify-center items-center ">
        <img className="h-[100px]" src="/src/images/video-lesson.png" alt="m" />
        </div>
        </div>
        </div>
        <div className="m-11 relative w-[150px] h-[150px]  rounded-[30px] transition-shadow duration-300 shadow-[0px_0px_30px_rgba(209,38,197,0.5)] hover:shadow-[0px_0px_30px_rgba(209,38,197,1)]">
        <div className="absolute inset-1 bg-[white] rounded-[28px] z-1 transition-all duration-300">
        <div class="h-[150px] flex justify-center items-center ">
        <img className="h-[100px]" src="/src/images/online-shop.png" alt="m" />
        </div>
        </div>
        </div>
        <div className="m-11 relative w-[150px] h-[150px]  rounded-[30px] transition-shadow duration-300 shadow-[0px_0px_30px_rgba(209,38,197,0.5)] hover:shadow-[0px_0px_30px_rgba(209,38,197,1)]">
        <div className="absolute inset-1 bg-[white] rounded-[28px] z-1 transition-all duration-300">
        <div class="h-[150px] flex justify-center items-center ">
        <img className="h-[100px]" src="/src/images/social-media.png" alt="m" />
        </div>
        </div>
        </div> */}

        {/* credit = { https://uiverse.io/TamaniPhiri/smooth-stingray-60 } */}
        
        <div class="flex min-h-screen gap-10 relative items-center justify-center w-full">
        <div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
          <div class="text-gray-500 group-hover:scale-105 transition-all">
          <img className="h-[100px]" src="/src/images/music-player.png" alt="m" />
          </div>
          <div class="group-hover:pb-10 transition-all duration-500 delay-200">
          </div>
          <div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
            <div class="flex text-2xl text-rose-500 p-1 hover:p-2 transition-all duration-500 delay-200 rounded-lg ">
              <p className="underline-offset-1">Songs</p> 
            </div>
          </div>
        </div>
        <div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
          <div class="text-gray-500 group-hover:scale-105 transition-all">
          <img className="h-[100px]" src="/src/images/video-lesson.png" alt="m" />
          </div>
          <div class="group-hover:pb-10 transition-all duration-500 delay-200">
          </div>
          <div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
            <div class="flex text-2xl text-rose-500 p-1 hover:p-2 transition-all duration-500 delay-200 rounded-lg ">
              <p className="underline-offset-1">Videos</p> 
            </div>
          </div>
        </div>
        <div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
          <div class="text-gray-500 group-hover:scale-105 transition-all">
          <img className="h-[100px]" src="/src/images/online-shop.png" alt="m" />
          </div>
          <div class="group-hover:pb-10 transition-all duration-500 delay-200">
          </div>
          <div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
            <div class="flex text-2xl text-rose-500 p-1 hover:p-2 transition-all duration-500 delay-200 rounded-lg ">
              <p className="underline-offset-1">Estore</p> 
            </div>
          </div>
        </div>
        <div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
          <div class="text-gray-500 group-hover:scale-105 transition-all">
          <img className="h-[100px]" src="/src/images/social-media.png" alt="m" />
          </div>
          <div class="group-hover:pb-10 transition-all duration-500 delay-200">
          </div>
          <div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
            <div class="flex text-2xl text-rose-500 p-1 hover:p-2 transition-all duration-500 delay-200 rounded-lg ">
              <p className="underline-offset-1">Social</p> 
            </div>
          </div>
        </div>
        </div>
      </>
    )
  }
  