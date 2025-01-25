import {FC} from "react"

const About: FC = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <div className='mt-20 max-w-xl text-center mx-auto'>
        <h2 className='text-4xl md:text-6xl font-bold mb-8'>
          We love{' '}
          <span className='bg-blue-500 text-white text-3xl md:text-5xl px-4 py-2 rounded-xl'>
            comfy
          </span>
        </h2>
        <p className='text-base md:text-lg leading-relaxed text-gray-700'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
          quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia
          optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo
          sed officiis ea tempore! Similique eos minima sit porro, ratione
          aspernatur!
        </p>
      </div>
    </div>
  )
}

export default About
