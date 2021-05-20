import {
    useTable,
    useGlobalFilter,
    useSortBy,
    usePagination,
} from 'react-table';
import {useMemo, useState} from 'react';
import {Columns} from './Columns.js';
import SearchBar from './SearchBar.js';
import FilterCheckbox from './FilterCheckbox.js';
import Pagination from './Pagination.js';

const DisplayData = (props) => {;
    // useState to hide and show filtering legend
    const [showLegend, setShowLegend] = useState(false);
    // useMemo hook to ensure that data isnt recreated on every render
    const columns = useMemo(() => Columns,[]);
    const data = useMemo(() => props.data, [props.data]);

    const newTitle = props.title.replace(/(.csv)/g, '');

    // destructuring useTable to get the functions and variables to create table
    const {
        getTableProps, 
        getTableBodyProps, 
        headerGroups,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps,
        page,
        canPreviousPage,
        canNextPage,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        pageCount,
        state,
        setGlobalFilter
    } = useTable({
        columns,
        data,
        initialState: {pageIndex: 0}
    },useGlobalFilter, 
    useSortBy, 
    usePagination);


    const {pageIndex, pageSize, globalFilter} = state

    // onClick function to change showLegend state to true and add/removes class to show the actual legend box
    const handleClick = () => {
        setShowLegend(!showLegend);
        const checkbox = document.querySelector('.checkbox');
        if (showLegend === true) {
            checkbox.classList.add("hideLegend");
            checkbox.classList.remove("showLegend");
        } else {
            checkbox.classList.add("showLegend");
            checkbox.classList.remove("hideLegend");
        }

    }

    return (
        <div>
            <h2>{newTitle}</h2>
            <SearchBar 
            filter={globalFilter}
            setFilter={setGlobalFilter}/>
            {/* depending on the state of showLegend, it changes the chevron */}
            {
                showLegend === false ? (
                <div className="checkbox">
                <FilterCheckbox 
                columns={allColumns}
                getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}/>
                <i className="fas fa-chevron-left" onClick={handleClick}></i>
            </div>) : (<div className="checkbox">
                <FilterCheckbox 
                columns={allColumns}
                getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}/>
                <i className="fas fa-chevron-right" onClick={handleClick}></i>
            </div>)
            }
            <table {...getTableProps()}>
                <thead>
                    {
                        // creates the column section of the table
                        headerGroups.map((headerGroup) => {
                            return (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {
                                        headerGroup.headers.map((columns) => {
                                            return (
                                                // adding sorting function to the column of table
                                                <th {...columns.getHeaderProps(columns.getSortByToggleProps())}>{columns.render('Header')}
                                                    {columns.isSorted
                                                        ? columns.isSortedDesc
                                                            ? ' 🔽'
                                                            : ' 🔼'
                                                        : ''}
                                                </th>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        // creates the row sections fo the table
                        page.map((row) => {
                            prepareRow(row);
                            return(
                                <tr {...row.getRowProps()}>
                                    {
                                    row.cells.map( (cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        )
                                    })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Pagination
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            gotoPage={gotoPage}
            nextPage={nextPage}
            previousPage={previousPage}
            setPageSize={setPageSize}
            pageSize={pageSize}
            pageIndex={pageIndex}
            pageCount={pageCount}
            />
        </div>
    )
}

export default DisplayData;