import Gambar from '../../assets/image 1.png'
import NavAdmin from '../navbar/NavAdmin';

const ListPaslon: React.FC = () => {
    return(
        <>
        <NavAdmin/>
        <h1 className='text-center font-extrabold text-4xl mt-14 mb-12' style={{ color: '#5E5400' }}>LIST PASLON</h1>
        <div className='flex justify-center text-sm pb-96'>
            <table className='table-auto border-collapse border border-gray-300'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='border w-16 border-gray-400 py-2 text-center'>No. Urut</th>
                        <th className='border w-36 border-gray-400 py-2 text-center'>Logo</th>
                        <th className='border w-36 border-gray-400 py-2 text-center'>Ketua Umum</th>
                        <th className='border w-80 border-gray-400 py-2 text-center'>Visi & Misi</th>
                        <th className='border w-80 border-gray-400 py-2 text-center'>Alamat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-gray-400 py-2 text-center align-top'>1</td>
                        <td className='border border-gray-400 py-2 align-top'>
                            <div className='flex justify-center items-center'>
                                <img className='w-16 h-20 rounded-md' src={Gambar} alt="" />
                            </div>
                        </td>
                        <td className='border border-gray-400 py-2 align-top text-center'>Cintara Surya Paloh</td>
                        <td className='border border-gray-400 pl-3 align-top'>
                            <ul className='list-disc list-inside'>
                                <li>Memindahkan Indonesia ke Isekai.</li>
                                <li>Nonton anime 3x sehari.</li>
                                <li>Melakukan peresapan pada budaya Jepang.</li>
                            </ul>
                        </td>
                        <td className='border border-gray-400 pl-3 align-top'>
                            <ul className='list-disc list-inside'>
                                <li>Partai Persatuan Wiboo.</li>
                                <li>Partai Redbull.</li>
                                <li>Partai Black Magic.</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ListPaslon;


