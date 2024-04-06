import React from "react";

const SelectSortId = ({ sort_ids, handle_sort_order_change }) => {
    return (
        <select className="select-sort" value={sort_ids} onChange={handle_sort_order_change}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
    );
};


export default SelectSortId;