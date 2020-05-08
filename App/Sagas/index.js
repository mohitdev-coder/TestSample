import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { SitesTypes } from '../Redux/SitesDataRedux'

/* ------------- Sagas ------------- */
import { postSave } from './CoreApiSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(SitesTypes.PERSIST_DATA, postSave),
  ])
}
