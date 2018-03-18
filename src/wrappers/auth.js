import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'
import { userStatus } from '../reducers/initialState'
import { push } from 'react-router-redux'

import React from 'react'
const Loading = () => <h3>Loading (TODO:: put a real component here)</h3>

const locationHelper = locationHelperBuilder({})

const userIsAuthenticatedDefaults = {
  authenticatedSelector: state => state.user.status === userStatus.LOGGED_IN,
  authenticatingSelector: state => state.user.status === userStatus.LOGGING_IN,
  wrapperDisplayName: 'UserIsAuthenticated'
}

export const userIsAuthenticated = connectedAuthWrapper(userIsAuthenticatedDefaults)

export const userIsAuthenticatedRedir = connectedReduxRedirect({
  ...userIsAuthenticatedDefaults,
  AuthenticatingComponent: Loading,
  redirectPath: '/login',
  redirectAction: (newLoc) => (dispatch) => {
    dispatch(push(newLoc))
  },
})

const userIsNotAuthenticatedDefaults = {
  // Want to redirect the user when they are done loading and authenticated
  authenticatedSelector: state => state.user.status !== userStatus.LOGGED_IN,
  wrapperDisplayName: 'UserIsNotAuthenticated'
}

export const userIsNotAuthenticated = connectedAuthWrapper(userIsNotAuthenticatedDefaults)

export const userIsNotAuthenticatedRedir = connectedReduxRedirect({
  ...userIsNotAuthenticatedDefaults,
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/protected',
  allowRedirectBack: false,
  redirectAction: (newLoc) => (dispatch) => {
     dispatch(push(newLoc))
  },
})
