import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionsCreators from '../store/actions-creator/'

const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(ActionsCreators, dispatch);
};

export default useActions;