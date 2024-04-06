import Image from "next/image";
function HomePage() {
  return (
    <div className="flex  flex-col items-center h-screen px-2 justify-center text-white">
      <h1 className=" text-5xl font-bold mb-20">ChatGpt</h1>
      <div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">sun icon</div>
          <h1>Examples</h1>
        </div>
        <div className=" space-y-2">
          <p className="infoText">Explain Something to me</p>
          <p className="infoText ">
            "What is the difference between a crocodile and an alligator?"
          </p>
          <p className="infoText">What is the color of the sun</p>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
