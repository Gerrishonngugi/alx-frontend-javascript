export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Using block scoping to shadow outer variables
    const task = true;
    const task2 = false;
    console.log('Block scope values:', task, task2);
  }

  return [task, task2];
}
