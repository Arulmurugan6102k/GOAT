import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Transition from "../utils/Transition";
import { PhotoIcon } from "@heroicons/react/24/solid";
import MultipleSelect from '../components/MultipleSelect';

function ModalCreate({ id, modalOpen, setModalOpen }) {

  const optionsColors = [
    { value: "orange", label: "🟠 Orange" },
    { value: "Red", label: "🔴 Red" },
    { value: "Green", label: "🟢 Green" },
    { value: "Pruple", label: "🟣 Pruple" },
    { value: "White", label: "⚪ White" },
    { value: "Blue", label: "🔵 Blue" },
    { value: "Brown", label: "🟤 Brown" },
    { value: "Black", label: "⚫ Black" }
];
const optionsSizes = [
  { value: "XXS", label: "XXS" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "2XL", label: "2XL" }, 
  { value: "3XL", label: "3XL" }
];

const optionsIncludes = [
  { value: "1", label: "💸 Cash on Delivery " },
  { value: "2", label: "🔒 Waranty" },
  { value: "3", label: "🔄 Replacement" },
  { value: "4", label: "💳 Emi" }
];

const optionsMaincat= [
  { value: "1", label: "Electronics" },
  { value: "2", label: "Home Appliances" },
  { value: "3", label: "Clothing and Apparel" },
  { value: "4", label: "Beauty and Personal Care" },
  { value: "5", label: "Health and Wellness" },
  { value: "6", label: "Furniture" },
  { value: "7", label: "Toys and Games" },
  { value: "7", label: "Automotive" },
  { value: "8", label: "Books and Media " },
  
];

const optionsSubcat= [
  { value: "1", label: "Sub cat 1" },
  { value: "2", label: "Sub cat 2" },
  { value: "3", label: "Sub cat 3" },
  { value: "4", label: "Sub cat 4" }
];

const optionsCompany= [
  { value: "1", label: "Apple" },
  { value: "2", label: "Samsung" },
  { value: "3", label: "Sony" },
  { value: "4", label: "GE Appliances" },
  { value: "5", label: "Whirlpool" },
  { value: "6", label: "Bosch" },
  { value: "7", label: "Nike " }, 
];

const optionsTag= [
  { value: "1", label: "tag1" },
  { value: "2", label: "tag2" },
  { value: "3", label: "tag3" },
  { value: "4", label: "tag4" },
  { value: "5", label: "tag5" },
  { value: "6", label: "tag6" },
  { value: "7", label: "tag7 " }, 
];


  const [mainCategory, setMainCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [comanyName, setComapanyName] = useState('');
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [includes, setIncludes] = useState([]);
  const [tags, setTags] = useState([]);

    const handleMainCat = value => {
        setMainCategory(value);
    };

    const handleSubCat = value => {
         setSubCategory(value);
    };

  const handleCompanyName = value => {
        setComapanyName(value);
   };

   const handleColor = value => {
    setColor(value);
   };

   const handleSize = value => {
    setSize(value);
   };

   const handleIncludes = value => {
    setIncludes(value);
   };

   const handleTags = value => {
    setTags(value);
   };




  const productCreateFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formObject = Object.fromEntries(data.entries());
    console.log(formObject);
  }

  return (
    <>
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
          {/* form start  */}
          <form onSubmit={productCreateFormSubmit} className="rounded-lg border border-dashed border-gray-900/25 p-14 m-7 dark:border-white">
            <div className="space-y-12">
              <div className="">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                  <div className="col-span-2">
                    <label
                      htmlFor="product-photo"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100 "
                    >
                      Product photo
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-white px-6 py-12">
                      <div className="text-center">
                        <PhotoIcon
                          aria-hidden="true"
                          className="mx-auto h-12 w-12 text-gray-300"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="product-image-upload"
                            className=" relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 "
                          >
                            <span className="">Upload a file</span>
                            <input
                              id="product-image-upload"
                              name="mainImagePath"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1 dark:text-gray-100">
                            or drag and drop
                          </p>
                        </div>
                        <p className="dark:text-gray-100 text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-4">
                    <label
                      htmlFor="showcase-photo"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                    >
                      Showcase photos (1+)
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-white px-6 py-12">
                      <div className="text-center">
                        <PhotoIcon
                          aria-hidden="true"
                          className="mx-auto h-12 w-12 text-gray-300 inline"
                        />
                        <PhotoIcon
                          aria-hidden="true"
                          className="mx-auto h-12 w-12 text-gray-300 inline"
                        />
                        <PhotoIcon
                          aria-hidden="true"
                          className="mx-auto h-12 w-12 text-gray-300 inline"
                        />
                        <PhotoIcon
                          aria-hidden="true"
                          className="mx-auto h-12 w-12 text-gray-300 inline"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="showcase-image-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="showcase-image-upload"
                              name="showcase_product_photo"
                              type="file"
                              className="sr-only"
                              multiple
                            />
                          </label>
                          <p className="dark:text-gray-100 pl-1">
                            or drag and drop
                          </p>
                        </div>
                        <p className="dark:text-gray-100 text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
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
                        name="productName"
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
                    <MultipleSelect options={optionsMaincat} optionValues={mainCategory} onChange={handleMainCat} selectName={'mainCatId'} isMultiple={false}/>
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
                    <MultipleSelect options={optionsSubcat}  optionValues={subCategory} onChange={handleSubCat}  selectName={'subCatId'} isMultiple={false}/>
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
                    <MultipleSelect options={optionsCompany} optionValues={comanyName} onChange={handleCompanyName}  selectName={'companyId'} isMultiple={false}/>
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
                      htmlFor="price"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Version
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">V</span>
                      </div>
                      <input
                        id="price"
                        name="version"
                        type="text"
                        placeholder="0.0"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                      />
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
                       <MultipleSelect options={optionsColors} optionValues={color} onChange={handleColor} selectName={'colors'} isMultiple={true}/>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                        
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      size
                    </label>
                    <div className="mt-2">
                      <MultipleSelect options={optionsSizes} optionValues={size} onChange={handleSize} selectName={'sizes'} isMultiple={true}/>
                    </div>
                  </div>
                  <div className="col-span-3">
                  <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Includes
                      </label>
                      <div className="mt-2">
                        <MultipleSelect options={optionsIncludes} optionValues={includes} onChange={handleIncludes} selectName={'includes'} isMultiple={true}/>
                      </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Tags
                    </label>
                    <div className="mt-2">
                    <MultipleSelect options={optionsTag} optionValues={tags} onChange={handleTags} selectName={'tagsId'} isMultiple={true}/>
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
                        name="description"
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
                        name="specification"
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
