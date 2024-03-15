import { Link } from 'react-router-dom';
import Image from '../../assets/Detail-Image.png'

const Content: React.FC = () => {
    return(
        <>
        <div className='flex flex-col gap-4'>
        <div className='flex mx-40 justify-center gap-4'>
                <div className='my-auto bg-blue-700' style={{ position: 'relative' }}>
                    <Link to={"/detail-content"}>
                    <img className='size-fit' src={Image} alt="" 
                    style={{ filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5)) brightness(0.6)' }} />
                    <div className='absolute bottom-0 pl-4 pb-2'>
                        <p className='w-48 h-10 text-md font-semibold text-white rounded-lg px-5 py-2 mb-2' 
                        style={{backgroundColor: '#ff0000'}}>SENIN, 03 JAN 2024</p>
                        <p className='font-semibold text-3xl text-white'>KPU TETAPKAN 3 MENTOR TERBAIK</p>
                        <p className='font-semibold text-white text-xl'>Super Admin</p>
                    </div>
                    </Link>
                </div>
                <div className='w-6/12 bg-white'>
                <Link to={"/detail-content"}>
                    <img className='w-full h-40' src={Image} alt="" />
                    <p className='w-48 h-10 text-md font-semibold text-white rounded-lg px-5 py-2 mx-4 my-3' 
                        style={{backgroundColor: '#ff0000'}}>SENIN, 03 JAN 2024</p>
                    <p className='px-4 py-1 text-2xl font-bold'>KPU TETAPKAN 3 MENTOR TERBAIK</p>
                    <p className='px-4 py-1 text-xl font-semibold'>Super Admin</p>
                </Link>
                </div>
            </div>
            <div className='flex mx-40 justify-center gap-4'>
            <div className='w-5/12 bg-white'>
                <Link to={"/detail-content"}>
                    <img className='w-full h-40' src={Image} alt="" />
                    <p className='w-48 h-10 text-md font-semibold text-white rounded-lg px-5 py-2 mx-4 my-3' 
                        style={{backgroundColor: '#ff0000'}}>SENIN, 03 JAN 2024</p>
                    <p className='px-4 py-1 text-2xl font-bold'>KPU TETAPKAN 3 MENTOR TERBAIK</p>
                    <p className='px-4 py-1 text-xl font-semibold'>Super Admin</p>
                    </Link>
                </div>
                <div className='w-5/12 bg-white'>
                <Link to={"/detail-content"}>
                    <img className='w-full h-40' src={Image} alt="" />
                    <p className='w-48 h-10 text-md font-semibold text-white rounded-lg px-5 py-2 mx-4 my-3' 
                        style={{backgroundColor: '#ff0000'}}>SENIN, 03 JAN 2024</p>
                    <p className='px-4 py-1 text-2xl font-bold'>KPU TETAPKAN 3 MENTOR TERBAIK</p>
                    <p className='px-4 py-1 text-xl font-semibold'>Super Admin</p>
                    </Link>
                </div>
                <div className='w-5/12 bg-white'>
                <Link to={"/detail-content"}>
                    <img className='w-full h-40' src={Image} alt="" />
                    <p className='w-48 h-10 text-md font-semibold text-white rounded-lg px-5 py-2 mx-4 my-3' 
                        style={{backgroundColor: '#ff0000'}}>SENIN, 03 JAN 2024</p>
                    <p className='px-4 py-1 text-2xl font-bold'>KPU TETAPKAN 3 MENTOR TERBAIK</p>
                    <p className='px-4 py-1 text-xl font-semibold'>Super Admin</p>
                    </Link>
                </div>
            </div>
        </div>
                
        </>
    )
}

export default Content;