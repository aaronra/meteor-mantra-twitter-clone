import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Profile from '../components/profile.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  logout: actions.users.logout,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Profile);
