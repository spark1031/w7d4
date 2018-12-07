import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectPokemonItem } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return ({
    item: selectPokemonItem(state, ownProps.match.params.itemId)
  });
};

// const mapDispatchToProps = dispatch => ({
//   requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
// });

export default connect(
  mapStateToProps
)(ItemDetail);