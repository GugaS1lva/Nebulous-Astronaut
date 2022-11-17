import AstronautPreview from '../../assets/img/Astronaut-Preview.png'

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center gap-x-32 my-8 p-4 sm:my-14  md:my-0 lg:flex-row lg:gap-x-16 lg:px-32">
      <div className='flex flex-col items-center justify-center w-[300px] sm:w-[500px]'>
        <h2 className='text-4xl sm:text-6xl font-bold font-Montserrat text-primary-700 lg:w-[420px] '>Compartilhe seu universo!</h2>

        <p className='my-8 text-primary-700 w-72'>Histórias, momentos, reflexões, experiências, o que você quiser!</p>

        <button className="w-40 h-12 rounded-lg bg-primary-700 text-white font-semibold hover:bg-primary-900 hover:scale-105 transition-all">Começar agora!</button>
      </div>

      <div className='my-14'>
        <img src={AstronautPreview} alt="" />
      </div>
    </section>
  )
}

export default Hero