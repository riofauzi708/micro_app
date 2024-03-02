import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Gambar from '../../assets/Detail-Image.png';
import Arrow from '../../assets/Arrow 1.png';

const DetailContent: React.FC = () => {
    return(
        <>
        <div className='bg-gray-300'>
        <Navbar/>
        <div className="bg-white mx-40 flex-col items-center justify-center py-4">
            <div className="flex items-center justify-between pl-10">
                <div className="flex items-center">
                <img className="w-4 h-3.5 mx-1.5" src= {Arrow} alt="" />
                <p className="text-xl font-semibold">Beranda</p>
                </div>
                <p className="text-xl mx-auto pr-32 font-semibold">BERITA HARI INI</p>
            </div>
            <div className="text-center mt-8">
            <h1 className='text-center font-bold text-4xl' style={{ color: '#5E5400' }}>
                KPU DUMBWAYS TETAPKAN 3 MENTOR TERBAIK</h1>
                <p className="text-xl font-semibold">Super Admin</p>
                <p className="text-xl font-semibold">Senin, 03 Jan 2023</p>
            </div>
            <img className="px-12 pb-10 pt-6" src= {Gambar} alt="" />
            <p className="mx-12 pt-1 pb-10 font-semibold text-xl text-wrap break-all">Praesent ac tortor vel urna fermentum luctus. 
                Nam posuere justo ut efficitur dapibus. Sed a lacinia elit. 
                Curabitur eu dapibus tellus.Proin fermentum purus id lectus imperdiet, 
                vel feugiat enim interdum. Sed non diam vel mi tristique interdum. 
                Integer bibendum, nulla ac euismod commodo, quam mi vehicula justo, 
                eu dapibus ligula massa vel ligula. Nulla facilisi. Integer sit amet congue massa. 
                Suspendisse potenti. Sed interdum, lacus ac ultrices facilisis, ligula enim pellentesque 
                elit, vel varius nisi odio at purus. Sed suscipit purus quis tortor posuere, in varius est 
                euismod. Mauris aliquam urna non elit faucibus, eu fermentum turpis mattis. Quisque vel nisl 
                vitae sapien congue dapibus. Vivamus auctor, velit ut condimentum bibendum, purus lacus scelerisque 
                ligula, nec gravida arcu velit id libero. In hac habitasse platea dictumst.
                <br /> <br />
                Fusce eu ex vel turpis pellentesque iaculis. Praesent sit amet mi ut turpis malesuada aliquam a eu orci. 
                Maecenas ut purus eu sapien vestibulum vulputate. Fusce tincidunt fringilla arcu, 
                non efficitur sapien scelerisque et. Maecenas facilisis eros id enim tincidunt, 
                ac vestibulum quam fringilla. Nullam vel malesuada mi, vitae convallis libero. 
                In hac habitasse platea dictumst. Duis cursus nunc vel metus rhoncus, id cursus 
                justo imperdiet. Integer vitae ex ac libero fermentum volutpat ut vitae sapien. 
                Aliquam id luctus nisl. Curabitur et augue ut justo tincidunt varius vel sit amet nunc. 
                Integer tincidunt risus sit amet odio euismod, a finibus ligula blandit. Integer euismod, 
                purus ut malesuada varius, lectus orci feugiat massa, ut egestas enim massa vel urna.
                <br /> <br />
                Vivamus id dictum augue. Pellentesque habitant morbi tristique senectus et netus et 
                malesuada fames ac turpis egestas. Nulla facilisi. Curabitur aliquet ligula eu nisl bibendum, 
                vel tincidunt justo feugiat. Nam dapibus, ligula id dapibus fermentum, odio libero luctus nunc, 
                et scelerisque sapien libero vel ante. Etiam id odio nec nunc rhoncus lacinia nec eu massa. 
                Nullam fermentum, felis ac bibendum malesuada, lectus felis fermentum dolor, 
                a fermentum sapien mauris vel dui. Fusce vel turpis eu purus fermentum tincidunt a vel elit. 
                Phasellus efficitur sapien vel efficitur rhoncus. Integer vel risus ut neque elementum gravida. 
                Morbi rhoncus, ligula nec posuere tristique, ligula lacus dapibus urna, a lacinia sem metus id libero. 
                Suspendisse luctus ligula eu mauris auctor, non semper elit feugiat.
                <br /> <br />
                Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut efficitur dapibus. Sed a lacinia elit. 
                Curabitur eu dapibus tellus. Proin fermentum purus id lectus imperdiet, vel feugiat enim interdum. 
                Sed non diam vel mi tristique interdum. Integer bibendum, nulla ac euismod commodo, quam mi vehicula 
                justo, eu dapibus ligula massa vel ligula. Nulla facilisi. Integer sit amet congue massa. 
                Suspendisse potenti.</p>
        </div>
        </div>
        <Footer/>
        </>
    )
}

export default DetailContent;