import { AsyncStorage } from 'react-native'

import { call, put } from 'redux-saga/effects'
import SitesActions from '../Redux/SitesDataRedux'

export function * postSave (action) {
  const {data} = action
  try {
    yield AsyncStorage.removeItem('@NCEP:data', (err) => {
      if (err) {
        console.log(`Error removing data: ${err}`)
      } else {
        console.log('setItem CalledDDDDDD')
        AsyncStorage.setItem('@NCEP:data', JSON.stringify(data), () => {
          console.log('setItem CalledDDDDDDDDDDDD')
        })
      }
    })
  } catch (err) {
    console.log(`Error storing data: ${err}`)
  }
  yield put(SitesActions.dataSaved())
}
