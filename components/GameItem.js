export default function GameItem({
  gameImageSrc,
  gameName,
  gameDescription,
  gameGithubLink,
  gameLink,
}) {
  return (
    <div className="flex flex-col w-10/12 h-full pb-5 m-auto rounded bg-slate-700 ">
      <img src={gameImageSrc} className="w-full h-auto"></img>
      <h1 className="text-4xl py-5 text-center bg-slate-800">{gameName}</h1>
      <p className="text-lg p-5 m-auto">{gameDescription}</p>

      <div className="flex flex-col lg:flex-row justify-center">
        {/* <a
          href={gameGithubLink}
          target="_blank"
          className="m-auto my-3 px-5 py-3 w-2/5 bg-gray-900 rounded-full"
        >
          <button className="flex flex-row">
            <img
              src="github.png"
              alt="GithubIcon"
              className="w-10 h-10 rounded-full"
            ></img>
            <h1 className="my-auto ml-5">Github</h1>
          </button>
        </a> */}
        <a
          href={gameGithubLink}
          target="_blank"
          rel="noreferrer"
          className="m-auto p-0.5 bg-gray-900 rounded-full"
        >
          <button className="flex">
            <img
              src="github.png"
              alt="GithubIcon"
              className="w-12 h-12 rounded-full"
            ></img>
          </button>
        </a>

        <a
          href={gameLink}
          target="_blank"
          rel="noreferrer"
          className="m-auto my-3 px-5 py-3 w-2/5  
        bg-green-500 text-center text-2xl rounded-full"
        >
          <button>Play</button>
        </a>
      </div>
    </div>
  );
}
