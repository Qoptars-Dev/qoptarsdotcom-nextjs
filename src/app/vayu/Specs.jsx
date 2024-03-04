import React from "react";

function Specs() {
  return (
    <div>
      <table className="text-left w-full">
        <thead className="border-y font-extralight">
          <tr className="bg-gray-800">
            <th
              align="center"
              colSpan={2}
              scope="col"
              className="px-6 py-4 text-2xl"
            >
              Detailed Specifications
            </th>
          </tr>
        </thead>
        <tbody className="uppercase font-Mont font-extralight">
          <tr className="border-b">
            <td className=" border-r px-6 py-4 font-extralight">
              max takeooff weight of the uav
            </td>
            <td className="whitespace-nowrap px-6 py-4">~ 2000 g</td>
          </tr>
          <tr className="border-b">
            <td className="whitespace-nowrap border-r px-6 py-4 font-extralight">
              range of live transmission (LOS)
            </td>
            <td className="whitespace-nowrap px-6 py-4">10 kms</td>
          </tr>
          <tr className="border-b">
            <td className="whitespace-nowrap border-r px-6 py-4 font-extralight">
              typical cruise speed
            </td>
            <td className="whitespace-nowrap px-6 py-4">5 m/s</td>
          </tr>
          <tr className="border-b">
            <td className="whitespace-nowrap border-r px-6 py-4 font-extralight">
              functional temperature range
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              -5 deg to 50 deg celcius
            </td>
          </tr>
          <tr className="border-b">
            <td className="whitespace-nowrap border-r px-6 py-4 font-extralight">
              deployment time
            </td>
            <td className="whitespace-nowrap px-6 py-4">{"<"} 5 mins</td>
          </tr>
          <tr className="border-b">
            <td className="whitespace-nowrap border-r px-6 py-4 font-extralight">
              typical cruise speed
            </td>
            <td className="whitespace-nowrap px-6 py-4">5 m/s</td>
          </tr>
          <tr className="border-b">
            <td className="whitespace-nowrap border-r px-6 py-4 font-extralight">
              packing and storage
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              ( provided in fly more combo )
            </td>
          </tr>
          <tr className="border-b">
            <td className="whitespace-nowrap border-r px-6 py-4 font-extralight">
              size ( wingspan )
            </td>
            <td className="whitespace-nowrap px-6 py-4">420 mm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Specs;
