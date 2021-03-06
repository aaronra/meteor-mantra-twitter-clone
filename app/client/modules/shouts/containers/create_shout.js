import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CreateShout from '../components/create_shout.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('SHOUT_ERROR');
  onData(null, {error});
};

export const depsMapper = (context, actions) => ({
  postShout: actions.shout.postShout,
  clearErrors: actions.shout.clearError,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateShout);
