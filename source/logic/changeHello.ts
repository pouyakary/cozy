
/// <reference path="../core/imports.ts" />

namespace RefactorThisToYourAppsMainNamespace.Logic {

    //
    // ─── CHANGE NAME ACTION ─────────────────────────────────────────────────────────
    //

        export class ChangeTextAction extends Dispatcher.Action {

            //
            // ─── STORAGE ─────────────────────────────────────────────────────
            //

                private name: string

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( name: string ) {
                    super('change-text-action')
                    this.name = name
                    this.done( )
                }

            //
            // ─── HANDLE ──────────────────────────────────────────────────────
            //

                public handle ( state: IModel ): IModel {
                    return {
                        ...state, message: "Hello, " + this.name
                    }
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}