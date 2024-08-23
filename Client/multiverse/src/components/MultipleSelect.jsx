import { useState } from "react";
import Select from "react-tailwindcss-select";

const MultipleSelect = ({ options, selectName, isMultiple, onChange, optionValues }) => {
    

    return (
        <Select
            name={selectName}
            primaryColor={"indigo"}
            value={optionValues}
            onChange={onChange}
            options={options}
            isMultiple={isMultiple}
            isSearchable={true}
            isClearable={true}
            formatGroupLabel={data => (
                <div className={`py-2 text-xs flex items-center justify-between`}>
                    // 👉 data represents each subgroup
                    <span className="font-bold">{data.label}</span>
                    <span className="bg-gray-200 h-5 h-5 p-1.5 flex items-center justify-center rounded-full">
                        {data.options.length}
                    </span>
                </div>
            )}
        />
    );
};

export default MultipleSelect;