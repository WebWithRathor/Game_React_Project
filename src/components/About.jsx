import GameController from '../assets/pngimg.com - gamepad_PNG60.png'

const About = () => {
  return (
    <div className="poster flex px-14 py-5 h-[60vh]  text-white">
    <div className="poster-headings w-1/2 pt-12">
      <h1 className='text-5xl font-semibold leading-8'>Discover the Ultimate Resource,</h1>
      <h1 className='text-6xl font-semibold mt-2 '>for <span className='warfare drop-shadow-[0px_0px_5px_rgba(141,27,181,.7)] text-[rgb(141,27,181)] font-bold uppercase'>Game</span> enthusiasts</h1>
      <p className='mb-5 mt-4 w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aspernatur vero quia consectetur nulla cupiditate, ducimus odit quos natus labore magnam pariatur, minima exercitationem eligendi laboriosam illo. Velit, ipsam saepe?</p>
     <button className='mt-2 px-6  font-semibold py-3 bg-[#8d1bb5] shadow-[0_0px_15px_1px_#8d1bb5]  rounded text-lg text-white'>Aao about pdho <i className="ri-arrow-right-line"></i></button>

    </div>
    <img src={GameController} alt="" className='ml-auto w-[37%] hue-rotate-[110deg]  object-cover -rotate-6' />
  </div>
  )
}

export default About