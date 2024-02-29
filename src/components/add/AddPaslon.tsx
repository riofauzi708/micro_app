import Gambar from '../../assets/image 1.png'
import Navboard from '../navbar/NavAdmin'

const AddPaslon: React.FC = () => {
    return(
        <>
        <Navboard/>
        <div className='bg-white pb-32'>
            <h1 className='text-center font-extrabold text-4xl mt-14 mb-16' style={{ color: '#5E5400' }}>ADD PASLON</h1>
            <div className='flex justify-center'>
                <img className='size-3/12 mr-12 ml-52' src={Gambar} alt="" />
            <form className='mr-28 pr-24'>
                <label className='block text-gray-600 text-lg font-bold mb-2' htmlFor=""> 
                    Nama</label>
                <input className='shadow outline outline-2 outline-gray-400 rounded-lg w-full h-14 pr-80 p-2 text-gray-900 mb-4' type="text" />

                <label className="block text-gray-600 text-lg font-bold mb-2" htmlFor=''>
                    Nomor Urut</label>
                <input className='shadow outline outline-2 outline-gray-400 rounded-lg w-full h-14 pr-80 p-2 text-gray-900 mb-4' type="text" />

                <label className="block text-gray-600 text-lg font-bold mb-2" htmlFor=''>
                    Visi Misi</label>
                <textarea className='block shadow outline outline-2 outline-gray-400 rounded-lg w-full h-56 p-2 text-gray-900 mb-6' />
                <button className="w-96 text-white text-2xl font-bold py-2.5 px-4 rounded-lg" style={{ backgroundColor: '#5E5400' }} type="button">
                    SUBMIT
                </button>
            </form>
            </div>
            </div>
        </>
        
    )
}

export default AddPaslon;