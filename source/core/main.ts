
/// <reference path="./storage/storage.ts" />
/// <reference path="../view/main.tsx" />

namespace RefactorThisToYourAppsMainNamespace {

    //
    // ─── MAIN ───────────────────────────────────────────────────────────────────────
    //

        window.onload = ( ) => {
            Storage.subscribe( View.render )
            Storage.INIT( )
        }

    // ────────────────────────────────────────────────────────────────────────────────

}