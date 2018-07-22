
/// <reference path="./model.ts" />
/// <reference path="./init.ts" />

namespace RefactorThisToYourAppsMainNamespace.Storage {

    //
    // ─── TYPES ──────────────────────────────────────────────────────────────────────
    //

        export type TSubscriber = ( state: IModel ) => void

    //
    // ─── STORAGE ────────────────────────────────────────────────────────────────────
    //

        /**
         * This is the _Internal State Storage_ of the system. What it does is simply
         * to keep any state that has ever existed on the app.
         *
         * __Important__ &mdash; Try to remember that this storage __SHOULD NEVER BE
         * ALTERED BY ANYTHING RATHER THAN `undoLastState( )` and `setState( )`. TO READ
         * THE STATE NOTHING BUT THE `getState( )` must be used
         */

        const _stateStorage = new Array<IModel> ( )


        /**
         * Subscriptions are functions that are called when the state changes
         */

        const _subscribersStorage = new Set<TSubscriber>( )

    //
    // ─── SET INITIAL STATE ──────────────────────────────────────────────────────────
    //

        /**
         * Sets an initial state. __Remember that this should only be used once and
         * within the very start of the software.__
         */
        export function INIT ( ) {
            const initialState = createInitialState( )
            _stateStorage.push( initialState )
            runSubscribers( initialState )
        }

    //
    // ─── RUN SUBSCRIBERS ────────────────────────────────────────────────────────────
    //

        function runSubscribers ( state: IModel ) {
            for ( const subscriber of _subscribersStorage )
                subscriber( state )
        }

    //
    // ─── GET STATE ──────────────────────────────────────────────────────────────────
    //

        /** Returns a copy of the current (last) state. */
        export function getState ( ): IModel {
            return Object.assign({ }, _stateStorage[ _stateStorage.length - 1 ])
        }

    //
    // ─── SET STATE ──────────────────────────────────────────────────────────────────
    //

        export type StateSetter = ( state: IModel ) => IModel

        /** Sets a new state */
        export function setState ( setter: StateSetter ) {
            const lastState =
                getState( )
            const newState =
                setter( lastState )

            _stateStorage.push( newState )

            runSubscribers( newState )
        }

    //
    // ─── SUBSCRIBE ──────────────────────────────────────────────────────────────────
    //

        /** Subscribes a new function to run on state changes */
        export function subscribe ( subscriber: TSubscriber ) {
            _subscribersStorage.add( subscriber )
        }

    //
    // ─── UNSUBSCRIBE ────────────────────────────────────────────────────────────────
    //

        /** Unsubscriebs a function to be runned state changes */
        export function unsubscribe ( subscriber: TSubscriber ) {
            _subscribersStorage.delete( subscriber )
        }

    // ────────────────────────────────────────────────────────────────────────────────


}