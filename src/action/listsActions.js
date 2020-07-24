 import {CONSTANTS} from "../action"; 
 
 export const addList = title => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title,
    };
};

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIdIndexStart,
    droppableIdIndexEnd,
    draggableId, 
    type,
) => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIdIndexStart,
            droppableIdIndexEnd,
            draggableId,
            type
        }
    };
};