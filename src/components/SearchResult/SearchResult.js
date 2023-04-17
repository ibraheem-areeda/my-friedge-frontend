
import List from "../List/List"

function SearchResult(props) {
    
    return (<div className="SearchResult">
        <List data={props.data}type={props.type} source={props.source} />
    </div>);
}

export default SearchResult;