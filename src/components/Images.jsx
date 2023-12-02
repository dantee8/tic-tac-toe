import { useEffect, useState } from "react";

const Images = () => {
  const [images, setImages] = useState();
  console.log(images);

  useEffect(() => {
    const fetchedImages = async () => {
      const response = await fetch("https://api.dicebear.com/7.x/bottts/jpg");
      const responseData = await data.json();
      setImages(responseData);
      console.log(response);
    };
    fetchedImages();
  }, []);

  return <div>{images}</div>;
};

export default Images;
