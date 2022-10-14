/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/**
 * @jest-environment jsdom
 */
 import TodoList from './modules/todolist.js';

 describe('Test if functions are working', () => {
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
 
   test('Test if the changeComplete function is working', () => {
     testToDoTask.changeComplete(1);
     expect(testToDoTask.listArray[0].completed).toBe(true);
   });
 
   test('Test if Edit function is working', () => {
     testToDoTask.editTask(1, 'test1');
     expect(testToDoTask.listArray[0].description).toBe('test1');
   });
 
   test('Test  for clear Completed function is working properly', () => {
     testToDoTask.clearCompleted();
     expect(testToDoTask.listArray.length).toBe(0);
   });
 });