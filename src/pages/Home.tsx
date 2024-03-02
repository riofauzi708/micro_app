import Article from "../components/article/Article";
import Content from "../components/content/Content";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar"

const Home: React.FC = () => {
    return(
        <>
        <div className='bg-gray-300 pb-16'>
            <Navbar/>
            <Article/>
            <Content/>
        </div>
        <div className='py-20'>
        <p className='text-center text-wrap font-bold text-4xl mx-44'>
            PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS 
          PASTIKAN MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT
          </p>
        </div>
            <Footer/>
        </>
    )
}

export default Home;