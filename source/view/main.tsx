
/// <reference path="../core/imports.ts" />
/// <reference path="../logic/changeHello.ts" />

namespace RefactorThisToYourAppsMainNamespace.View {

    //
    // ─── MAIN VIEW ──────────────────────────────────────────────────────────────────
    //

        export function render ( state: IModel ) {
            const view =
                <h1 onClick = { event => onClick( ) }>
                    { state.message }
                </h1>

            ReactDOM.render( view, document.body )
        }

    //
    // ─── ON CLICK ───────────────────────────────────────────────────────────────────
    //

        function onClick ( ) {
            new Logic.ChangeTextAction("Cozy")
        }

    // ────────────────────────────────────────────────────────────────────────────────

}