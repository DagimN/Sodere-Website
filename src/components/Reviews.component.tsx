import React from 'react';

//Icons
import { FaRegUser } from 'react-icons/fa';

const Reviews = () => {
  let users = [" ", " ", " "];

  return (
    <>
      <h1 className='flex justify-center text-xl mt-3'> FAQs & Reviews </h1>
      <section className="h-[300px] w-full flex overflow overflow-clip">
        {users.map((value, index) => {
          return (
            <article
              key={index}
              className="h-[80%] bg-white shadow-lg rounded-xl m-5 grid pb-2"
            >
              <div className="mx-5 lg:flex grid justify-items-center mt-5">
                <FaRegUser size={45} />

                <h1 className="text-4xl lg:mx-5 my-1">Client Name</h1>
              </div>
              <hr className="w-[90%] ml-5" />
              <p className="mx-5 overflow-y-scroll my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                perferendis accusamus fugiat. Quis perferendis vel ad possimus
                quibusdam error similique minima maiores est repudiandae,
              </p>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Reviews;
