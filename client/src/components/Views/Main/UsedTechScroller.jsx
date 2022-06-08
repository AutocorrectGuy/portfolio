import { useContext } from "react";
import StatesContext from "../../../context/StatesContext";

export default function UsedTechScroller() {

  const { mode: { darkMode } } = useContext(StatesContext);

  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(require.context('../../../assets/tech', false, /\.(png)$/));

  function ImageList() {
    return (
      <div className="flex">
        {
          images.map((image, i) =>
            <div key={`img-scoll-1-${i}`} className="h-[100px] w-[150px]">
              <img src={image} alt="" className="h-[100px] w-[150px] p-2 object-scale-down" />
            </div>
          )
        }
      </div>
    )
  }

  return (
    <>
      <div className="w-fit mt-8">
      <div className={`${darkMode ? "text-neutral-200" : "text-neutral-600"} uppercase mt-8 pb-[2px] font-semibold text-xl`}>Pielietotā tehnoloģija</div>
        <div className="border-b-[4px] border-b-sky-500 w-1/2 mb-8"></div>
      </div>
      <div className="h-[128px] overflow-hidden relative w-full">
        <div className="slide-track">
          <ImageList />
          <ImageList />
        </div>
      </div>
    </>
  )
}
