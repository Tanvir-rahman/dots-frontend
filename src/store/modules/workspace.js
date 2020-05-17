import { getWorkspaces } from '@/api/workspace'

const state = {
  workspaces: [],
  defaultWorkspace: undefined,
  workspacesLoaded: false
}

const mutationTypes = {
  SET_WORKSPACES: '[Workspaces] Set Workspaces',
  SET_DEFAULT_WORKSPACE: '[Workspace] Set Default Workspace'
}

const mutations = {
  [mutationTypes.SET_WORKSPACES]: (state, payload) => {
    state.workspaces = payload
    state.workspacesLoaded = true
  },
  [mutationTypes.SET_DEFAULT_WORKSPACE]: (state, payload) => {
    state.defaultWorkspace = payload
  }
}

export const workspaceActions = {
  GET_WORKSPACES: '[Workspaces] Get Workspaces'
}

const actions = {
  async [workspaceActions.GET_WORKSPACES]({ commit }) {
    try {
      const workspaces = await getWorkspaces()
      if (workspaces) {
        const defaultWorkspace = workspaces.filter(ws => ws.isDefault)[0]
        commit(mutationTypes.SET_DEFAULT_WORKSPACE, defaultWorkspace)
      }
      commit(mutationTypes.SET_WORKSPACES, workspaces)
    } catch (e) {
      throw new Error(`${workspaceActions.GET_WORKSPACES} failed with ${e}`)
    }
  }
}

const getters = {
  getDefaultWorkspace: state => state.defaultWorkspace,
  getOtherWorkspaces: state => state.workspaces.filter(ws => !ws.isDefault)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
