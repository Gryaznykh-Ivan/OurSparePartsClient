import { StatusState } from "../types/store";

const initialState: StatusState = {
    data: [{
        statusId: 1,
        title: 'В обработке'
    },
    {
        statusId: 2,
        title: 'В пути'
    },
    {
        statusId: 3,
        title: 'Ожидает получения'
    },
    {
        statusId: 4,
        title: 'Выдан'
    },
    {
        statusId: 5,
        title: 'Возврат'
    }]
}

export default function StatusesReducer(state = initialState): StatusState {
    return state;
}