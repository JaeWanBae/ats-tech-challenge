const Pagination = (props) => {
    // destructuring props
    const {
        canPreviousPage,
        canNextPage,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        pageIndex,
        pageCount,
        pageSize
    } = props;
    return(
        <div className="paginationBox">
            <div className="pageButton">
                {/* buttons for moving through pages 1 at a time */}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>
            </div>
            <div className="currentpage">
                {/* shows the page that the user is on */}
                <p>Current page: {pageIndex + 1} of {pageCount}</p>
            </div>
            {/* search bar to manually go to a certain page */}
            <div className="pageSelection">
            Go to page:{' '}
            <input
                type="number"
                defaultValue={pageIndex + 1}
                min="1"
                max={pageCount}
                onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
            }}/>
            </div>
            {/* option to change how much data is shown per page */}
            <select value={pageSize} onChange={(e) => {setPageSize(Number(e.target.value))}}>
                {[10,20,30,40,50].map((pageSize) => (
                    <option value={pageSize} key={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default Pagination;