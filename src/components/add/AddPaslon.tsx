import { ChangeEvent, FormEvent } from 'react';
import Gambar from '../../assets/image 1.png';
import Navboard from '../navbar/NavAdmin';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IPaslon } from '../../elements/interface/Add';

const AddPaslon: React.FC = () => {
  const navigate = useNavigate();

  const [formRegister, setFormRegister] = React.useState<IPaslon>({
    paslonName: "",
    number: 0,
    vision: ""
  })

  const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormRegister(prevState => ({
      ...prevState,
      [name]: name === 'number' ? parseInt(value) : value
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

      const response = await fetch("http://localhost:5000/api/test/paslon", config);
      console.log(response);

      navigate('/list-paslon');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navboard/>
      <div className='bg-white pb-32'>
        <h1 className='text-center font-extrabold text-4xl mt-14 mb-16' style={{ color: '#5E5400' }}>ADD PASLON</h1>
        <div className='flex justify-center'>
          <img className='size-3/12 mr-12 ml-52' src={Gambar} alt="" />
          <form className='mr-28 pr-24' onSubmit={handleSubmit}>
            <label className='block text-gray-600 text-lg font-bold mb-2' htmlFor="paslonName">
              Nama
            </label>
            <input
              className='shadow outline outline-2 outline-gray-400 rounded-lg w-full h-14 pr-80 p-2 text-gray-900 mb-4'
              type="text"
              name='paslonName'
              id='paslonName'
              onChange={handleOnChange}
            />

            <label className="block text-gray-600 text-lg font-bold mb-2" htmlFor="number">
              Nomor Urut
            </label>
            <input
              className='shadow outline outline-2 outline-gray-400 rounded-lg w-full h-14 pr-80 p-2 text-gray-900 mb-4'
              type="text"
              name='number'
              id='number'
              onChange={handleOnChange}
            />

            <label className="block text-gray-600 text-lg font-bold mb-2" htmlFor="vision">
              Visi Misi
            </label>
            <textarea
              className='block shadow outline outline-2 outline-gray-400 rounded-lg w-full h-56 p-2 text-gray-900 mb-6'
              name='vision'
              id='vision'
              onChange={handleOnChange}
            />

            <button
              className="w-96 text-white text-2xl font-bold py-2.5 px-4 rounded-lg"
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

export default AddPaslon;