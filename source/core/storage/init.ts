
/// <reference path="./model.ts" />

namespace RefactorThisToYourAppsMainNamespace.Storage {

    //
    // ─── CREATE INITIAL STATE ───────────────────────────────────────────────────────
    //

        /**
         * This is the function where you must specify the inital storage
         */
        export function createInitalState ( ): IModel {
            return {
                message: "Hello, World"
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}