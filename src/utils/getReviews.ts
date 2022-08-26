const getReviews = async () => {
    try{
        let response = await fetch(
          "http://sodereresorthotelau.com/api/reviews",
          { method: "GET" }
        );
        return await response.json();
    }
    catch(error){
        console.log(error);
    }

    return null;
}

export default getReviews
