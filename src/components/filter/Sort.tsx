import React from 'react';

const Sort = () => {
    return (
        <div className={"flex gap-y-3"}>
            <form className={"flex flex-col gap-x-3"}>
                <label className={"text-lg font-poppinsFont font-semibold italic"}>Sort by:</label>
                <select className={"rounded-md p-1 font-poppinsFont font-normal bg-gray-100 text-sm"}>
                    <option value={"uploadDate"}>Best</option>
                    <option value={"averageRate"}>Average rating</option>
                    <option value={"uploadDate"}>Date published</option>
                </select>
            </form>

        </div>
    );
};

export default Sort;