import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { updateQuery } from "./SearchBarSlice";
import "./SearchBar.css";

export const SearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams({q:""})
    const q = searchParams.get("q")
    const dispatch = useDispatch()

    useEffect(()=>{dispatch(updateQuery(q))},[q,dispatch])

    return (
        <div className="search-bar-wrapper">
            <input type="text" name="search" id="search" placeholder="Search by title"  value={q} onChange={e => setSearchParams({q: e.target.value})} />
        </div>     
    )
}