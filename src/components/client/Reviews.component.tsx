import React, {useState} from "react";
import getReviews from '../../utils/getReviews';

//Icons
import { FaRegUser } from "react-icons/fa";

const Reviews = () => {
  let users: Array<{ name: string; review: string }> = [
    {
      name: "African Union Community",
      review:
        "Helpful and friendly staff. Proper selection of food is saved both dinner and breakfast." +
        " I was there as a transit passenger and spent just a night. Staff actually wakes you up in time for your scheduled flight.",
    },
    {
      name: "Expats",
      review:
        "Great rooms, staff, food, wifi. I had great time here. The staff was very kind. All the meals are great." + 
        " They have a really good wifi. Feels like europe not like Ethiopia. The room was very big, nice tv, i enjoyed!",
    },
    {
      name: "Diplomatic Community",
      review:
        "We stopped over at this hotel after landing at Addis Ababa with a 12 hour wait for the connecting flight." + 
        " 15 minutes away from the airport their mini bus takes you to the hotel, simple check in and included breakfast and lunch. A simple " +
        "double room with a basic shower/bath room. The customer service was really good, very helpful.",
    },
  ];

  let [userReviews, setUserReviews] =
    useState<Array<{ name: string; review: string }>>(users);

  getReviews().then((value) => {
    let temp = [];
    
    for(let i = 0; i < (value.length - 3) % 5; i++){
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
              <p className="mx-5 overflow-y-scroll truncate whitespace-normal my-2">
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
