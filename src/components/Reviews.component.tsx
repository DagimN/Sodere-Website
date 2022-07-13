import React from 'react';

//Icons
import { FaRegUser } from 'react-icons/fa';

const Reviews = () => {
  let users = [" ", " ", " "];

  return (
    <>
      <h1 className='flex justify-center text-xl mt-3'> FAQs & Reviews </h1>
      <section className="h-[300px] w-full flex overflow-y-hidden overflow-clip">
        {users.map((value, index) => {
          return (
            <article key={index} className="h-[75%] w-[600px] bg-white shadow-lg rounded-xl m-5 grid">
              <div className="mx-5 flex mt-5">
                <FaRegUser size={50} />

                <h1 className="text-4xl mx-5 mt-2">Client Name</h1>
              </div>
              <hr className='w-[90%] ml-5'/>
              <p className='mx-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                perferendis accusamus fugiat. Quis perferendis vel ad possimus
                quibusdam error similique minima maiores est repudiandae,
                consectetur quam a rchitecto eaque id atque.
              </p>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Reviews;
