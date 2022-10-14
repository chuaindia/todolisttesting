/**
 * @jest-environment jsdom
 */
 import TodoList from './modules/todolist.js';

 describe('Test if function are working', () => {
   const testToDoTask = new TodoList();
 
   test('Test addTask function is working', () => {
     testToDoTask.addTask('test1');
     testToDoTask.addTask('test2');
     expect(testToDoTask.listArray[0].description).toBe('test1');
   });
 
   test('Test delete function is working', () => {
     testToDoTask.removeTask(1);
     expect(testToDoTask.listArray.length).toBe(1);
   });
 });