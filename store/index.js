import { createClient } from 'contentful'
import showdown from 'showdown'

import Vue from 'vue'
import Vuex from 'vuex'

const converter = new showdown.Converter({parseImgDimensions: true, tables: true, openLinksInNewWindow: true})
converter.setFlavor('github')

Vue.use(Vuex)

export const state = () => ({
    sidebar: false
})

export const mutations = {
    toggleSidebar (state) {
        state.sidebar = !state.sidebar
    },
    updateEntries (state, entries) {
        state.entries = entries
    },
    setIsLoading (state, value) {
        state.isLoading = value
    }
}

const client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: '6wsw3mwdz1ta',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: '3454ed6471b49dc9c3da8188e650bb72c1e0b0a76a4d10f7c186e0609413712f'
})

export const store = new Vuex.Store({
    state: {
        entries: [],
        pages: [],
        isLoading: true
    },
    getters: {
        isLoading: state => state.isLoading,
        allEntries: state => state.entries
    },
    mutations: {

    },
    actions: {
        loadEntries ({commit}) {
            console.log('loading Entries')
            // QUERY ALL ENTRIES IN ASCENDING ORDER // NEWEST COMES FIRST
            client.getEntries({order: '-sys.createdAt'})
				  .then((response) => response.items.map(entry => {
					  return {
						  ...entry.fields,
						  // markedBody: marked(entry.fields.body),
						  markedBody: converter.makeHtml(entry.fields.body),
						  id: entry.sys.id,
						  createdAt: entry.sys.createdAt
					  }
				  }))
				  .then((entries) => {
					  console.log(entries)
					  commit('setIsLoading', false)
					  commit('updateEntries', entries)
				  })
				  .catch(console.error)
        }
    }
})
