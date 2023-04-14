// toDo object factory function

const ToDoFactory = () => {
  let status = false;
  let title = '';
  let description = '';
  let dueDate = '12-12-12';
  let priorty = 'low';

  // toggle status setter
  const changeStatus = () => {
    status = status !== true;
  };

  // title and description setter
  const changeText = (textToChange, newChange) => {
    if (textToChange === 'title') {
      title = newChange; } else {
      description = newChange;
    }
  };

  // due date setter
  const changeDate = (newDate) => {
    // enter formatting steps here
    dueDate = newDate;
  };

  // toggle priority
  const changePriority = () => {
    if (priorty === 'low') {
      priorty = 'high';
    } else {
      priorty = 'low';
    }
  };

  // getter for all values
  const getValue = (valRequested) => {
    switch (valRequested) {
    case 'status':
      return status;
    case 'title':
      return title;
    case 'description':
      return description;
    case 'dueDate':
      return dueDate;
    case 'priority':
      return priorty;
    default:
      return 'nothing';
    }
  }

  return { changeStatus, changeText, changeDate, changePriority, getValue };
};




const test = ToDoFactory();
console.log(test.getValue('status'));
test.changeStatus();
console.log(test.getValue('status'));