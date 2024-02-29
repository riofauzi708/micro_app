import logo from '../../assets/Logo-Dw.png'

const Footer: React.FC = () => {
    return(
        <>
        <div className='bg-black flex items-center py-12'>
        <img className='ml-40' src={logo} alt="" />
        <div className='text-white ml-8'>
          <p className='font-semibold'>DUMBWAYS.ID</p>
          <p className='text-sm text-white opacity-65 w-68 font-thin'>Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota</p>
          <p className='text-sm text-white opacity-65 w-68 font-thin'>Tangerang Selatan, Banten 15413</p>
        </div>
      </div>
      <hr />
      <div className='bg-black py-4'>
        <p className='text-center text-white'>Komisi Pemilihan Umum DumbWays.ID | yourname 2023</p>
      </div>
        </>
    )
}

export default Footer;