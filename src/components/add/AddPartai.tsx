import { ChangeEvent, FormEvent } from 'react';
import Gambar from '../../assets/image 1.png';
import Navboard from '../navbar/NavAdmin';
import { useNavigate } from 'react-router-dom';
import { IPartai } from '../../elements/interface/Add';
import React from 'react';

const AddPartai: React.FC = () => {
  const navigate = useNavigate();

  const [formRegister, setFormRegister] = React.useState<IPartai>({
    partaiName: "",
    leader: "",
    vision: "",
    address: ""
  })

  const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormRegister(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const config = {
        method: "post",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formRegister)
      };

      const response = await fetch("http://localhost:5000/api/test/partai", config);
      console.log(response);

      navigate('/list-partai');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navboard/>
      <div className='bg-white pb-32'>
        <h1 className='text-center font-extrabold text-4xl mt-14 mb-16' style={{ color: '#5E5400' }}>ADD PARTAI</h1>
        <div className='flex justify-center'>
          <img className='size-3/12 mr-12 ml-52' src={Gambar} alt="" />
          <form className='mr-28 pr-24' onSubmit={handleSubmit}>
            <label className='block text-gray-600 text-lg font-bold mb-2' htmlFor="partaiName">
              Nama
            </label>
            <input
              className='shadow outline outline-2 outline-gray-400 rounded-lg w-full h-14 pr-80 p-2 text-gray-900 mb-4'
              name='partaiName'
              id='partaiName'
              type="text"
              onChange={handleOnChange}
            />

            <label className="block text-gray-600 text-lg font-bold mb-2" htmlFor="leader">
              Ketua Umum
            </label>
            <input
              className='shadow outline outline-2 outline-gray-400 rounded-lg w-full h-14 pr-80 p-2 text-gray-900 mb-4'
              name='leader'
              id='leader'
              type="text"
              onChange={handleOnChange}
            />

            <label className="block text-gray-600 text-lg font-bold mb-2" htmlFor="vision">
              Visi Misi
            </label>
            <textarea
              className='block shadow outline outline-2 outline-gray-400 rounded-lg w-full h-32 p-2 text-gray-900 mb-4'
              name='vision'
              id='vision'
              onChange={handleOnChange}
            />

            <label className="block text-gray-600 text-lg font-bold mb-2" htmlFor="address">
              Alamat
            </label>
            <textarea
              className='block shadow outline outline-2 outline-gray-400 rounded-lg w-full h-32 p-2 text-gray-900 mb-8'
              name='address'
              id='address'
              onChange={handleOnChange}
            />

            <button
              className="w-96 text-white text-2xl font-semibold py-2.5 px-4 rounded-lg"
              style={{ backgroundColor: '#5E5400' }}
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddPartai;