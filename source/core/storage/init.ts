
/// <reference path="./model.ts" />

namespace RefactorThisToYourAppsMainNamespace.Storage {

    //
    // ─── CREATE INITIAL STATE ───────────────────────────────────────────────────────
    //

        /**
         * This is the function where you must specify the initial storage
         */
        export function createInitialState ( ): IModel {
            return {
                message: "Hello, World"
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}