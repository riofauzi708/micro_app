import NumberOne from '../../assets/1.png'
import NumberTwo from '../../assets/2.png'
import NumberThree from '../../assets/3.png'
import Gambar from '../../assets/image 2.png'
import NavAdmin from "../navbar/NavAdmin"

const Dashboard: React.FC = () => {
    return(
        <div className="bg-gray-300">
        <div className="bg-white">
        <NavAdmin/>
            <h1 className='text-center font-extrabold text-5xl mt-20 mb-14' style={{ color: '#5E5400'}}>
                DASHBOARD
            </h1>
            <div className="flex items-center justify-center gap-64">
                <img className="mr-5 size-20" src={NumberOne} alt="" />
                <img className="size-20" src={NumberTwo} alt="" />
                <img className="ml-5 size-20" src={NumberThree} alt="" />
            </div>
            <div className="flex items-center justify-center gap-9 my-6 pb-32">
            <div className="rounded-xl p-4" style={{background: '#ffcd56', boxShadow: '0 5px 1px 1px'}}>
                <img className="w-72 h-64 rounded-xl pt-3" src={Gambar} alt="" />
                <p className="text-3xl font-bold text-yellow-900" style={{textShadow: '2px 2px 0 white, -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white'}}>CINTARA SURYA</p>
                <p style={{textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white'}}>Akumulasi: 45%</p>
                <p style={{textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white'}}>Jumlah Vote: 117 Voters</p>
            </div>
            <div className="rounded-xl p-4" style={{background: '#56fff5', boxShadow: '0 5px 1px 1px'}}>
                <img className="w-72 h-64 rounded-xl pt-3" src={Gambar} alt="" />
                <p className="text-3xl font-bold text-blue-900" style={{textShadow: '2px 2px 0 white, -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white'}}>BAGAS BASEDAN</p>
                <p style={{textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white'}}>Akumulasi: 75%</p>
                <p style={{textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white'}}>Jumlah Vote: 300 Voters</p>
            </div>
            <div className="rounded-xl p-4" style={{background: '#ff5656', boxShadow: '0 5px 1px 1px'}}>
                <img className="w-72 h-64 rounded-xl pt-3" src={Gambar} alt="" />
                <p className="text-3xl font-bold text-red-900" style={{textShadow: '2px 2px 0 white, -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white'}}>AGUNG PRANOWO</p>
                <p style={{textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white'}}>Akumulasi: 45%</p>
                <p style={{textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white'}}>Jumlah Vote: 117 Voters</p>
            </div>
            </div>
        </div>
        <h1 className='text-center font-extrabold text-5xl mt-32 mb-16' style={{ color: '#5E5400'}}>
                LIST VOTER
            </h1>
            <div className='flex flex-col items-center text-sm pb-52'>
            <table className='table-auto border-collapse border border-gray-300'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='border w-12 border-gray-400 py-2 px-2 text-start'>
                            No
                        </th>
                        <th className='border w-48 border-gray-400 py-2 px-2 text-start'>
                            Nama
                        </th>
                        <th className='border w-72 border-gray-400 py-2 px-2 text-start'>
                            Alamat
                        </th>
                        <th className='border w-32 border-gray-400 py-2 px-2 text-center'>
                            Jenis Kelamin
                        </th>
                        <th className='border w-48 border-gray-400 py-2 px-2 text-center'>
                            Paslon
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            1
                        </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            Sugeng No Pants
                        </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            Cileungsi
                        </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            Laki Laki
                            </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
                                Paloh
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            2
                        </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            Diana
                        </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            Serang
                        </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            Perempuan
                            </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
                                Surya
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            3
                        </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            Aziz Union
                        </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            Bekasi
                        </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            Laki Laki
                            </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
                                Cintara
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            4
                        </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            Lae Tanjung Balai
                        </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            Tanjung Balai
                        </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            Laki Laki
                            </td>
                        <td className='border border-gray-400 py-2 px-2 align-top'>
                            <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
                                Agung
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <span className="font-bold text-2xl pr-96 mt-9">TOTAL SUARA TERKUMPUL : 1000 Voters</span>
        </div>
        </div>
    )
}

export default Dashboard;