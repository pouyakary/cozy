
/// <reference path="../storage/model.ts" />
/// <reference path="../storage/storage.ts" />
/// <reference path="./action.ts" />


namespace RefactorThisToYourAppsMainNamespace.Dispatcher {

    //
    // ─── ACTION TYPE ────────────────────────────────────────────────────────────────
    //

        export interface IAction {
            actionId: string
        }

    //
    // ─── STORAGE ────────────────────────────────────────────────────────────────────
    //

        const _actionsStorage = new Map<string, Action>( )

    //
    // ─── FIRE ───────────────────────────────────────────────────────────────────────
    //

        export function fireAction ( action: Action ) {
            if ( !Action.RegisteredIDs.has( action.id ) )
                throw "Action '" + action.id + "' is not registered."

            Storage.setState( state => {
                return action.handle( state )
            })
        }

    // ────────────────────────────────────────────────────────────────────────────────

}