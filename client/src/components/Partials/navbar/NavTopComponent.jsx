
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";

export default function NavTopComponent() {
  return (
    <div className="flex flex-col w-full">
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </div>
  )
}