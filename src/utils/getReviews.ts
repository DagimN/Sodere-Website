const getReviews = async () => {
    try{
        let response = await fetch(
          "api/reviews",
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
