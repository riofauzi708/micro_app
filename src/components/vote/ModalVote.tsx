import { Link } from 'react-router-dom';
import Gambar from '../../assets/image 3.png'

const ModalVote: React.FC = () => {
    return(
        <div className='bg-gray-300 py-1'>
        <div className='bg-white mx-10 my-10 pt-4 pb-20 rounded-2xl'>
        <h1 className='text-center font-extrabold text-5xl mt-14 mb-12' style={{ color: '#5E5400' }}>MASUKAN PILIHAN MU</h1>
        <div className='flex items-center justify-center gap-5'>
        <div className="relative py-6 px-4 rounded-xl" style={{backgroundColor: '#fcff63', boxShadow: '-1px 1px 10px 0'}}>
            <img className="w-80 h-56" src={Gambar} alt="" />
            <div className="absolute top-0 right-0 p-2 bg-rose-400 rounded-full size-20 outline outline-white">
                <p className="text-white font-semibold text-3xl text-center mt-3">1</p>
            </div>
            <div>
                <p className='font-bold text-xl' style={{ color: '#5d5a00', textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white' }}>
                    CINTARA SURYA PALOH
                    </p>
                <p>Memindahkan Indonesia ke Isekai</p>
                <p className="font-bold">Partai Pengusung :</p>
                <ul className="list-disc pl-6">
                    <li>Partai persatuan monyet</li>
                    <li>Partai sapi perah indonesia</li>
                    <li>Partai pisang masak</li>
                </ul>
            </div>
            </div>
            <div className="relative shadow-md bg-gray-200 py-6 px-4 rounded-xl">
            <img className="w-80 h-56" src={Gambar} alt="" />
            <div className="absolute top-0 right-0 p-2 bg-gray-400 rounded-full size-20 outline outline-white">
                <p className="text-white text-3xl text-center mt-3">2</p>
            </div>
            <div>
            <p className='font-bold text-xl' style={{ color: '#5d5a00', textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white' }}>
                    BAGAS BASEDAN
                    </p>
                <p>Memindahkan Indonesia ke Isekai</p>
                <p className="font-bold">Partai Pengusung :</p>
                <ul className="list-disc pl-6">
                    <li>Partai persatuan monyet</li>
                    <li>Partai sapi perah indonesia</li>
                    <li>Partai pisang masak</li>
                </ul>
            </div>
            </div>
            <div className="relative shadow-md bg-gray-200 py-6 px-4 rounded-xl">
            <img className="w-80 h-56" src={Gambar} alt="" />
            <div className="absolute top-0 right-0 p-2 bg-gray-400 rounded-full size-20 outline outline-white">
                <p className="text-white text-3xl text-center mt-3">3</p>
            </div>
            <div>
            <p className='font-bold text-xl' style={{ color: '#5d5a00', textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white' }}>
                    AGUNG PRANOWO
                    </p>
                <p>Memindahkan Indonesia ke Isekai</p>
                <p className="font-bold">Partai Pengusung :</p>
                <ul className="list-disc pl-6">
                    <li>Partai persatuan monyet</li>
                    <li>Partai sapi perah indonesia</li>
                    <li>Partai pisang masak</li>
                </ul>
            </div>
            </div>
            </div>
            <div className='flex items-center justify-center mt-16 gap-10'>
            <div className='py-2.5 px-52 text-center rounded-xl outline outline-yellow-900 focus:outline-none focus:shadow-outline' style={{outlineColor: '#5E5400' }}>
            <button className="text-2xl font-bold" style={{ color: '#5E5400' }} type="button">
                    RESET
                </button>
            </div>
            <div className='py-2.5 px-52 text-center rounded-xl outline focus:outline-none focus:shadow-outline' style={{ backgroundColor: '#5E5400', outlineColor: '#5E5400' }}>
            <Link to={'/voting'}>
            <button className="text-white text-2xl font-bold" type="button">
                    SUBMIT
                </button>
            </Link>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ModalVote;