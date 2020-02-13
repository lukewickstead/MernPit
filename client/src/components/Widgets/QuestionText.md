Initial state:

```js
<QuestionText
    handleInputChange={() => {}}
    id='QuestionNumberId'
    isInvalid={true}
    isVisited={false}
    maxLength={10}
    name='ExampleNumber'
    onblur={() => {}}
    title='Example Number'
    validationMessage=''
    value='Some text'
/>
```

Valid Example:

```js
<QuestionText
    handleInputChange={() => {}}
    id='QuestionNumberId'
    isInvalid={false}
    isVisited={true}
    maxLength={10}
    name='ExampleNumber'
    onblur={() => {}}
    title='Example Number'
    validationMessage=''
    value='Some text'
/>
```

Invalid Example:

```js
<QuestionText
    handleInputChange={() => {}}
    id='QuestionNumberId'
    isInvalid={true}
    isVisited={true}
    maxLength={10}
    name='ExampleNumber'
    onblur={() => {}}
    title='Example Number'
    validationMessage='The data is not valid'
    value='Some text'
/>
```