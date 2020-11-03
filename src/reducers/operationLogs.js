import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions';

const operationLogs = (state = [], action) => {
  const operationLog = {
    description: action.description,
    operatedAt: action.operatedAt,
  };
  switch (action.type) {
    case ADD_OPERATION_LOG:
      return [operationLog, ...state];
    case DELETE_ALL_OPERATION_LOGS:
      return [];
    default:
      return state;
  }
};

export default operationLogs;
