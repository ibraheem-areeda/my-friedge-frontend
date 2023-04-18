
import List from "../List/List"

function SearchResult(props) {
    console.log("SRESULT",props.data);
    return (<div className="SearchResult">
        <List data={props.data}type={props.type}/>
    </div>);
}

export default SearchResult;