
namespace RefactorThisToYourAppsMainNamespace.Dispatcher {

    //
    // ─── ACTION CLASS ───────────────────────────────────────────────────────────────
    //

        export class Action {

            //
            // ─── STORAGE ─────────────────────────────────────────────────────
            //

                private _id: string

                public static readonly RegisteredIDs = new Set<string>( )

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( id: string ) {
                    if ( Action.RegisteredIDs.has( id ) )
                        throw "Another action with the id of '" + id +
                              "' is allready registered"

                    this._id = id,
                    Action.RegisteredIDs.add( id )
                }

            //
            // ─── ON DONE ─────────────────────────────────────────────────────
            //

                public done ( ) {
                    Dispatcher.fireAction( this )
                }

            //
            // ─── ID ──────────────────────────────────────────────────────────
            //

                public get id ( ) {
                    return this._id
                }

            //
            // ─── HANDLE ──────────────────────────────────────────────────────
            //

                public handle ( state: IModel ) {
                    return state
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}