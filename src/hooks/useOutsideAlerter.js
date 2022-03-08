import { useEffect } from 'react';

/* hook that alerts clicks outside of the passed ref */
function useOutsideAlerter(ref, callback) {
    useEffect(() => {
        /* if clicked on outside of element */
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        }
        // bind the event listener
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            // unbind the event listener on clean up
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, [callback, ref]);
}

export default useOutsideAlerter;
