import ImageSetter from "./components/imageSetter";
import SearchImage from "./components/search";
import { useState, useEffect } from "react";
function App() {
  const [images, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [Photo, setPhoto] = useState(null);
  useEffect(() => {
    console.log(term);
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  if (Photo)
    return (
      <>
        <div className="relative">
          <div className=" absoulte tap-1">
            <button
              onClick={handelBack}
              className="py-2 px-5 rounded-md border m-2 bg-white"
            >
              back
            </button>
          </div>
          <img className="h-screen w-full object-cover " src={Photo} alt="" />
        </div>
      </>
    );
  return (
    <div className="countiner mx-auto ">
      <SearchImage searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-center text5xl font-bold mx-auto">
          no image found
        </h1>
      )}
      {isLoading ? (
        <h1 className="text-center text6xl font-bold mx-auto">Loading</h1>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {images.map((image, index) => (
            <ImageSetter
              handelPicture={handelPicture}
              image={image}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
  async function handelPicture(image) {
    const response = await fetch(image);
    setPhoto(image.webformatURL);
  }
  function handelBack() {
    setPhoto(null);
  }
}

export default App;
