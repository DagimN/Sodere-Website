import React, {useState} from "react";
import getReviews from '../../utils/getReviews';

//Icons
import { FaRegUser } from "react-icons/fa";

const Reviews = () => {
  let users:Array<{name:string, review:string}> = [
    {
      name: "African Union Community",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perferendis accusamus fugiat. Quis perferendis vel ad possimus dquibusdam error similique minima maiores est repudiandae,",
    },
    {
      name: "Expats",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perferendis accusamus fugiat. Quis perferendis vel ad possimus dquibusdam error similique minima maiores est repudiandae,",
    },
    {
      name: "Diplomatic Community",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perferendis accusamus fugiat. Quis perferendis vel ad possimus dquibusdam error similique minima maiores est repudiandae,",
    }
  ];

  let [userReviews, setUserReviews] =
    useState<Array<{ name: string; review: string }>>(users);

  getReviews().then((value) => {
    let temp = [];
    
    for(let i = 0; i < value.length; i++){
      let review:{name:string, review:string} = { name: value[i].name, review: value[i].message };
      let exists = false;

      for(let j = 0; j < userReviews.length; j++){
        if(value[i].name === userReviews[j].name && value[i].message === userReviews[j].review){
          exists = true;
        }
      }

      if(!exists)
        temp.push(review);
    }
      

    setUserReviews([...userReviews, ...temp]);
  })

  return (
    <>
      <h1 className="flex justify-center text-xl mt-3"> FAQs & Reviews </h1>
      <section className="h-[300px] w-full flex overflow overflow-clip">
        {userReviews.map((value, index) => {
          return (
            <article
              key={index}
              className="h-[80%] bg-white shadow-lg rounded-xl m-5 grid pb-2"
            >
              <div className="mx-5 lg:flex grid justify-items-center mt-5">
                <FaRegUser size={45} />

                <h1 className="text-4xl lg:mx-5 my-1">{value.name}</h1>
              </div>
              <hr className="w-[90%] ml-5" />
              <p className="mx-5 overflow-y-scroll my-2">
                {value.review}
              </p>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Reviews;
