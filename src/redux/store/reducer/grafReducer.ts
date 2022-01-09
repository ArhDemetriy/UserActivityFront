import { TAction, TDefaultAction } from "../reducer"

export const REPLACE_HISTOGRAM = 'REPLACE_HISTOGRAM'
export const REPLACE_SPLINE = 'REPLACE_SPLINE'
export const SET_RETENTION = 'SET_RETENTION'

export function grafReducer(graph: TGraph, action: TAction): TGraph {

    if (action.type === REPLACE_HISTOGRAM && action.payload.histogram ) {
        return { ...graph, histogram: action.payload.histogram }
    } else if (action.type === REPLACE_SPLINE && action.payload.spline) {
        return { ...graph, spline: action.payload.spline }
    } else if (action.type === SET_RETENTION && action.payload.retention !== undefined) {
        return { ...graph, retention: +action.payload.retention }
    }

    return graph
}

export type TGraph = {
    retention: number
    /** высоты столбцов гистограммы */
    histogram: {
        bins: number[]
        maxBin: number
    }
    /** точки сшивки кривых безье */
    spline: number[]
}

export interface TGrafReducerAction extends TDefaultAction {
    type: typeof REPLACE_HISTOGRAM | typeof REPLACE_SPLINE | typeof SET_RETENTION
    payload: Partial<TGraph>
}

export default grafReducer
