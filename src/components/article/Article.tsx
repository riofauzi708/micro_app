import Image1 from '../../assets/Kpu-Bg.png';
import Image2 from '../../assets/Kpu-Box.png';
import Image3 from '../../assets/headline.png';

const Article = () => {
    return(
        <div>
            <div style={{ position: 'relative' }}>
                <img className='w-64 mr-64' src={Image2} alt="" style={{ position: 'absolute', top: 0, right: 0 }} />
                <img className='w-9/12 mx-auto my-10' src={Image1} alt="" />
                <div className='absolute top-1/2 ml-52 text-2xl mt-10'>
                    <h1 className='text-6xl font-semibold text-white'>SELAMAT DATANG</h1>
                    <p className='font-semibold text-white'>PEMILU PRESIDEN DUMBWAYS YANG JUJUR</p>
                    <p className='font-semibold text-white'>DIPILIH MELALUI SEBUAH ARTI NAMA</p>
                </div>
            </div>
            <div className='mb-10'>
                <img className='w-9/12 mx-auto mt-20' src={Image3} alt="" />
            </div>
        </div>
    );
}

export default Article;