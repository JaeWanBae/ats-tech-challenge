import {Checkbox} from './Checkbox.js';

const FilterCheckbox = (props) => {
    const {columns, getToggleHideAllColumnsProps} = props;
    return (
        <>
        {/* checkbox for toggling all column options. */}
        <Checkbox {...getToggleHideAllColumnsProps()}/>
            {
                // map through the column headers and create checkbox for each column
                columns.map( (column, i) => {
                    return (
                        <div className={`checkbox${i+1}`} key={`key${i}`}>
                            <input type="checkbox" name={column.Header} {...column.getToggleHiddenProps()}/>
                            <label htmlFor={column.Header}>{column.Header}</label>
                        </div>
                    )
                })
            }
        </>
    )
}

export default FilterCheckbox;