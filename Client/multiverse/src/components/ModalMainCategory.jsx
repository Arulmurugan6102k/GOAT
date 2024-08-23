import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Transition from "../utils/Transition";
import { PhotoIcon } from "@heroicons/react/24/solid";
import MultipleSelect from '../components/MultipleSelect';

function ModalCreate({ id, modalOpen, setModalOpen }) {

  const [formData, setFormData] = useState({
    'main_product_photo' : null,
  })

  const handleInput = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData
    })
    console.log(name ,"  :  ", value);
  }


  return (
    <>
      {/* Modal backdrop */}
     
      <Transition
        className="fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-start mt-5 mb-4 justify-center px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          className="overflow-y-scroll scrollbar-hide bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700/60 overflow-auto w-[-350px] max-h-full rounded-lg shadow-lg"
        >
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Create New Product
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setModalOpen(false)}   
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <form className="rounded-lg border border-dashed border-gray-900/25 p-14 m-7 dark:border-white">
            <div className="space-y-12">
              <div className="">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                  <div className="col-span-full">
                    <label
                      htmlFor="product-name"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                    >
                      Product name
                    </label>
                    <div className="mt-2">
                      <input
                        id="product-name"
                        name="product-name"
                        type="text"
                        autoComplete="product-name"
                        className="form-input  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="product-category"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                    >
                      Category
                    </label>
                    <div className="mt-2">
                      <select
                        id="product-category"
                        name="product-category"
                        autoComplete="product-category"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                      >
                        <option>Select category</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="product-category"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                    >
                      Sub category
                    </label>
                    <div className="mt-2">
                      <select
                        id="product-category"
                        name="product-category"
                        autoComplete="product-category"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 dark:text-gray-100"
                      >
                        <option>Select sub category</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="product-category"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Company name
                    </label>
                    <div className="mt-2">
                      <select
                        id="product-category"
                        name="product-category"
                        autoComplete="product-category"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                      >
                        <option>Select company</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Price
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">₹</span>
                      </div>
                      <input
                        id="price"
                        name="price"
                        type="text"
                        placeholder="0.00"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-3">
                    <label
                      htmlFor="version"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Current version
                    </label>
                    <div className="mt-2">
                      <select
                        id="version"
                        name="version"
                        autoComplete="version"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                      >
                        <option>1.0v</option>
                        <option>2.0v</option>
                        <option>3.0v</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="product-category"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Color
                    </label>
                    <div className="mt-2">
                      {/* <select
                        id="product-category"
                        name="product-category"
                        onChange={handleInput}
                        autoComplete="product-category"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                      >
                        <option>Select color</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                        <option value="purple">Purple</option>
                        <option value="cyan">Cyan</option>
                        <option value="magenta">Magenta</option>
                        <option value="gray">Gray</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="pink">Pink</option>
                        <option value="brown">Brown</option>
                        <option value="lime">Lime</option>
                        <option value="teal">Teal</option>
                        <option value="navy">Navy</option>
                        <option value="maroon">Maroon</option>
                      </select> */}
                       <MultipleSelect/>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="product-category"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      size
                    </label>
                    <div className="mt-2">
                      <select
                        id="product-category"
                        name="product-category"
                        autoComplete="product-category"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                      >
                        <option selected>Select size</option>
                        <option>XXS</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>2XL</option>
                        <option>3XL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="space-y-10">
                      <fieldset>
                        <label
                          htmlFor="product-category"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Includes
                        </label>
                        <div className="mt-6 flex flex-col gap-y-4">
                          {" "}
                          {/* Use flex-col to align items in columns */}
                          <div className="flex items-center gap-x-3">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="comments"
                              className="text-sm font-medium text-gray-900"
                            >
                              Cash on delivery
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="warranty"
                              name="warranty"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="warranty"
                              className="text-sm font-medium text-gray-900"
                            >
                              Warranty
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="replacement"
                              name="replacement"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="replacement"
                              className="text-sm font-medium text-gray-900"
                            >
                              Replacement
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="offers"
                              className="text-sm font-medium text-gray-900"
                            >
                              Offers
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Tags
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={6}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product description
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="product-specification"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product specification
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="product-specification"
                        name="product-specification"
                        rows={4}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Transition>
    </>
  );
}

export default ModalCreate;
