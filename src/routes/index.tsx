import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useRecipeSearch } from '../hooks/useRecipeSearch';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
    const [ searchValue, setSearchValue ] = useState("");
    const { data } = useRecipeSearch(searchValue)

    const handleSearch = () => {
        setSearchValue()
    }

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <input value={searchValue}></input>
      <button type="submit" onSubmit={handleSearch}></button>
    </div>
  )
}