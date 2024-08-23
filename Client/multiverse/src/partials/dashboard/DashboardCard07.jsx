import { React } from "react";


function DashboardCard07() {
  
  return (
    <div className="col-span-full xl:col-span-full bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Top Channels</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Image</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Price</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Company</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Total sale</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Revenue</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Status</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <img className="h-12 w-9 object-scale-down"  src="/src/images/realme-x2-pro-rmx1931-original-imafmf59mzagxp2j.webp" alt="" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Realme x2 pro</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">₹ 31,877</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Realme</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">--</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">--</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">
                  <label class="relative inline-flex cursor-pointer items-center">
                  <input id="switch-3" type="checkbox" class="peer sr-only" />
                  <label for="switch-3" class="hidden"></label>
                  <div class="peer h-4 w-11 rounded border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-md after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
                </label>                  
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex justify-center items-center">
                  <img className="h-4 w-11 object-scale-down"  src="/src/images/edit.png" alt="" />
                  <img className="h-4 w-11 object-scale-down"  src="/src/images/delete.png" alt="" />
                  </div>
                </td>
             

              </tr>
            </tbody>
            <div>

            </div>
            
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
