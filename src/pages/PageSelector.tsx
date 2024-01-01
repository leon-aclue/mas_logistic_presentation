import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {pages} from "../config/pages";
import {pageSliceSelector, setPage} from "../store/slice/pageSlice";

function PageSelector() {
    const dispatch = useDispatch();
    const {page} = useSelector(pageSliceSelector);

    useEffect(() => {
        if(page >= pages.length) {
            dispatch(setPage(0));
        }
    }, [page])

    if(page >= pages.length) {
        return null;
    }

    return (
        <>
            {pages[page].content}
        </>
    );
}

export default PageSelector;