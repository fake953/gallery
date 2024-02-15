function ImageSetter(props) {
  const tags = props.image.tags.split(",");
  return (
    <div className="max-w-sm shadow-lg rounded overflow-hidden">
      <img
        onClick={() => {
          props.handelPicture(props.image);
        }}
        className="w-full"
        src={props.image.webformatURL}
        alt=""
      />
      <div className="p-3">
        <h1 className="text-blue-800 text-2xl mb-3 font-bold">
          Photo by {props.image.user}
        </h1>
        <ul className="font-bold text-1xl">
          <li className="mt-1">views : {props.image.views} </li>
          <li className="mt-1">download : {props.image.downloads} </li>
          <li className="mt-1">likes : {props.image.likes} </li>
          <div className="my-2">
            {tags.map((tag) => (
              <span
                className="py-1 cursor-pointer text-sm px-2 bg-gray-200 m-2 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default ImageSetter;
