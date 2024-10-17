import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {

    //State
    const[searchParams, setSearchParams] = useSearchParams()
    const[vans, setVans] = React.useState()

    const typeFilter = searchParams.get("type")

    //fetching data as soon as the Vans page loads, and only fetch it the one time
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter
        ? vans?.filter(van => van.type === typeFilter)
        : vans
        /**
 * {
    * id: "1", 
    * name: "Modest Explorer", 
    * price: 60, 
    * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", 
    * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", 
    * type: "simple"
 * }
 */
    const vanElements = displayedVans?.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id}
                  state={{ search: `?${searchParams.toString()}` }}
            >
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>

             <div className="van-list-filter-buttons">

                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

                {/* //Second Option for Linking Parameters
                <button 
                    onClick={() => setSearchParams({type: "simple"})}
                    className="van-type simple"
                >Simple</button>
                <button 
                    onClick={() => setSearchParams({type: "luxury"})}
                    className="van-type luxury"
                >Luxury</button>
                <button 
                    onClick={() => setSearchParams({type: "rugged"})}
                    className="van-type rugged"
                >Rugged</button>
                <button 
                    onClick={() => setSearchParams({})}
                    className="van-type clear-filters"
                >Clear filter</button> */}

                {/* //HardCode Option
                <Link 
                    to="?type=simple"
                    className="van-type simple"
                >Simple</Link>
                <Link 
                    to="?type=luxury"
                    className="van-type luxury"
                >Luxury</Link>
                <Link 
                    to="?type=rugged"
                    className="van-type rugged"
                >Rugged</Link>
                <Link 
                    to="."
                    className="van-type clear-filters"
                >Clear filter</Link> */}
            
            </div>

            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}