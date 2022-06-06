import IconsBar from "./navbar/IconsBar";

export default function Footer() {
  return (
    <div className="w-full min-h-[240px] bg-sky-600 pt-[50px]">
      <div className="flex flex-col justify-end gap-10 max-w-xl mx-auto h-full">
        <div className="flex max-w-xl w-full justify-around">
          <div className="flex gap-10">
          <img src="https://avatars.githubusercontent.com/u/71926334?v=4" className="rounded-full w-24 h-24"/>
            
          <table className="table">
            <tbody>
              <tr className="table-row">
                <td className="table-cell">
                  <p className="text-sky-100 whitespace-nowrap font-bold">Lapas epasts:</p>
                </td>
                <td className="table-cell">
                  <p className="text-sky-50 whitespace-nowrap cursor-pointer hover:text-sky-900">martins.sturainis.html@gmail.com</p>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">
                  <p className="text-sky-100 whitespace-nowrap font-bold pr-6">Personīgais epasts:</p>
                </td>
                <td className="table-cell">
                  <p className="text-sky-50 whitespace-nowrap cursor-pointer hover:text-sky-900">martins.sturainis.lspa@gmail.com</p>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">
                  <p className="text-sky-50 whitespace-nowrap font-bold">Tālrunis:</p>
                </td>
                <td className="table-cell">
                  <p className="text-white whitespace-nowrap cursor-pointer hover:text-sky-900">+371 28 924 782</p>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          <IconsBar parentStyleClass={"flex items-center gap-6"} styleClass={"w-16 h-16 text-white hover:text-sky-900 duration-200 ease-in-out"} />
        </div>
        <div className="flex justify-between text-sky-100 text-center py-5 border-t border-t-sky-700 text-sm font-light">
          <p>Mārtiņš Stūrainis, 2022</p>
          <p>{`Lapa pēdējo reizi atjaunota 2022. gada 6. jūnijā (V. 0.01)`}</p>
        </div>
      </div>

    </div>
  )
}