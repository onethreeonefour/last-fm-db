import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';

function SearchInput(props) {
    //console.log(props)

    const [Query, setQuery] = useState("")

    const onChangeSearch = (e) => {
        setQuery(e.currentTarget.value)

    }

    const handleSubmit = () => {
        props.history.push(`/search/${Query}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={Query}
                    type="input"
                    className="form__field"
                    placeholder="Search Artist"
                    required
                    onChange={onChangeSearch}
                />
            </form>
        </div>
    )
}

export default withRouter(SearchInput)
