Initial state:

```js
<QuestionNumber
    handleInputChange={() => {}}
    id='QuestionNumberId'
    isInvalid={true}
    isVisited={false}
    maxLength={10}
    name='ExampleNumber'
    onblur={() => {}}
    title='Example Number'
    validationMessage=''
    value='12345'
/>
```

Valid Example:

```js
<QuestionNumber
    handleInputChange={() => {}}
    id='QuestionNumberId'
    isInvalid={false}
    isVisited={true}
    maxLength={10}
    name='ExampleNumber'
    onblur={() => {}}
    title='Example Number'
    validationMessage=''
    value='12345'
/>
```

Invalid Example:

```js
<QuestionNumber
    handleInputChange={() => {}}
    id='QuestionNumberId'
    isInvalid={true}
    isVisited={true}
    maxLength={10}
    name='ExampleNumber'
    onblur={() => {}}
    title='Example Number'
    validationMessage='The data is not valid'
    value='12345'
/>
```