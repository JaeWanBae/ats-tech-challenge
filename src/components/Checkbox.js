import {forwardRef, useRef, useEffect} from 'react';

export const Checkbox = forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = useRef()
      const resolvedRef = ref || defaultRef
  
      useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return (
      <div className="checkbox0">
        <input type="checkbox" name="toggleAll"ref={resolvedRef} {...rest} />
        <label htmlFor="toggleAll">Toggle All</label>
      </div>
      )
    }
  )