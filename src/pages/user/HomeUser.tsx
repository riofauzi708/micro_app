import Article from "../../components/article/Article";
import Footer from "../../components/footer/Footer";
import NavUser from "../../components/navbar/NavUser";

const HomeUser: React.FC = () => {
    return(
        <>
        <div className='bg-gray-300 pb-16'>
            <NavUser/>
            <Article/>
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

export default HomeUser;