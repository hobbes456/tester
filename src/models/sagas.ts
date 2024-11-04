import { all } from "redux-saga/effects";

import { watchUserSagas } from "./user/sagas";
import { watchTestsSagas } from "./tests/sagas";

export default function* rootSaga() {
    yield all([watchUserSagas(), watchTestsSagas()]);
}
