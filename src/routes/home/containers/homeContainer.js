import { connect } from 'react-redux';
import Home from '../components/home';
import { setName } from '../../../actions/homeaction'

const mapStateToProps = (state) =>({
    name: state.home.name
});

const mapActionCreators = {
    setName
}

export default connect(mapStateToProps, mapActionCreators)(Home);