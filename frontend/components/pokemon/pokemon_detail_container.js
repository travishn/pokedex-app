import React from 'react';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.id],
  // items:
});

const mapDispatchToProps = (dispatch) => ({

});
