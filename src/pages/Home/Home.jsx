import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/Chart";

function Home() {
  return (
    <div className="">
      <div className="p-5 m-3 bg-slate-800 text-white flex justify-between">
        <p>Food</p>
        <div className="flex justify-between gap-2">
          <Link>Home</Link>/<Link className="text-red-600">Food</Link>
        </div>
      </div>
      <div className=" grid grid-cols-5">
        <div className="col-span-2 bg-slate-800  my-4 mx-2 ms-4 text-slate-300 p-6 text-center">
          <h1 className="text-white text-2xl font-semibold	">15 Years</h1>
          <p className="font-semibold mb-2 text-sm">
            This year winner to Tomatus.
            <span className="text-red-600"> Congratulations!</span>
          </p>
          <p className="text-xs">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country.
          </p>
        </div>
        <div className="col-span-3 bg-slate-800 m-4 text-slate-300 py-5">
          <Chart />
        </div>
        <div className="col-span-2 ms-2 text-slate-300">
          <h3 className="ms-2">Statistic</h3>
          <div className="grid grid-cols-2">
            <div className="col-span-1 bg-slate-800 m-2 p-8 text-slate-300">
              <p className="text-red-600 text-xl font-bold">7050</p>
              <p>Order Received</p>
            </div>
            <div className="col-span-1 bg-slate-800 m-2 p-8    text-slate-300">
              <p className="text-red-600 text-xl font-bold">7050</p>
              <p>Today Delivered</p>
            </div>
            <div className="col-span-1 bg-slate-800 m-2 p-8  text-slate-300">
              <p className="text-red-600 text-xl font-bold">7050</p>
              <p>Today Delivered</p>
            </div>
            <div className="col-span-1 bg-slate-800 m-2 p-8 text-slate-300">
              <p className="text-red-600 text-xl font-bold">7050</p>
              <p>Today Delivered</p>
            </div>
            <div className="col-span-1 bg-slate-800 m-2 p-8 text-slate-300">
              <p className="text-red-600 text-xl font-bold">7050</p>
              <p>Today Delivered</p>
            </div>
            <div className="col-span-1 bg-slate-800 m-2 p-8 text-slate-300">
              <p className="text-red-600 text-xl font-bold">7050</p>
              <p>Today Delivered</p>
            </div>
            {/* <div className="col-span-1 bg-slate-800 m-4 text-slate-300">02</div> */}
          </div>
        </div>
        <div className="col-span-3 mx-2 text-slate-300">
          <h3 className="ms-2">Customer Feed</h3>
          <div className="grid grid-cols-2">
            <div className="col-span-2 bg-slate-800 m-2 p-4 text-slate-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/346608113_195830996679658_3944874961280973083_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0raQdahc9uQAX85jYV1&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBbL0dM1ilxz23dDpY3WDGft64AUY8XSYcDUDNCEZcp7Q&oe=64F00CEF"
                      alt=""
                      className="rounded-full w-10"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Inverness Mcknzie</p>
                    <p className="font-thin text-sm text-stone-300">
                      Order Received
                    </p>
                  </div>
                </div>
                <div>
                  <button className="bg-slate-900 text-sm text-white py-3 px-8 rounded-full">
                    5 Min ago
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-slate-800 m-2 p-4 text-slate-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/346608113_195830996679658_3944874961280973083_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0raQdahc9uQAX85jYV1&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBbL0dM1ilxz23dDpY3WDGft64AUY8XSYcDUDNCEZcp7Q&oe=64F00CEF"
                      alt=""
                      className="rounded-full w-10"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Inverness Mcknzie</p>
                    <p className="font-thin text-sm text-stone-300">
                      Order Received
                    </p>
                  </div>
                </div>
                <div>
                  <button className="bg-slate-900 text-sm text-white py-3 px-8 rounded-full">
                    5 Min ago
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-slate-800 m-2 p-4 text-slate-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/346608113_195830996679658_3944874961280973083_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0raQdahc9uQAX85jYV1&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBbL0dM1ilxz23dDpY3WDGft64AUY8XSYcDUDNCEZcp7Q&oe=64F00CEF"
                      alt=""
                      className="rounded-full w-10"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Inverness Mcknzie</p>
                    <p className="font-thin text-sm text-stone-300">
                      Order Received
                    </p>
                  </div>
                </div>
                <div>
                  <button className="bg-slate-900 text-sm text-white py-3 px-8 rounded-full">
                    5 Min ago
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-slate-800 m-2 p-4 text-slate-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/346608113_195830996679658_3944874961280973083_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0raQdahc9uQAX85jYV1&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBbL0dM1ilxz23dDpY3WDGft64AUY8XSYcDUDNCEZcp7Q&oe=64F00CEF"
                      alt=""
                      className="rounded-full w-10"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Inverness Mcknzie</p>
                    <p className="font-thin text-sm text-stone-300">
                      Order Received
                    </p>
                  </div>
                </div>
                <div>
                  <button className="bg-slate-900 text-sm text-white py-3 px-8 rounded-full">
                    5 Min ago
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="col-span-1 bg-slate-800 m-4 text-slate-300">02</div> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2  text-slate-300 p-3">
          <p>Received Order list</p>
          <table className="w-full bordeer-separate">
            <thead className="text-stone-400">
              <tr>
                <td className="p-3">Customer</td>
                <td className="">Order ID</td>
                <td className="">Product</td>
                <td className="">Quantity</td>
                <td className="">Price</td>
                <td className="">Status</td>
              </tr>
            </thead>
            <tbody className="">
              <tr className="bg-slate-800 m-2 text-white rounded-sm	">
                <td className=" p-3">Amirul Islam</td>
                <td className="">#345843</td>
                <td className="">Plain Pizza</td>
                <td className="">6</td>
                <td className="text-green-500">$43</td>
                <td className="">
                  <button className="px-6 py-1 text-xs bg-green-500 rounded-full">
                    Paid
                  </button>
                </td>
              </tr>
              <tr className="bg-slate-800 text-white rounded-sm	">
                <td className=" p-3">Amirul Islam</td>
                <td className="">#345843</td>
                <td className="">Plain Pizza</td>
                <td className="">6</td>
                <td className="text-green-500">$43</td>
                <td className="">
                  <button className="px-6 py-1 text-xs bg-green-500 rounded-full">
                    Paid
                  </button>
                </td>
              </tr>
              <tr className="bg-slate-800 text-white rounded-sm	">
                <td className=" p-3">Amirul Islam</td>
                <td className="">#345843</td>
                <td className="">Plain Pizza</td>
                <td className="">6</td>
                <td className="text-green-500">$43</td>
                <td className="">
                  <button className="px-6 py-1 text-xs bg-green-500 rounded-full">
                    Paid
                  </button>
                </td>
              </tr>
              <tr className="bg-slate-800 text-white rounded-sm">
                <td className="p-3">Amirul Islam</td>
                <td className="">#345843</td>
                <td className="">Plain Pizza</td>
                <td className="">6</td>
                <td className="text-orange-500">$43</td>
                <td className="">
                  <button className="px-3 py-1 text-xs bg-orange-500 rounded-full">
                    Pending
                  </button>
                </td>
              </tr>
              <tr className="bg-slate-800 text-white rounded-sm	">
                <td className=" p-3">Amirul Islam</td>
                <td className="">#345843</td>
                <td className="">Plain Pizza</td>
                <td className="">6</td>
                <td className="text-green-500">$43</td>
                <td className="">
                  <button className="px-6 py-1 text-xs bg-green-500 rounded-full">
                    Paid
                  </button>
                </td>
              </tr>
              <tr className="bg-slate-800 text-white rounded-sm	">
                <td className=" p-3">Amirul Islam</td>
                <td className="">#345843</td>
                <td className="">Plain Pizza</td>
                <td className="">6</td>
                <td className="text-red-500">$43</td>
                <td className="">
                  <button className="px-4 py-1 text-xs bg-red-500 rounded-full">
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-1 text-slate-300 p-3">
          <p className="pb-4">Hot Food Menu</p>
          <table className="w-full bordeer-separate">
            <tbody className="">
              <tr className="bg-slate-800 m-2 text-white rounded-sm	">
                <td className=" p-4">Chiken Burger</td>
                <td>
                  <span className="px-3 py-1 text-xs bg-green-500 rounded-full">
                    $43.34
                  </span>
                </td>
              </tr>
              <tr className="bg-slate-800 m-2 text-white rounded-sm	">
                <td className=" p-3">Chiken Burger</td>
                <td>
                  <span className="px-3 py-1 text-xs bg-red-500 rounded-full">
                    $43.34
                  </span>
                </td>
              </tr>
              <tr className="bg-slate-800 m-2 text-white rounded-sm	">
                <td className=" p-3">Chiken Burger</td>
                <td>
                  <span className="px-3 py-1 text-xs bg-green-500 rounded-full">
                    $43.22
                  </span>
                </td>
              </tr>
              <tr className="bg-slate-800 m-2 text-white rounded-sm	">
                <td className=" p-3">Chiken Burger</td>
                <td>
                  <span className="px-3 py-1 text-xs bg-red-500 rounded-full">
                    $43.11
                  </span>
                </td>
              </tr>
              <tr className="bg-slate-800 m-2 text-white rounded-sm	">
                <td className=" p-3">Chiken Burger</td>
                <td>
                  <span className="px-3 py-1 text-xs bg-red-500 rounded-full">
                    $43.21
                  </span>
                </td>
              </tr>
              <tr className="bg-slate-800 m-2 text-white rounded-sm	">
                <td className=" p-3">Chiken Burger</td>
                <td>
                  <span className="px-3 py-1 text-xs bg-green-500 rounded-full">
                    $43.43
                  </span>
                </td>
              </tr>
              <tr className="bg-slate-800 m-2 text-white rounded-sm	">
                <td className=" p-3">Chiken Burger</td>
                <td>
                  <span className="px-3 py-1 text-xs bg-green-500 rounded-full">
                    $43.33
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
