import React from 'react';
import Gambar from '../../assets/image 1.png';
import LeftArrow from '../../assets/Left-Arrow.png';
import RightArrow from '../../assets/Right-Arrow.png';
import Footer from "../footer/Footer";
import NavUser from '../navbar/NavUser';
import { Link } from 'react-router-dom';
import AddChart from '../add/AddChart';

const Vote: React.FC = () => {
    const[isVoting, setIsVoting] = React.useState<Boolean>(false)

    const hasVoting = () : void =>
    setIsVoting(!isVoting)

    return (
        <>
            <div className='bg-gray-300'>
            <div className='bg-white pb-16'>
                    <NavUser />
                    <h1 className='text-center font-extrabold text-5xl mt-14 mb-14' style={{ color: '#5E5400'}}>INFO PEMILU TERUPDATE</h1>
                    <div className='flex justify-center mx-40 '>
                        <div className='flex flex-col items-center w-96'>
                            <p className='font-bold text-4xl'>Hasil :</p>
                            <AddChart/>
                        </div>
                        <div className='flex flex-col items-center mb-2'>
                            <div className='shadow flex items-center rounded-xl pl-6 pr-20 gap-4 w-full my-2' style={{backgroundColor: '#ff6384'}}>
                                <div className="my-4 py-1 mr-2 bg-red-900 rounded-md w-14 h-20 outline outline-white">
                                    <p className="text-white font-semibold text-center text-wrap text-xs">
                                        No. Paslon
                                    </p>
                                    <p className="text-white font-semibold text-center text-wrap text-3xl">
                                        3
                                    </p>
                                </div>
                                <div className='font-bold text-4xl text-red-900' 
                                style={{textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white'}}>
                                    <p>CINTARA SURYA PALOH</p>
                                    <p>57%</p>
                                </div>
                            </div>
                            <div className='shadow flex items-center rounded-xl pl-6 pr-20 gap-4 w-full my-2' style={{backgroundColor: '#ffcd56'}}>
                                <div className="shadow my-4 py-1 mr-2 bg-red-900 rounded-md w-14 h-20 outline outline-white">
                                    <p className="text-white font-semibold text-center text-wrap text-xs">
                                        No. Paslon
                                    </p>
                                    <p className="text-white font-semibold text-center text-wrap text-3xl">
                                        1
                                    </p>
                                </div>
                                <div className='font-bold text-4xl text-red-900' 
                                style={{textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white'}}>
                                    <p>BAGAS BASEDAN</p>
                                    <p>25%</p>
                                </div>
                            </div>
                            <div className='shadow flex items-center rounded-xl pl-6 pr-20 gap-4 w-full mt-2 mb-4' style={{backgroundColor: '#36a2eb'}}>
                                <div className="my-4 py-1 mr-2 bg-red-900 rounded-md w-14 h-20 outline outline-white">
                                    <p className="text-white font-semibold text-center text-wrap text-xs">
                                        No. Paslon
                                    </p>
                                    <p className="text-white font-semibold text-center text-wrap text-3xl">
                                        2
                                    </p>
                                </div>
                                <div className='font-bold text-4xl text-red-900' 
                                style={{textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white'}}>
                                    <p>AGUNG PRANOWO</p>
                                    <p>18%</p>
                                </div>
                            </div>
                            <div className='mr-52'>
                                {isVoting ? (<span className='text-center font-bold text-2xl py-4 mt-8' style={{color: '#ff0000'}}>
                                ANDA SUDAH MEMILIH !!!!</span>
                                ) : (<button className="w-96 text-white font-bold py-4 mt-8 rounded-lg focus:outline-none focus:shadow-outline" 
                                style={{ backgroundColor: '#5E5400' }} type="button" onClick={hasVoting}>
                                    <Link to={'/vote'}>
                                    MASUKAN SUARAMU
                                    </Link>
                                </button>)}
                            </div>
                        
                        </div>
                        
                    </div>
                </div>
                <h1 className='text-center font-extrabold text-4xl mt-14 mb-14' style={{ color: '#5E5400' }}>INFO PASLON</h1>
                <div className='flex items-center justify-center pb-2'>
                    <div>
                        <button>
                            <img className='size-10 mx-10 mb-10' src={LeftArrow} alt="" />
                        </button>
                    </div>
                    <div className='rounded-lg shadow-xl bg-white flex justify-center mb-16 py-16 pr-14'>
                        <img className='w-60 h-80 ml-12 mr-2' src={Gambar} alt="" />
                        <div className='ml-10'>
                            <p className='font-bold text-2xl'>Nomor Urut : 1</p>
                            <h1 className='text-red-900 font-bold text-4xl'>CINTARA SURYA PALOH</h1>
                            <p className='text-2xl mt-2'>Visi & Misi</p>
                            <ul className="list-disc text-2xl pl-10">
                                <li>Memindahkan Indonesia ke Isekai.</li>
                                <li>Nonton anime 3x sehari.</li>
                                <li>Melakukan peresapan pada budaya Jepang.</li>
                            </ul>
                            <p className='text-2xl mt-2'>Koalisi :</p>
                            <ul className="list-disc text-2xl pl-10">
                                <li>Partai Persatuan Wiboo.</li>
                                <li>Partai Redbull.</li>
                                <li>Partai Black Magic.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button>
                            <img className='size-10 mx-10 mb-10' src={RightArrow} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='bg-white py-20'>
                <p className='text-center text-red-600 text-wrap font-bold text-4xl mx-52'>
                    PILIH BERDASARKAN GACHA TIDAK USAH SERIUS
                    YANG PENTING TIDAK MELEGALKAN SLOT
                </p>
            </div>
            <Footer />
        </>
    )
}

export default Vote;