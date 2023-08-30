# General
-  The browser's default style can be removed with a CSS reset. There is a CSS reset function in index.css.

- Colors:

  - black-blue: `#21295C`
  - red-button: `#f84F68`
  - white-blue: `#EFECFF`
  - white: `white`

- Font:

  - Font family: `Roboto` , sans-serif
  - Title font size: `20px`
  - Paragraph font size: `16px`

- No inline CSS
# Project folder structure

```
|--- document/
|    |--- convention-guide.md
|
|--- node_modules/
|
|--- public/
|
|--- src/
|    |--- component/
|    |    |--- Button/
|    |         |--- Button.css
|    |    |--- TodoInput/
|    |         |--- TodoInput.css
|    |         |--- TodoInput.jsx
|    |    |--- TodoList/
|    |         --- TodoList.css
|    |         |--- TodoList.jsx
|    |
|
|--- App.css
|--- App.jsx
|--- index.css
|--- main.jsx

```
# My index.css root
```css
:root {
    --black-blue: #21295C;
    --red-button: #F84F68;
    --white-blue: #EFECFF;
    --yellow-gold:#EFBE00;
    --white: white;
    --roboto: "Roboto", sans-serif;
    --title: 20px;
    --paragraph: 16px;
  }
```
In this case if you want to change color just change it , example you want to change the title size 

```css

.font-t{
    font-size: var(--title);
  }

```
so just change the --title : 24px.

# Must Follow

##  Margin:
  
  -  `.margin-bottom-10` :  margin bottom 10px

  - `.margin-top-10` :  margin top 10px
  
  - `.margin-top-20` :  margin top 20px

  - `.margin` :  margin 12px

  - `.margin-x-y`:  margin 3% auto

## How to use

```html
<h1 className='text-center margin-top-20'>My Todos</h1>
```

## Padding:

  - `.padding` :  padding 12px

  - `.padding-x-y`:  padding 12px 20px

## How to use

```html
<div className='todo-input-button padding'>
        <button type='button' onClick={handleAddTask} className='primarybtn'>
          Add 
        </button>
      </div>
```
## Flex:

 - `.flex` :  display flex

 - `.flex-col` :  flex-direction column

 - `.text-center`:  text-center center

 - `.space-between`:  justify-contnet space-between

 - `.justify-center`: justify-content center

## How to use

```html
<div className='todo-input-item flex flex-col align-center padding'>
```

## width:

 - `.w-f` : width 100%

 - `w.90` : width 90%

## How to use

```html
 <div className='todo-input w-f ....... '>
```


# Naming Conventions
 
 - Varibles and Functions:
   
   - Use description names that convey the purpose of the vairable or function.
   - Follow CamelCase for function and method names   
  (exmaple: `editTask`)
  ```jsx
      const [editingTaskId, setEditingTaskId] = useState(null);

      const editTask = (taskId) => {
        // ...
        };  
  ```
- Class:

  - Use lowercase and hyphen-separated class names(example: `todo-list`,`edit-popup`).
  - Reflect the purpose of the element in the class name.
```html
    <div className='todo-list-item'>
    {/* ... */}
    </div>
```

# Comments:

- Use comments to explain complex logic, especially in functions that have multiple steps.

- Keep comments concise and aligned with the code they're explaining.

``` jsx
const saveEditedTask = () => {
  if (editingTaskId !== null) {
    // Update task with new data
    setEditingTaskId(null);
    // ...
  }
};
```



# Modal :

- When the "Edit" button is clicked, the modal appears.
- The modal lets users edit the task's title and description.
- Users can save changes or cancel the edit.
- A backdrop prevents interactions outside the modal.

![pop-card](/src/assets/Edit-pop-up.png)
