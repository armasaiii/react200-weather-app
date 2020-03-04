import SearchHistory from './SearchHistory';
import { connect } from "react-redux";


function mapStoreToProps(store) {
    return {
        information: store.search.information
    }
}

export default connect(mapStoreToProps)(SearchHistory);
