import React from 'react';

const Reviews = () => {
  let users = [" ", " ", " "];

  return (
    <>
      <h1 className='flex justify-center text-xl mt-3'> FAQs & Reviews </h1>
      <section className="h-[300px] w-full flex overflow-y-hidden overflow-clip">
        {users.map(() => {
          return (
            <article className="h-[75%] w-[600px] bg-white shadow-lg rounded-xl m-5 flex gap-10">
              <img
                src=""
                alt=""
                className="h-20 w-20 bg-blue-500 rounded-full relative top-3 left-5"
              />

              <div className="mx-5">
                <h1 className="text-4xl">Client Name</h1>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  perferendis accusamus fugiat. Quis perferendis vel ad possimus
                  quibusdam error similique minima maiores est repudiandae,
                  consectetur quam a rchitecto eaque id atque.
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Reviews;
